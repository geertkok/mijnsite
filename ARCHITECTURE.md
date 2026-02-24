# Architecture Overview

## Hosting
Provider: Hetzner Webhosting
Environment: Shared hosting
No server-side runtime

## Deployment
Trigger: GitHub push to main
Method: GitHub Actions → SFTP mirror
Target directory: /public_html

## Directory Structure

public_html/
    index.html
    css/style.css
    js/app.js

No nested build directories.
No dist folder.
No transpilation.

## Frontend Stack
- HTML5
- Vanilla CSS
- Vanilla JavaScript
- CSS variables for theming
- data-attributes for state

No runtime dependencies.
