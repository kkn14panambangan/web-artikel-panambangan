const fs = require('fs');
const https = require('https');

const url = 'https://images.unsplash.com/photo-1588057065609-b6b69b50302b?q=80&w=1000&auto=format&fit=crop';
const file = fs.createWriteStream('public/cabai.jpg');

https.get(url, function(response) {
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
