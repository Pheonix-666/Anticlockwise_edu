const http = require('http');

http.get('http://localhost:3000', (res) => {
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    const match = html.match(/href="([^"]+\.css)"/);
    if (match) {
      const cssUrl = 'http://localhost:3000' + match[1];
      console.log('Fetching CSS:', cssUrl);
      http.get(cssUrl, (cssRes) => {
        let css = '';
        cssRes.on('data', chunk => css += chunk);
        cssRes.on('end', () => {
          console.log('CSS Length:', css.length);
          const idx = css.indexOf('.text-primary');
          console.log('Found .text-primary at:', idx);
          if (idx !== -1) {
            console.log(css.substring(Math.max(0, idx - 20), idx + 100));
          }
        });
      });
    } else {
      console.log('No CSS file found in HTML');
    }
  });
});
