# LCARS Log Terminal

A single-page LCARS-styled terminal for Star Trek Adventures sessions. The interface loads `log.html`, scrambles the contents, and reveals words as operators enter approved code phrases.

## Features

- Presents the reference LCARS layout (`classic-standard.html`) with a dedicated operations log pane.
- Accepts secure code phrases:
  - `warpgrind` reveals ~25% of remaining words.
  - `phaserfury` reveals ~50% of remaining words.
  - `holobollocks` decrypts the full log at once.
  - `sfstfu` triggers a terminal wipe and marks the log unrecoverable.
- Each code can be used only once per session; guesses persist between refreshes.
- Wrong or re-used codes surface an error without revealing additional content and display the remaining attempts before a wipe.
- The terminal remembers its decryption state via local storage and a session cookie, so manual refreshes do not reset progress.
- Includes LCARS audio feedback on each action.
- Administrator mode (default password `ENGAGE`) allows you to edit log entries, adjust code phrases, change the guess threshold, and update the admin password.
## Guidelines

- Keep usage non-commercial in accordance with the [TheLCARS.com license](https://www.thelcars.com/license/).
- Do not combine these assets with other web templates or distribute the LCARS resources without attribution.
- Remember to run `npm install` to set up the build tooling if you plan to regenerate `assets/terminal.js` from `assets/terminal-modern.js`.
- Use `npm run build` (see Development Notes) to regenerate the transpiled script after modifying `assets/terminal-modern.js`.


## Usage

1. Serve the project from the repository root, for example:
   ```bash
   python -m http.server 9191
   ```
2. Open the terminal in your browser: `http://localhost:9191/lcars-terminal.html`.
3. Enter code phrases into the field and press **DECRYPT** to progressively restore the log.
4. Select **Administrator Mode** to manage settings (default password: `ENGAGE`).

## Development Notes

- The layout and styling rely on the assets provided with `classic-standard.html`; please keep those files unchanged to preserve the LCARS look.
- The decrypt logic, state persistence, and administrator tooling live in `lcars-terminal.html` and run entirely client-side.
- Decryption progress, administrator settings, and custom logs are stored in the browser (local storage plus a cookie); clearing site data resets the experience.

## LCARS Template License

This project customises the LCARS Inspired Website Template provided by [TheLCARS.com](https://www.thelcars.com/license/). By cloning or using this repository you agree to the following non-commercial EULA terms from the template author:

- The template and any derivative works remain subject to the original license; credit with a link to TheLCARS.com is required and provided in `lcars-terminal.html`.
- Use is permitted for personal, non-commercial projects only. Redistribution, resale, or use to produce paid (or compensated) work for third parties is prohibited without written permission from the licensor.
- Do not combine these assets with other templates without attribution, and do not hotlink to resources on TheLCARS.com.
- The template (or derivatives) must not be used for illegal purposes.

Please review the complete terms at [https://www.thelcars.com/license/](https://www.thelcars.com/license/).

## License

Licensed under the MIT License. See [`LICENSE`](LICENSE).
