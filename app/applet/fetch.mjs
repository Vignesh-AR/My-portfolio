import https from 'https';
https.get('https://www.wallofportfolios.in/portfolios/karthik-m/', (resp) => {
  let data = '';
  resp.on('data', (chunk) => { data += chunk; });
  resp.on('end', () => {
    const regex = /href="(https?:\/\/[^"]+)"/g;
    let match;
    const urls = [];
    while ((match = regex.exec(data)) !== null) {
      if (!match[1].includes('wallofportfolios.in')) {
        urls.push(match[1]);
      }
    }
    console.log("URLs:", urls);
  });
});
