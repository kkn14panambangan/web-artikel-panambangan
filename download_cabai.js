const fs = require('fs');
const https = require('https');

const url = 'https://upload.wikimedia.org/wikipedia/commons/4/40/Chili_peppers_%28Capsicum_annuum%29.jpg';
const file = fs.createWriteStream('public/cabai.jpg');

https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, function(response) {
  if (response.statusCode !== 200) {
    console.error("Error downloading image: Status code", response.statusCode);
    fs.unlink('public/cabai.jpg', () => {});
    return;
  }
  response.pipe(file);
  file.on('finish', function() {
    file.close();
    console.log("Image downloaded successfully!");
  });
}).on('error', function(err) {
  fs.unlink('public/cabai.jpg', () => {});
  console.error("Error downloading image:", err.message);
});
