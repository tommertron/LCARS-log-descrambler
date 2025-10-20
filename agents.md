# Agent Notes

## Build & Deployment

- Install dependencies with `npm install`, then transpile the main script via `npm run build` (configured by `.babelrc`).
- Always commit the source (`assets/terminal-modern.js`) and the transpiled output (`assets/terminal.js`).
- Static hosting works anywhere; remember to include the entire `assets` directory.

## Key Components

- `lcars-terminal.html`: LCARS layout, log display, nav buttons, and the command override modal markup.
- `assets/terminal-modern.js`: Source logic for decryption, persistence, admin features; transpile after edits.
- `assets/terminal.js`: Transpiled bundle served by the page.

## Persistence Schema

```
localStorage: "lcars_terminal_config" {
  codes: { quarter, half, full, wipe },
  attemptLimit,
  passwordHash
}
localStorage: "lcars_terminal_state" {
  entries: { [entryId]: { content, title, ... } },
  logOrder: [...],
  currentEntryId
}
Cookie: lcars_decrypt = "entryId|percent|wipeFlag|timestamp"
```

## Testing Tips

- Use jsdom or browser console to simulate admin actions. Audio warnings during tests are expected (HTMLMediaElement mock).
- When creating new log entries, verify `state.entries` retains each entry; the generator uses UUID with timestamp fallback.

## Extension Ideas

- Add export/import for custom log entries.
- Provide translations or theming variants by swapping LCARS styles.

