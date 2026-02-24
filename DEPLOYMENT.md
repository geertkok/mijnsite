# Deployment Pipeline

## Source Control
Repository: geertkok/mijnsite
Branch: main

## CI/CD
Platform: GitHub Actions
Runner: ubuntu-latest
Transport: SFTP
Method: mirror --delete

## Secrets Required
- HETZNER_HOST
- HETZNER_USER
- HETZNER_SSH_KEY_B64

## Deployment Flow
1. Commit locally
2. Push to main
3. GitHub Action runs
4. SFTP preflight
5. Mirror public_html → /public_html
6. Done

No manual server access required.
