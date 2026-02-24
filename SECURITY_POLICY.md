# Security Policy

## CSP
- style-src 'self'
- script-src 'self'
- No unsafe-inline
- No unsafe-eval

## Rules
- No inline style attributes
- No inline JS
- No setAttribute("style")
- No dynamic script injection
- Only data-attribute or class based styling

## Philosophy
Security over visual effect.
Minimal attack surface.
No third-party exposure.
