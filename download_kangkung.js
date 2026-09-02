const fs = require('fs');
const https = require('https');

const url = 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Ipomoea_aquatica_001.JPG';
const file = fs.createWriteStream('public/kangkung.jpg');

https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, function(response) {
  response.pipe(file);
  file.on('finish', function() {
    file.close();
    console.log("Image downloaded successfully!");
  });
}).on('error', function(err) {
  fs.unlink('public/kangkung.jpg');
  console.error("Error downloading image:", err.message);
});
