const https = require('https');

https.get('https://www.wallofportfolios.in/portfolios/karthik-m/', (resp) => {
  let data = '';
  resp.on('data', (chunk) => { data += chunk; });
  resp.on('end', () => {
    const links = data.match(/href="([^"]*)"/g);
    const externalLinks = links.filter(link => !link.includes('wallofportfolios.in') && !link.includes('googleapis') && link.startsWith('href="http'));
    console.log(externalLinks);
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
