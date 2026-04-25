import https from 'https';
https.get('https://www.dizkarthik.com/', (resp) => {
  let data = '';
  resp.on('data', (chunk) => { data += chunk; });
  resp.on('end', () => {
    console.log("HTML length:", data.length);
    // Print the first few characters of the body to understand the structure
    const bodyMatch = data.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) {
       console.log(bodyMatch[1].substring(0, 1500));
       // Also look for class names to see if tailwind is used
       const classes = data.match(/class="([^"]+)"/g);
       if (classes) {
         console.log("Sample classes:", classes.slice(0, 20));
       }
       // Look for css links
       const cssLinks = data.match(/<link[^>]*rel="stylesheet"[^>]*>/g);
       console.log("CSS Links:", cssLinks);
    }
  });
});
