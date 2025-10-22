FROM python:3.12-slim

RUN apt-get update \
    && apt-get install -y --no-install-recommends git \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /opt/app

COPY docker/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

ENV REPO_URL=https://github.com/tommertron/LCARS-log-descrambler.git \
    REPO_BRANCH=master \
    APP_DIR=/srv/app \
    PORT=9191 \
    SKIP_CLONE=0

EXPOSE 9191

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
