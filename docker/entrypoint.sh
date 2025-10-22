#!/bin/sh
set -eu

REPO_URL="${REPO_URL:-https://github.com/tommertron/LCARS-log-descrambler.git}"
REPO_BRANCH="${REPO_BRANCH:-master}"
APP_DIR="${APP_DIR:-/srv/app}"
PORT="${PORT:-9191}"

SKIP_CLONE="${SKIP_CLONE:-0}"
case "${SKIP_CLONE}" in
  1|true|TRUE|yes|YES)
    NORMALISED_SKIP=1
    ;;
  *)
    NORMALISED_SKIP=0
    ;;
esac

if [ "${NORMALISED_SKIP}" = "0" ]; then
  echo "Fetching latest files from ${REPO_URL} (branch: ${REPO_BRANCH})..."
  rm -rf "${APP_DIR}"
  git clone --depth 1 --branch "${REPO_BRANCH}" "${REPO_URL}" "${APP_DIR}"
else
  echo "Skipping Git clone; using existing files in ${APP_DIR}"
  mkdir -p "${APP_DIR}"
  if [ -z "$(ls -A "${APP_DIR}")" ]; then
    echo "Warning: ${APP_DIR} is empty. Ensure your local files are mounted into the container."
  fi
fi

echo "Serving LCARS terminal on port ${PORT}..."
exec python -m http.server "${PORT}" --directory "${APP_DIR}"
