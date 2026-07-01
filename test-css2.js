const http = require('http');

http.get('http://localhost:3000', (res) => {
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    const match = html.match(/href="([^"]+\.css)"/);
    if (match) {
      const cssUrl = 'http://localhost:3000' + match[1];
      http.get(cssUrl, (cssRes) => {
        let css = '';
        cssRes.on('data', chunk => css += chunk);
        cssRes.on('end', () => {
          let idx = css.indexOf('--color-primary:');
          while (idx !== -1) {
             console.log(css.substring(Math.max(0, idx - 20), idx + 50));
             idx = css.indexOf('--color-primary:', idx + 1);
          }
        });
      });
    }
  });
});
