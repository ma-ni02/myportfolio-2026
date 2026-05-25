#!/bin/bash
set -euo pipefail

# Only run in remote Claude Code on the web environment
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

echo "Installing dependencies..."
cd "$CLAUDE_PROJECT_DIR"
npm install

echo "Starting Next.js dev server on port 3000..."
npm run dev &

# Wait until the server is ready
timeout 30 bash -c 'until curl -sf http://localhost:3000 >/dev/null 2>&1; do sleep 1; done'
echo "Dev server ready at http://localhost:3000"
