const fs = require('fs');

const images = JSON.parse(fs.readFileSync('all_scraped_images.json', 'utf8'));
console.log('Total images:', images.length);
console.log('Sample images:');
images.filter(img => !img.includes('default') && !img.includes('gravatar') && !img.includes('plugins')).forEach(img => console.log(img));

