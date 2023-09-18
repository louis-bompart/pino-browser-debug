# Steps:
1. `npx esbuild .\index.js --bundle --outfile=foo.js`
2. Copy content of `foo.js` into the script tag of `index.html`
3. Open `index.html`, check the console: assert that only warning is logged