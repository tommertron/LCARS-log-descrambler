# LCARS Log Terminal

A single-page LCARS-styled terminal for Star Trek Adventures sessions. The interface loads `log.html`, scrambles the contents, and reveals words as operators enter approved code phrases.

## Features

- Presents the reference LCARS layout (`classic-standard.html`) with a dedicated operations log pane.
- Accepts secure code phrases:
  - `warpgrind` reveals ~25% of remaining words.
  - `phaserfury` reveals ~50% of remaining words.
  - `holobollocks` decrypts the full log at once.
  - `sfstfu` triggers a terminal wipe and marks the log unrecoverable.
- Each code can be used only once per session.
- Wrong or re-used codes surface an error without revealing additional content.
- Includes LCARS audio feedback on each action.

## Usage

1. Serve the project from the repository root, for example:
   ```bash
   python -m http.server 9191
   ```
2. Open the terminal in your browser: `http://localhost:9191/lcars-terminal.html`.
3. Enter code phrases into the field and press **DECRYPT** to progressively restore the log.

## Development Notes

- The layout and styling rely on the assets provided with `classic-standard.html`; please keep those files unchanged to preserve the LCARS look.
- The decrypt logic lives in `lcars-terminal.html` and works entirely client-side.

## License

Licensed under the MIT License. See [`LICENSE`](LICENSE).
