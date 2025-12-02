# Focus Color Site

A minimal static site that turns green when the page/tab is focused and red when unfocused.

Files:
- `index.html` — main page
- `styles.css` — styles for focused/unfocused backgrounds
- `script.js` — toggles classes based on focus/visibility events

Open locally:
- Double-click `index.html` to open in your browser, or
- Serve with a tiny HTTP server:

```bash
# Python 3
cd /tmp/focus-color-site
python3 -m http.server 8000
# then open http://localhost:8000
```

Notes:
- Modern browsers will trigger `visibilitychange` and `focus`/`blur` events when switching tabs or windows.
- For best results, use a modern browser (Chrome, Firefox, Safari).
