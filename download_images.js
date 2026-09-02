const fs = require('fs');

async function downloadImage(url, filename) {
  console.log(`Downloading ${filename} from ${url}...`);
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    });
    
    if (!response.ok) throw new Error(`HTTP ${response.status} ${response.statusText}`);
    
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    fs.writeFileSync(`public/${filename}`, buffer);
    console.log(`Successfully saved ${filename} (${buffer.length} bytes)`);
  } catch (error) {
    console.error(`Failed to download ${filename}:`, error.message);
  }
}

async function main() {
  await downloadImage('https://loremflickr.com/800/600/spinach,leaf', 'bayam.jpg');
}

main();
