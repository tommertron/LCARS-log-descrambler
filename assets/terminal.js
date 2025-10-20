"use strict";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(function (_state$entries$DEFAUL) {
  var logDisplay = document.getElementById('log-display');
  if (!logDisplay) {
    return;
  }
  var statusIndicator = document.getElementById('status-indicator');
  var attemptsWarning = document.getElementById('attempts-remaining');
  var decryptButton = document.getElementById('decrypt-button');
  var codeInput = document.getElementById('codeword-input');
  var adminButton = document.getElementById('admin-button');
  var adminModal = document.getElementById('admin-modal');
  var adminLoginView = document.getElementById('admin-login-view');
  var adminDashboard = document.getElementById('admin-dashboard');
  var adminLoginForm = document.getElementById('admin-login-form');
  var adminPasswordInput = document.getElementById('admin-password-input');
  var adminLoginError = document.getElementById('admin-login-error');
  var adminStatusMessage = document.getElementById('admin-status-message');
  var adminCloseButtons = adminModal ? adminModal.querySelectorAll('.admin-close') : [];
  var adminAttemptsForm = document.getElementById('admin-attempts-form');
  var adminAttemptLimitInput = document.getElementById('admin-attempt-limit');
  var adminPasswordForm = document.getElementById('admin-password-form');
  var adminPasswordNew = document.getElementById('admin-password-new');
  var adminPasswordConfirm = document.getElementById('admin-password-confirm');
  var adminCodesForm = document.getElementById('admin-codes-form');
  var adminCodeQuarter = document.getElementById('admin-code-quarter');
  var adminCodeHalf = document.getElementById('admin-code-half');
  var adminCodeFull = document.getElementById('admin-code-full');
  var adminCodeWipe = document.getElementById('admin-code-wipe');
  var adminLogForm = document.getElementById('admin-log-form');
  var adminLogSelect = document.getElementById('admin-log-select');
  var adminLogIdInput = document.getElementById('admin-log-id');
  var adminLogTitle = document.getElementById('admin-log-title');
  var adminLogContent = document.getElementById('admin-log-content');
  var adminLogNewButton = document.getElementById('admin-log-new');
  var adminLogSetActiveButton = document.getElementById('admin-log-set-active');
  var adminLogDeleteButton = document.getElementById('admin-log-delete');
  var audioBeep = document.getElementById('audio2');
  var playBeep = function playBeep() {
    if (!audioBeep) {
      return;
    }
    try {
      audioBeep.pause();
      audioBeep.currentTime = 0;
      var playback = audioBeep.play();
      if (playback && typeof playback["catch"] === 'function') {
        playback["catch"](function () {});
      }
    } catch (error) {
      console.warn('Unable to play LCARS audio', error);
    }
  };
  var scrambleSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=<>?/|{}[]';
  var wordCharPattern = /[A-Za-z0-9]/;
  var STORAGE_KEYS = {
    config: 'lcars_terminal_config',
    state: 'lcars_terminal_state'
  };
  var DEFAULT_CODES = {
    quarter: 'warpgrind',
    half: 'phaserfury',
    full: 'holobollocks',
    wipe: 'sfstfu'
  };
  var DEFAULT_PASSWORD = 'ENGAGE';
  var DEFAULT_ATTEMPT_LIMIT = 3;
  var DEFAULT_ENTRY_ID = 'default';
  var tokens = [];
  var tokenWordIndexMap = [];
  var wordOriginals = [];
  var scrambledWords = [];
  var wordRevealed = [];
  var currentEntryState = null;
  var isAdmin = false;
  var hashPassword = function hashPassword(value) {
    try {
      return btoa(unescape(encodeURIComponent(value)));
    } catch (error) {
      return value;
    }
  };
  var verifyPassword = function verifyPassword(value, hash) {
    return hash === hashPassword(value);
  };
  var normaliseCodes = function normaliseCodes() {
    var codes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var result = _objectSpread({}, DEFAULT_CODES);
    Object.keys(result).forEach(function (key) {
      var candidate = typeof codes[key] === 'string' ? codes[key].trim() : '';
      if (candidate) {
        result[key] = candidate;
      }
    });
    return result;
  };
  var createCodeUsage = function createCodeUsage() {
    return {
      quarter: false,
      half: false,
      full: false,
      wipe: false
    };
  };
  var readStorageJSON = function readStorageJSON(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (error) {
      console.warn('Storage read failed', error);
      return fallback;
    }
  };
  var writeStorageJSON = function writeStorageJSON(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn('Storage write failed', error);
    }
  };
  var loadConfig = function loadConfig() {
    var stored = readStorageJSON(STORAGE_KEYS.config, {});
    var config = {
      codes: normaliseCodes(stored.codes),
      attemptLimit: Number.isInteger(stored.attemptLimit) && stored.attemptLimit > 0 ? stored.attemptLimit : DEFAULT_ATTEMPT_LIMIT,
      passwordHash: typeof stored.passwordHash === 'string' && stored.passwordHash.length > 0 ? stored.passwordHash : hashPassword(DEFAULT_PASSWORD)
    };
    return config;
  };
  var loadState = function loadState() {
    var parsed = readStorageJSON(STORAGE_KEYS.state, {});
    var state = {
      entries: _typeof(parsed.entries) === 'object' && parsed.entries ? parsed.entries : {},
      logOrder: Array.isArray(parsed.logOrder) ? parsed.logOrder : [],
      currentEntryId: typeof parsed.currentEntryId === 'string' ? parsed.currentEntryId : DEFAULT_ENTRY_ID
    };
    state.logOrder = Array.from(new Set([DEFAULT_ENTRY_ID].concat(_toConsumableArray(state.logOrder))));
    if (!state.entries[state.currentEntryId]) {
      state.currentEntryId = DEFAULT_ENTRY_ID;
    }
    return state;
  };
  var saveConfig = function saveConfig(config) {
    writeStorageJSON(STORAGE_KEYS.config, config);
  };
  var updateCookie = function updateCookie(state, entry) {
    if (!entry) {
      return;
    }
    var total = entry.wordRevealed && entry.wordRevealed.length ? entry.wordRevealed.length : 0;
    var recovered = total ? entry.wordRevealed.filter(Boolean).length : 0;
    var percent = total ? Math.round(recovered / total * 100) : 0;
    var wipeFlag = entry.wipeEngaged ? 1 : 0;
    var payload = "".concat(state.currentEntryId, "|").concat(percent, "|").concat(wipeFlag, "|").concat(Date.now());
    document.cookie = "lcars_decrypt=".concat(encodeURIComponent(payload), "; path=/; max-age=31536000; SameSite=Lax");
  };
  var saveState = function saveState(state) {
    if (currentEntryState) {
      state.entries[state.currentEntryId] = currentEntryState;
    }
    state.logOrder = state.logOrder.filter(function (id, index, array) {
      return array.indexOf(id) === index && state.entries[id];
    });
    writeStorageJSON(STORAGE_KEYS.state, state);
    updateCookie(state, currentEntryState);
  };
  var ensureEntryState = function ensureEntryState(state, entryId) {
    var content = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var title = arguments.length > 3 ? arguments[3] : undefined;
    var entry = state.entries[entryId];
    if (!entry) {
      entry = {
        id: entryId,
        title: title || (entryId === DEFAULT_ENTRY_ID ? 'Default Log' : "Log Entry ".concat(state.logOrder.length + 1)),
        content: content,
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
      entry.usedCodes = entry.usedCodes ? _objectSpread(_objectSpread({}, createCodeUsage()), entry.usedCodes) : createCodeUsage();
      entry.failedAttempts = Number.isInteger(entry.failedAttempts) ? entry.failedAttempts : 0;
      entry.wipeEngaged = Boolean(entry.wipeEngaged);
    }
    return entry;
  };
  var buildTokensForEntry = function buildTokensForEntry(entry) {
    var normalised = (entry.content || '').replace(/\r?\n/g, '\n');
    tokens = [];
    tokenWordIndexMap = [];
    wordOriginals = [];
    scrambledWords = [];
    wordRevealed = entry.wordRevealed || [];
    var whitespacePattern = /\s+/g;
    var lastIndex = 0;
    var match;
    var wordIndex = 0;
    while ((match = whitespacePattern.exec(normalised)) !== null) {
      if (match.index > lastIndex) {
        var word = normalised.slice(lastIndex, match.index);
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
      var _word = normalised.slice(lastIndex);
      tokens.push(_word);
      tokenWordIndexMap.push(wordIndex);
      wordOriginals.push(_word);
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
  var scrambleWord = function scrambleWord(word) {
    return Array.from(word).map(function (_char) {
      return wordCharPattern.test(_char) ? scrambleSet.charAt(Math.floor(Math.random() * scrambleSet.length)) : _char;
    }).join('');
  };
  var refreshScrambles = function refreshScrambles() {
    scrambledWords = wordOriginals.map(function (word, idx) {
      return wordRevealed[idx] ? word : scrambleWord(word);
    });
  };
  var renderText = function renderText() {
    var assembled = tokens.map(function (token, idx) {
      var wordIdx = tokenWordIndexMap[idx];
      if (wordIdx === -1) {
        return token;
      }
      var isRevealed = wordRevealed[wordIdx];
      var text = isRevealed ? wordOriginals[wordIdx] : scrambledWords[wordIdx];
      return "<span class=\"terminal-word".concat(isRevealed ? '' : ' is-hidden', "\" data-word-index=\"").concat(wordIdx, "\">").concat(text, "</span>");
    }).join('');
    logDisplay.innerHTML = assembled;
  };
  var computeRevealPercent = function computeRevealPercent(entry) {
    if (!entry || !entry.wordRevealed || entry.wordRevealed.length === 0) {
      return 0;
    }
    var total = entry.wordRevealed.length;
    var recovered = entry.wordRevealed.reduce(function (sum, flag) {
      return sum + (flag ? 1 : 0);
    }, 0);
    return Math.round(recovered / total * 100);
  };
  var updateStatus = function updateStatus(entry) {
    var percent = computeRevealPercent(entry);
    if (percent >= 100) {
      statusIndicator.textContent = 'Status: Log decrypted';
      statusIndicator.classList.remove('is-error');
      decryptButton.disabled = true;
      decryptButton.textContent = 'DECRYPTED';
    } else {
      statusIndicator.textContent = "Status: ".concat(percent, "% signal integrity");
      statusIndicator.classList.remove('is-error');
      decryptButton.disabled = false;
      decryptButton.textContent = 'DECRYPT';
    }
  };
  var showStatusError = function showStatusError(message) {
    statusIndicator.textContent = message;
    statusIndicator.classList.add('is-error');
  };
  var updateAttemptWarning = function updateAttemptWarning(entry, attemptLimit) {
    if (!attemptsWarning) {
      return;
    }
    if (!entry || entry.wipeEngaged || !Number.isInteger(attemptLimit) || attemptLimit <= 0 || entry.failedAttempts <= 0) {
      attemptsWarning.textContent = '';
      attemptsWarning.classList.add('hidden');
      return;
    }
    var remaining = Math.max(0, attemptLimit - entry.failedAttempts);
    if (remaining <= 0) {
      attemptsWarning.textContent = 'Security breach detected. Log data purged.';
      attemptsWarning.classList.remove('hidden');
    } else {
      attemptsWarning.textContent = "Warning: ".concat(remaining, " attempt").concat(remaining === 1 ? '' : 's', " remaining before data wipe.");
      attemptsWarning.classList.remove('hidden');
    }
  };
  var applyWipeState = function applyWipeState(entry) {
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
  var clearWipeState = function clearWipeState(entry, attemptLimit) {
    entry.wipeEngaged = false;
    decryptButton.disabled = false;
    decryptButton.textContent = 'DECRYPT';
    codeInput.disabled = false;
    refreshScrambles();
    renderText();
    updateStatus(entry);
    updateAttemptWarning(entry, attemptLimit);
  };
  var determineCodeType = function determineCodeType(code, codes) {
    if (!code) {
      return null;
    }
    var probe = code.toLowerCase();
    var match = Object.entries(codes).find(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        type = _ref2[0],
        value = _ref2[1];
      return typeof value === 'string' && value.toLowerCase() === probe;
    });
    return match ? match[0] : null;
  };
  var handleDecrypt = function handleDecrypt(config, state) {
    playBeep();
    var entry = currentEntryState;
    if (!entry || entry.wipeEngaged) {
      return;
    }
    var rawCode = codeInput.value.trim();
    if (!rawCode) {
      return;
    }
    var codeType = determineCodeType(rawCode, config.codes);
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
    var fractionMap = {
      quarter: 0.25,
      half: 0.5,
      full: 1
    };
    var fraction = fractionMap[codeType] || 0;
    var hiddenWordIndices = wordRevealed.map(function (flag, idx) {
      return !flag ? idx : null;
    }).filter(function (idx) {
      return idx !== null;
    });
    if (!hiddenWordIndices.length) {
      updateStatus(entry);
      saveState(state);
      return;
    }
    var revealQuota = fraction >= 1 ? hiddenWordIndices.length : Math.max(1, Math.round(wordRevealed.length * fraction));
    var revealCount = Math.min(revealQuota, hiddenWordIndices.length);
    for (var i = hiddenWordIndices.length - 1; i > 0; i -= 1) {
      var j = Math.floor(Math.random() * (i + 1));
      var _ref3 = [hiddenWordIndices[j], hiddenWordIndices[i]];
      hiddenWordIndices[i] = _ref3[0];
      hiddenWordIndices[j] = _ref3[1];
    }
    for (var _i = 0; _i < revealCount; _i += 1) {
      var wordIdx = hiddenWordIndices[_i];
      wordRevealed[wordIdx] = true;
    }
    entry.wordRevealed = wordRevealed;
    refreshScrambles();
    renderText();
    updateStatus(entry);
    saveState(state);
  };
  var openAdmin = function openAdmin() {
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
  var closeAdmin = function closeAdmin() {
    if (!adminModal) {
      return;
    }
    adminModal.classList.remove('is-visible');
    isAdmin = false;
    if (adminDashboard) {
      adminDashboard.classList.add('hidden');
    }
    if (adminLoginView) {
      adminLoginView.classList.remove('hidden');
    }
    adminPasswordInput.value = '';
    adminLoginError.classList.add('hidden');
    if (adminStatusMessage) {
      adminStatusMessage.textContent = '';
      adminStatusMessage.classList.add('hidden');
    }
  };
  var showAdminStatus = function showAdminStatus(message) {
    var isError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (!adminStatusMessage) {
      return;
    }
    adminStatusMessage.textContent = message;
    adminStatusMessage.classList.toggle('is-error', isError);
    adminStatusMessage.classList.remove('hidden');
  };
  var renderLogOptions = function renderLogOptions(state) {
    if (!adminLogSelect) {
      return;
    }
    adminLogSelect.innerHTML = '';
    state.logOrder.forEach(function (id) {
      var entry = state.entries[id];
      if (!entry) {
        return;
      }
      var option = document.createElement('option');
      option.value = id;
      option.textContent = entry.title || id;
      if (id === state.currentEntryId) {
        option.selected = true;
      }
      adminLogSelect.appendChild(option);
    });
  };
  var populateAdmin = function populateAdmin(state, config) {
    adminAttemptLimitInput.value = config.attemptLimit;
    adminCodeQuarter.value = config.codes.quarter;
    adminCodeHalf.value = config.codes.half;
    adminCodeFull.value = config.codes.full;
    adminCodeWipe.value = config.codes.wipe;
    renderLogOptions(state);
    var entry = state.entries[state.currentEntryId];
    if (entry) {
      adminLogIdInput.value = state.currentEntryId;
      adminLogTitle.value = entry.title || '';
      adminLogContent.value = entry.content || '';
    }
  };
  var fetchDefaultLog = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(state) {
      var response, raw, parser, doc, source, textContent, defaultEntry, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (!(typeof fetch !== 'function')) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            _context.p = 1;
            _context.n = 2;
            return fetch('log.html');
          case 2:
            response = _context.v;
            if (response.ok) {
              _context.n = 3;
              break;
            }
            throw new Error("Log fetch failed: ".concat(response.status));
          case 3:
            _context.n = 4;
            return response.text();
          case 4:
            raw = _context.v;
            parser = new DOMParser();
            doc = parser.parseFromString(raw, 'text/html');
            source = doc.querySelector('main') || doc.body;
            textContent = (source ? source.textContent : raw).trim();
            defaultEntry = ensureEntryState(state, DEFAULT_ENTRY_ID, textContent, 'Default Log');
            if (!defaultEntry.userModified) {
              defaultEntry.content = textContent;
            }
            saveState(state);
            _context.n = 6;
            break;
          case 5:
            _context.p = 5;
            _t = _context.v;
            console.error(_t);
          case 6:
            return _context.a(2);
        }
      }, _callee, null, [[1, 5]]);
    }));
    return function fetchDefaultLog(_x) {
      return _ref4.apply(this, arguments);
    };
  }();
  var initialiseTerminalForEntry = function initialiseTerminalForEntry(state, config, entryId) {
    var _state$entries$entryI, _state$entries$entryI2;
    state.currentEntryId = entryId;
    var entry = ensureEntryState(state, entryId, ((_state$entries$entryI = state.entries[entryId]) === null || _state$entries$entryI === void 0 ? void 0 : _state$entries$entryI.content) || '', (_state$entries$entryI2 = state.entries[entryId]) === null || _state$entries$entryI2 === void 0 ? void 0 : _state$entries$entryI2.title);
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
  var config = loadConfig();
  var state = loadState();
  var entry = ensureEntryState(state, DEFAULT_ENTRY_ID, ((_state$entries$DEFAUL = state.entries[DEFAULT_ENTRY_ID]) === null || _state$entries$DEFAUL === void 0 ? void 0 : _state$entries$DEFAUL.content) || '', 'Default Log');
  if (!entry.content) {
    entry.content = 'Default log unavailable.';
  }
  saveConfig(config);
  saveState(state);
  adminButton === null || adminButton === void 0 || adminButton.addEventListener('click', openAdmin);
  adminCloseButtons.forEach(function (button) {
    return button.addEventListener('click', closeAdmin);
  });
  adminModal === null || adminModal === void 0 || adminModal.addEventListener('click', function (event) {
    if (event.target === adminModal) {
      closeAdmin();
    }
  });
  adminLoginForm === null || adminLoginForm === void 0 || adminLoginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var provided = adminPasswordInput.value.trim();
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
  adminAttemptsForm === null || adminAttemptsForm === void 0 || adminAttemptsForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var nextLimit = Number.parseInt(adminAttemptLimitInput.value, 10);
    if (!Number.isInteger(nextLimit) || nextLimit < 1) {
      showAdminStatus('Attempt threshold must be 1 or greater.', true);
      return;
    }
    config.attemptLimit = nextLimit;
    saveConfig(config);
    Object.values(state.entries).forEach(function (entryRecord) {
      if (entryRecord && entryRecord.failedAttempts > config.attemptLimit) {
        entryRecord.failedAttempts = config.attemptLimit;
      }
    });
    updateAttemptWarning(currentEntryState, config.attemptLimit);
    saveState(state);
    showAdminStatus('Guess threshold updated.');
  });
  adminPasswordForm === null || adminPasswordForm === void 0 || adminPasswordForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var nextPassword = adminPasswordNew.value.trim();
    var confirmPassword = adminPasswordConfirm.value.trim();
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
  adminCodesForm === null || adminCodesForm === void 0 || adminCodesForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var updatedCodes = {
      quarter: adminCodeQuarter.value.trim(),
      half: adminCodeHalf.value.trim(),
      full: adminCodeFull.value.trim(),
      wipe: adminCodeWipe.value.trim()
    };
    if (Object.values(updatedCodes).some(function (value) {
      return !value;
    })) {
      showAdminStatus('All code phrases are required.', true);
      return;
    }
    var uniquenessProbe = new Set(Object.values(updatedCodes).map(function (value) {
      return value.toLowerCase();
    }));
    if (uniquenessProbe.size !== 4) {
      showAdminStatus('Each code phrase must be unique.', true);
      return;
    }
    config.codes = _objectSpread({}, updatedCodes);
    Object.values(state.entries).forEach(function (entryRecord) {
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
  adminLogSelect === null || adminLogSelect === void 0 || adminLogSelect.addEventListener('change', function (event) {
    var selectedId = event.target.value;
    if (!selectedId) {
      adminLogIdInput.value = '';
      adminLogTitle.value = '';
      adminLogContent.value = '';
      return;
    }
    loadLogForm(state, selectedId);
  });
  adminLogNewButton === null || adminLogNewButton === void 0 || adminLogNewButton.addEventListener('click', function () {
    adminLogIdInput.value = '';
    adminLogTitle.value = '';
    adminLogContent.value = '';
    showAdminStatus('Ready to compose a new log entry.');
  });
  adminLogForm === null || adminLogForm === void 0 || adminLogForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var existingId = adminLogIdInput.value || (adminLogSelect === null || adminLogSelect === void 0 ? void 0 : adminLogSelect.value);
    var title = adminLogTitle.value.trim() || 'Untitled Log Entry';
    var content = adminLogContent.value;
    var entryId = existingId || "entry-".concat(Date.now());
    var entryRecord = ensureEntryState(state, entryId, content, title);
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
  adminLogSetActiveButton === null || adminLogSetActiveButton === void 0 || adminLogSetActiveButton.addEventListener('click', function () {
    var targetId = adminLogIdInput.value || (adminLogSelect === null || adminLogSelect === void 0 ? void 0 : adminLogSelect.value);
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
  adminLogDeleteButton === null || adminLogDeleteButton === void 0 || adminLogDeleteButton.addEventListener('click', function () {
    var targetId = adminLogIdInput.value || (adminLogSelect === null || adminLogSelect === void 0 ? void 0 : adminLogSelect.value);
    if (!targetId || targetId === DEFAULT_ENTRY_ID) {
      showAdminStatus('The default log cannot be deleted.', true);
      return;
    }
    if (!window.confirm('Delete the selected log entry? This action cannot be undone.')) {
      return;
    }
    delete state.entries[targetId];
    state.logOrder = state.logOrder.filter(function (id) {
      return id !== targetId;
    });
    var fallbackId = state.logOrder.find(function (id) {
      return state.entries[id];
    }) || DEFAULT_ENTRY_ID;
    state.currentEntryId = fallbackId;
    saveState(state);
    initialiseTerminalForEntry(state, config, fallbackId);
    populateAdmin(state, config);
    showAdminStatus('Log entry deleted.');
  });
  decryptButton.addEventListener('click', function () {
    return handleDecrypt(config, state);
  });
  codeInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleDecrypt(config, state);
    }
  });
  var bootstrap = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.n = 1;
            return fetchDefaultLog(state);
          case 1:
            initialiseTerminalForEntry(state, config, state.currentEntryId);
            updateAttemptWarning(currentEntryState, config.attemptLimit);
          case 2:
            return _context2.a(2);
        }
      }, _callee2);
    }));
    return function bootstrap() {
      return _ref5.apply(this, arguments);
    };
  }();
  bootstrap();
})();
