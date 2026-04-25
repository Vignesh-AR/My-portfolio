const https = require('https');
https.get('https://www.wallofportfolios.in/portfolios/karthik-m/', (resp) => {
  let data = '';
  resp.on('data', (chunk) => { data += chunk; });
  resp.on('end', () => {
    const urls = [];
    const regex = /href="(https?:\/\/[^"]+)"/g;
    let match;
    while ((match = regex.exec(data)) !== null) {
      if (!match[1].includes('wallofportfolios.in') && !match[1].includes('fonts') && !match[1].includes('w3.org')) {
        urls.push(match[1]);
      }
    }
    console.log("Found urls:", urls);
  });
});
