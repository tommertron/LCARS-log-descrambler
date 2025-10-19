
(() => {
  const logDisplay = document.getElementById('log-display');
  if (!logDisplay) {
    return;
  }
  const statusIndicator = document.getElementById('status-indicator');
  const attemptsWarning = document.getElementById('attempts-remaining');
  const decryptButton = document.getElementById('decrypt-button');
  const codeInput = document.getElementById('codeword-input');
  const adminButton = document.getElementById('admin-button');
  const adminModal = document.getElementById('admin-modal');
  const adminLoginView = document.getElementById('admin-login-view');
  const adminDashboard = document.getElementById('admin-dashboard');
  const adminLoginForm = document.getElementById('admin-login-form');
  const adminPasswordInput = document.getElementById('admin-password-input');
  const adminLoginError = document.getElementById('admin-login-error');
  const adminStatusMessage = document.getElementById('admin-status-message');
  const adminCloseButtons = adminModal ? adminModal.querySelectorAll('.admin-close') : [];
  const adminAttemptsForm = document.getElementById('admin-attempts-form');
  const adminAttemptLimitInput = document.getElementById('admin-attempt-limit');
  const adminPasswordForm = document.getElementById('admin-password-form');
  const adminPasswordNew = document.getElementById('admin-password-new');
  const adminPasswordConfirm = document.getElementById('admin-password-confirm');
  const adminCodesForm = document.getElementById('admin-codes-form');
  const adminCodeQuarter = document.getElementById('admin-code-quarter');
  const adminCodeHalf = document.getElementById('admin-code-half');
  const adminCodeFull = document.getElementById('admin-code-full');
  const adminCodeWipe = document.getElementById('admin-code-wipe');
  const adminLogForm = document.getElementById('admin-log-form');
  const adminLogSelect = document.getElementById('admin-log-select');
  const adminLogIdInput = document.getElementById('admin-log-id');
  const adminLogTitle = document.getElementById('admin-log-title');
  const adminLogContent = document.getElementById('admin-log-content');
  const adminLogNewButton = document.getElementById('admin-log-new');
  const adminLogSetActiveButton = document.getElementById('admin-log-set-active');
  const adminLogDeleteButton = document.getElementById('admin-log-delete');
  const audioBeep = document.getElementById('audio2');

  const playBeep = () => {
    if (!audioBeep) {
      return;
    }
    try {
      audioBeep.pause();
      audioBeep.currentTime = 0;
      const playback = audioBeep.play();
      if (playback && typeof playback.catch === 'function') {
        playback.catch(() => {});
      }
    } catch (error) {
      console.warn('Unable to play LCARS audio', error);
    }
  };

  const scrambleSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=<>?/|{}[]';
  const wordCharPattern = /[A-Za-z0-9]/;
  const STORAGE_KEYS = {
    config: 'lcars_terminal_config',
    state: 'lcars_terminal_state'
  };
  const DEFAULT_CODES = {
    quarter: 'warpgrind',
    half: 'phaserfury',
    full: 'holobollocks',
    wipe: 'sfstfu'
  };
  const DEFAULT_PASSWORD = 'ENGAGE';
  const DEFAULT_ATTEMPT_LIMIT = 3;
  const DEFAULT_ENTRY_ID = 'default';

  let tokens = [];
  let tokenWordIndexMap = [];
  let wordOriginals = [];
  let scrambledWords = [];
  let wordRevealed = [];
  let currentEntryState = null;
  let isAdmin = false;

  const hashPassword = (value) => {
    try {
      return btoa(unescape(encodeURIComponent(value)));
    } catch (error) {
      return value;
    }
  };

  const verifyPassword = (value, hash) => hash === hashPassword(value);

  const normaliseCodes = (codes = {}) => {
    const result = { ...DEFAULT_CODES };
    Object.keys(result).forEach((key) => {
      const candidate = typeof codes[key] === 'string' ? codes[key].trim() : '';
      if (candidate) {
        result[key] = candidate;
      }
    });
    return result;
  };

  const createCodeUsage = () => ({
    quarter: false,
    half: false,
    full: false,
    wipe: false
  });

  const readStorageJSON = (key, fallback) => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (error) {
      console.warn('Storage read failed', error);
      return fallback;
    }
  };

  const writeStorageJSON = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn('Storage write failed', error);
    }
  };

  const loadConfig = () => {
    const stored = readStorageJSON(STORAGE_KEYS.config, {});
    const config = {
      codes: normaliseCodes(stored.codes),
      attemptLimit: Number.isInteger(stored.attemptLimit) && stored.attemptLimit > 0 ? stored.attemptLimit : DEFAULT_ATTEMPT_LIMIT,
      passwordHash: typeof stored.passwordHash === 'string' && stored.passwordHash.length > 0 ? stored.passwordHash : hashPassword(DEFAULT_PASSWORD)
    };
    return config;
  };

  const loadState = () => {
    const parsed = readStorageJSON(STORAGE_KEYS.state, {});
    const state = {
      entries: typeof parsed.entries === 'object' && parsed.entries ? parsed.entries : {},
      logOrder: Array.isArray(parsed.logOrder) ? parsed.logOrder : [],
      currentEntryId: typeof parsed.currentEntryId === 'string' ? parsed.currentEntryId : DEFAULT_ENTRY_ID
    };
    state.logOrder = Array.from(new Set([DEFAULT_ENTRY_ID, ...state.logOrder]));
    if (!state.entries[state.currentEntryId]) {
      state.currentEntryId = DEFAULT_ENTRY_ID;
    }
    return state;
  };

  const saveConfig = (config) => {
    writeStorageJSON(STORAGE_KEYS.config, config);
  };

  const updateCookie = (state, entry) => {
    if (!entry) {
      return;
    }
    const total = entry.wordRevealed && entry.wordRevealed.length ? entry.wordRevealed.length : 0;
    const recovered = total ? entry.wordRevealed.filter(Boolean).length : 0;
    const percent = total ? Math.round(recovered / total * 100) : 0;
    const wipeFlag = entry.wipeEngaged ? 1 : 0;
    const payload = `${state.currentEntryId}|${percent}|${wipeFlag}|${Date.now()}`;
    document.cookie = `lcars_decrypt=${encodeURIComponent(payload)}; path=/; max-age=31536000; SameSite=Lax`;
  };

  const saveState = (state) => {
    if (currentEntryState) {
      state.entries[state.currentEntryId] = currentEntryState;
    }
    state.logOrder = state.logOrder.filter((id, index, array) => array.indexOf(id) === index && state.entries[id]);
    writeStorageJSON(STORAGE_KEYS.state, state);
    updateCookie(state, currentEntryState);
  };

  const ensureEntryState = (state, entryId, content = '', title) => {
    let entry = state.entries[entryId];
    if (!entry) {
      entry = {
        id: entryId,
        title: title || (entryId === DEFAULT_ENTRY_ID ? 'Default Log' : `Log Entry ${state.logOrder.length + 1}`),
        content,
        wordRevealed: [],
        usedCodes: createCodeUsage(),
        failedAttempts: 0,
        wipeEngaged: false,
        userModified: entryId !== DEFAULT_ENTRY_ID,
        lastUpdated: Date.now()
      };
      state.entries[entryId] = entry;
      state.logOrder.push(entryId);
    } else {
      if (content && (entryId !== DEFAULT_ENTRY_ID || !entry.userModified)) {
        entry.content = content;
      }
      if (title) {
        entry.title = title;
      }
      entry.usedCodes = entry.usedCodes ? { ...createCodeUsage(), ...entry.usedCodes } : createCodeUsage();
      entry.failedAttempts = Number.isInteger(entry.failedAttempts) ? entry.failedAttempts : 0;
      entry.wipeEngaged = Boolean(entry.wipeEngaged);
    }
    return entry;
  };

  const buildTokensForEntry = (entry) => {
    const normalised = (entry.content || '').replace(/\r?\n/g, '\n');
    tokens = [];
    tokenWordIndexMap = [];
    wordOriginals = [];
    scrambledWords = [];
    wordRevealed = entry.wordRevealed || [];
    const whitespacePattern = /\s+/g;
    let lastIndex = 0;
    let match;
    let wordIndex = 0;
    while ((match = whitespacePattern.exec(normalised)) !== null) {
      if (match.index > lastIndex) {
        const word = normalised.slice(lastIndex, match.index);
        tokens.push(word);
        tokenWordIndexMap.push(wordIndex);
        wordOriginals.push(word);
        if (typeof wordRevealed[wordIndex] !== 'boolean') {
          wordRevealed[wordIndex] = false;
        }
        wordIndex += 1;
      }
      tokens.push(match[0]);
      tokenWordIndexMap.push(-1);
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < normalised.length) {
      const word = normalised.slice(lastIndex);
      tokens.push(word);
      tokenWordIndexMap.push(wordIndex);
      wordOriginals.push(word);
      if (typeof wordRevealed[wordIndex] !== 'boolean') {
        wordRevealed[wordIndex] = false;
      }
    }
    wordRevealed = wordRevealed.slice(0, wordOriginals.length);
    while (wordRevealed.length < wordOriginals.length) {
      wordRevealed.push(false);
    }
    entry.wordRevealed = wordRevealed;
    currentEntryState = entry;
  };

  const scrambleWord = (word) => Array.from(word).map((char) => (wordCharPattern.test(char) ? scrambleSet.charAt(Math.floor(Math.random() * scrambleSet.length)) : char)).join('');

  const refreshScrambles = () => {
    scrambledWords = wordOriginals.map((word, idx) => (wordRevealed[idx] ? word : scrambleWord(word)));
  };

  const renderText = () => {
    const assembled = tokens.map((token, idx) => {
      const wordIdx = tokenWordIndexMap[idx];
      if (wordIdx === -1) {
        return token;
      }
      const isRevealed = wordRevealed[wordIdx];
      const text = isRevealed ? wordOriginals[wordIdx] : scrambledWords[wordIdx];
      return `<span class="terminal-word${isRevealed ? '' : ' is-hidden'}" data-word-index="${wordIdx}">${text}</span>`;
    }).join('');
    logDisplay.innerHTML = assembled;
  };

  const computeRevealPercent = (entry) => {
    if (!entry || !entry.wordRevealed || entry.wordRevealed.length === 0) {
      return 0;
    }
    const total = entry.wordRevealed.length;
    const recovered = entry.wordRevealed.reduce((sum, flag) => sum + (flag ? 1 : 0), 0);
    return Math.round(recovered / total * 100);
  };

  const updateStatus = (entry) => {
    const percent = computeRevealPercent(entry);
    if (percent >= 100) {
      statusIndicator.textContent = 'Status: Log decrypted';
      statusIndicator.classList.remove('is-error');
      decryptButton.disabled = true;
      decryptButton.textContent = 'DECRYPTED';
    } else {
      statusIndicator.textContent = `Status: ${percent}% signal integrity`;
      statusIndicator.classList.remove('is-error');
      decryptButton.disabled = false;
      decryptButton.textContent = 'DECRYPT';
    }
  };

  const showStatusError = (message) => {
    statusIndicator.textContent = message;
    statusIndicator.classList.add('is-error');
  };

  const updateAttemptWarning = (entry, attemptLimit) => {
    if (!attemptsWarning) {
      return;
    }
    if (!entry || entry.wipeEngaged || !Number.isInteger(attemptLimit) || attemptLimit <= 0 || entry.failedAttempts <= 0) {
      attemptsWarning.textContent = '';
      attemptsWarning.classList.add('hidden');
      return;
    }
    const remaining = Math.max(0, attemptLimit - entry.failedAttempts);
    if (remaining <= 0) {
      attemptsWarning.textContent = 'Security breach detected. Log data purged.';
      attemptsWarning.classList.remove('hidden');
    } else {
      attemptsWarning.textContent = `Warning: ${remaining} attempt${remaining === 1 ? '' : 's'} remaining before data wipe.`;
      attemptsWarning.classList.remove('hidden');
    }
  };

  const applyWipeState = (entry) => {
    entry.wipeEngaged = true;
    decryptButton.disabled = true;
    decryptButton.textContent = 'SEALED';
    codeInput.disabled = true;
    codeInput.value = '';
    logDisplay.classList.add('is-corrupted');
    logDisplay.textContent = 'LOG CORRUPTED - UNRECOVERABLE';
    if (attemptsWarning) {
      attemptsWarning.classList.add('hidden');
    }
    statusIndicator.textContent = 'Status: Signal lost';
    statusIndicator.classList.add('is-error');
  };

  const clearWipeState = (entry, attemptLimit) => {
    entry.wipeEngaged = false;
    decryptButton.disabled = false;
    decryptButton.textContent = 'DECRYPT';
    codeInput.disabled = false;
    refreshScrambles();
    renderText();
    updateStatus(entry);
    updateAttemptWarning(entry, attemptLimit);
  };

  const determineCodeType = (code, codes) => {
    if (!code) {
      return null;
    }
    const probe = code.toLowerCase();
    const match = Object.entries(codes).find(([type, value]) => typeof value === 'string' && value.toLowerCase() === probe);
    return match ? match[0] : null;
  };

  const handleDecrypt = (config, state) => {
    playBeep();
    const entry = currentEntryState;
    if (!entry || entry.wipeEngaged) {
      return;
    }
    const rawCode = codeInput.value.trim();
    if (!rawCode) {
      return;
    }
    const codeType = determineCodeType(rawCode, config.codes);
    if (!codeType) {
      entry.failedAttempts += 1;
      updateAttemptWarning(entry, config.attemptLimit);
      codeInput.value = '';
      if (config.attemptLimit > 0 && entry.failedAttempts >= config.attemptLimit) {
        showStatusError('Access denied. Security purge initiated.');
        applyWipeState(entry);
        saveState(state);
        return;
      }
      showStatusError('error - incorrect decryption algorithm');
      saveState(state);
      return;
    }
    if (entry.usedCodes[codeType]) {
      showStatusError('error - algorithm already engaged');
      codeInput.value = '';
      return;
    }
    codeInput.value = '';
    entry.failedAttempts = 0;
    updateAttemptWarning(entry, config.attemptLimit);
    if (codeType === 'wipe') {
      entry.usedCodes.wipe = true;
      applyWipeState(entry);
      saveState(state);
      return;
    }
    entry.usedCodes[codeType] = true;
    const fractionMap = { quarter: 0.25, half: 0.5, full: 1 };
    const fraction = fractionMap[codeType] || 0;
    const hiddenWordIndices = wordRevealed.map((flag, idx) => (!flag ? idx : null)).filter((idx) => idx !== null);
    if (!hiddenWordIndices.length) {
      updateStatus(entry);
      saveState(state);
      return;
    }
    const revealQuota = fraction >= 1 ? hiddenWordIndices.length : Math.max(1, Math.round(wordRevealed.length * fraction));
    const revealCount = Math.min(revealQuota, hiddenWordIndices.length);
    for (let i = hiddenWordIndices.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [hiddenWordIndices[i], hiddenWordIndices[j]] = [hiddenWordIndices[j], hiddenWordIndices[i]];
    }
    for (let i = 0; i < revealCount; i += 1) {
      const wordIdx = hiddenWordIndices[i];
      wordRevealed[wordIdx] = true;
    }
    entry.wordRevealed = wordRevealed;
    refreshScrambles();
    renderText();
    updateStatus(entry);
    saveState(state);
  };

  const openAdmin = () => {
    if (!adminModal) {
      return;
    }
    adminModal.classList.add('is-visible');
    if (isAdmin) {
      adminLoginView.classList.add('hidden');
      adminDashboard.classList.remove('hidden');
      populateAdmin(state, config);
    } else {
      adminLoginView.classList.remove('hidden');
      adminDashboard.classList.add('hidden');
      adminPasswordInput.value = '';
      adminLoginError.classList.add('hidden');
      adminPasswordInput.focus();
    }
  };

  const closeAdmin = () => {
    if (!adminModal) {
      return;
    }
    adminModal.classList.remove('is-visible');
    adminPasswordInput.value = '';
    adminLoginError.classList.add('hidden');
    if (adminStatusMessage) {
      adminStatusMessage.textContent = '';
      adminStatusMessage.classList.add('hidden');
    }
  };

  const showAdminStatus = (message, isError = false) => {
    if (!adminStatusMessage) {
      return;
    }
    adminStatusMessage.textContent = message;
    adminStatusMessage.classList.toggle('is-error', isError);
    adminStatusMessage.classList.remove('hidden');
  };

  const renderLogOptions = (state) => {
    if (!adminLogSelect) {
      return;
    }
    adminLogSelect.innerHTML = '';
    state.logOrder.forEach((id) => {
      const entry = state.entries[id];
      if (!entry) {
        return;
      }
      const option = document.createElement('option');
      option.value = id;
      option.textContent = entry.title || id;
      if (id === state.currentEntryId) {
        option.selected = true;
      }
      adminLogSelect.appendChild(option);
    });
  };

  const populateAdmin = (state, config) => {
    adminAttemptLimitInput.value = config.attemptLimit;
    adminCodeQuarter.value = config.codes.quarter;
    adminCodeHalf.value = config.codes.half;
    adminCodeFull.value = config.codes.full;
    adminCodeWipe.value = config.codes.wipe;
    renderLogOptions(state);
    const entry = state.entries[state.currentEntryId];
    if (entry) {
      adminLogIdInput.value = state.currentEntryId;
      adminLogTitle.value = entry.title || '';
      adminLogContent.value = entry.content || '';
    }
  };

  const fetchDefaultLog = async (state) => {
    if (typeof fetch !== 'function') {
      return;
    }
    try {
      const response = await fetch('log.html');
      if (!response.ok) {
        throw new Error(`Log fetch failed: ${response.status}`);
      }
      const raw = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(raw, 'text/html');
      const source = doc.querySelector('main') || doc.body;
      const textContent = (source ? source.textContent : raw).trim();
      const defaultEntry = ensureEntryState(state, DEFAULT_ENTRY_ID, textContent, 'Default Log');
      if (!defaultEntry.userModified) {
        defaultEntry.content = textContent;
      }
      saveState(state);
    } catch (error) {
      console.error(error);
    }
  };

  const initialiseTerminalForEntry = (state, config, entryId) => {
    state.currentEntryId = entryId;
    const entry = ensureEntryState(state, entryId, state.entries[entryId]?.content || '', state.entries[entryId]?.title);
    buildTokensForEntry(entry);
    refreshScrambles();
    renderText();
    if (entry.wipeEngaged) {
      applyWipeState(entry);
    } else {
      clearWipeState(entry, config.attemptLimit);
    }
    saveState(state);
  };

  const config = loadConfig();
  const state = loadState();
  const entry = ensureEntryState(state, DEFAULT_ENTRY_ID, state.entries[DEFAULT_ENTRY_ID]?.content || '', 'Default Log');
  if (!entry.content) {
    entry.content = 'Default log unavailable.';
  }
  saveConfig(config);
  saveState(state);

  adminButton?.addEventListener('click', openAdmin);
  adminCloseButtons.forEach((button) => button.addEventListener('click', closeAdmin));
  adminModal?.addEventListener('click', (event) => {
    if (event.target === adminModal) {
      closeAdmin();
    }
  });

  adminLoginForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const provided = adminPasswordInput.value.trim();
    if (verifyPassword(provided, config.passwordHash)) {
      isAdmin = true;
      adminPasswordInput.value = '';
      adminLoginError.classList.add('hidden');
      adminLoginView.classList.add('hidden');
      adminDashboard.classList.remove('hidden');
      populateAdmin(state, config);
      showAdminStatus('Administrator mode enabled.');
    } else {
      adminLoginError.classList.remove('hidden');
      adminPasswordInput.focus();
    }
  });

  adminAttemptsForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const nextLimit = Number.parseInt(adminAttemptLimitInput.value, 10);
    if (!Number.isInteger(nextLimit) || nextLimit < 1) {
      showAdminStatus('Attempt threshold must be 1 or greater.', true);
      return;
    }
    config.attemptLimit = nextLimit;
    saveConfig(config);
    Object.values(state.entries).forEach((entryRecord) => {
      if (entryRecord && entryRecord.failedAttempts > config.attemptLimit) {
        entryRecord.failedAttempts = config.attemptLimit;
      }
    });
    updateAttemptWarning(currentEntryState, config.attemptLimit);
    saveState(state);
    showAdminStatus('Guess threshold updated.');
  });

  adminPasswordForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const nextPassword = adminPasswordNew.value.trim();
    const confirmPassword = adminPasswordConfirm.value.trim();
    if (!nextPassword || !confirmPassword) {
      showAdminStatus('Password fields cannot be empty.', true);
      return;
    }
    if (nextPassword !== confirmPassword) {
      showAdminStatus('Passwords do not match.', true);
      return;
    }
    config.passwordHash = hashPassword(nextPassword);
    saveConfig(config);
    adminPasswordNew.value = '';
    adminPasswordConfirm.value = '';
    showAdminStatus('Administrator password updated.');
  });

  adminCodesForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const updatedCodes = {
      quarter: adminCodeQuarter.value.trim(),
      half: adminCodeHalf.value.trim(),
      full: adminCodeFull.value.trim(),
      wipe: adminCodeWipe.value.trim()
    };
    if (Object.values(updatedCodes).some((value) => !value)) {
      showAdminStatus('All code phrases are required.', true);
      return;
    }
    const uniquenessProbe = new Set(Object.values(updatedCodes).map((value) => value.toLowerCase()));
    if (uniquenessProbe.size !== 4) {
      showAdminStatus('Each code phrase must be unique.', true);
      return;
    }
    config.codes = { ...updatedCodes };
    Object.values(state.entries).forEach((entryRecord) => {
      if (entryRecord) {
        entryRecord.usedCodes = createCodeUsage();
        if (!entryRecord.wipeEngaged) {
          entryRecord.failedAttempts = 0;
        }
      }
    });
    saveConfig(config);
    saveState(state);
    showAdminStatus('Code phrases updated.');
  });

  adminLogSelect?.addEventListener('change', (event) => {
    const selectedId = event.target.value;
    if (!selectedId) {
      adminLogIdInput.value = '';
      adminLogTitle.value = '';
      adminLogContent.value = '';
      return;
    }
    loadLogForm(state, selectedId);
  });

  adminLogNewButton?.addEventListener('click', () => {
    adminLogIdInput.value = '';
    adminLogTitle.value = '';
    adminLogContent.value = '';
    showAdminStatus('Ready to compose a new log entry.');
  });

  adminLogForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const existingId = adminLogIdInput.value || adminLogSelect?.value;
    const title = adminLogTitle.value.trim() || 'Untitled Log Entry';
    const content = adminLogContent.value;
    const entryId = existingId || `entry-${Date.now()}`;
    const entryRecord = ensureEntryState(state, entryId, content, title);
    entryRecord.userModified = true;
    entryRecord.content = content;
    entryRecord.title = title;
    entryRecord.wordRevealed = [];
    entryRecord.usedCodes = createCodeUsage();
    entryRecord.failedAttempts = 0;
    entryRecord.wipeEngaged = false;
    entryRecord.lastUpdated = Date.now();
    state.currentEntryId = entryId;
    saveState(state);
    populateAdmin(state, config);
    initialiseTerminalForEntry(state, config, entryId);
    showAdminStatus(existingId ? 'Log entry updated and set active.' : 'Log entry created and set active.');
  });

  adminLogSetActiveButton?.addEventListener('click', () => {
    const targetId = adminLogIdInput.value || adminLogSelect?.value;
    if (!targetId || !state.entries[targetId]) {
      showAdminStatus('Select a log entry before setting it active.', true);
      return;
    }
    state.currentEntryId = targetId;
    saveState(state);
    initialiseTerminalForEntry(state, config, targetId);
    populateAdmin(state, config);
    showAdminStatus('Active log entry updated.');
  });

  adminLogDeleteButton?.addEventListener('click', () => {
    const targetId = adminLogIdInput.value || adminLogSelect?.value;
    if (!targetId || targetId === DEFAULT_ENTRY_ID) {
      showAdminStatus('The default log cannot be deleted.', true);
      return;
    }
    if (!window.confirm('Delete the selected log entry? This action cannot be undone.')) {
      return;
    }
    delete state.entries[targetId];
    state.logOrder = state.logOrder.filter((id) => id !== targetId);
    const fallbackId = state.logOrder.find((id) => state.entries[id]) || DEFAULT_ENTRY_ID;
    state.currentEntryId = fallbackId;
    saveState(state);
    initialiseTerminalForEntry(state, config, fallbackId);
    populateAdmin(state, config);
    showAdminStatus('Log entry deleted.');
  });

  decryptButton.addEventListener('click', () => handleDecrypt(config, state));
  codeInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleDecrypt(config, state);
    }
  });

  const bootstrap = async () => {
    await fetchDefaultLog(state);
    initialiseTerminalForEntry(state, config, state.currentEntryId);
    updateAttemptWarning(currentEntryState, config.attemptLimit);
  };

  bootstrap();
})();
