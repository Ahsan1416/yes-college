const fs = require('fs');
const https = require('https');
const http = require('http');

const imagesToDownload = [
  { name: 'logo.png', url: 'https://yescollege.com.au/wp-content/uploads/2017/09/YES-DSN-AU-0417_logo_high-resolution-files_1d_09-06-2017_RGB-1024x549.png' },
  { name: 'hero-banner.png', url: 'https://yescollege.com.au/wp-content/uploads/2025/09/YES-College-2026-Website-Banner.png' },
  { name: 'campus-parramatta.png', url: 'https://yescollege.com.au/wp-content/uploads/2021/02/Campus-700x300.png' },
  { name: 'parramatta-westfield.png', url: 'https://yescollege.com.au/wp-content/uploads/2021/03/Parramatta-Westfields-700x300.png' },
  { name: 'parramatta-square.png', url: 'https://yescollege.com.au/wp-content/uploads/2021/03/Parramatta-Centenary-Square-700x300.png' },
  { name: 'parramatta-events.png', url: 'https://yescollege.com.au/wp-content/uploads/2021/03/Parramatta-Cultural-Events-700x300.png' },
  { name: 'student-services.png', url: 'https://yescollege.com.au/wp-content/uploads/2021/03/Student-Services.png' },
  { name: 'nrt-logo.png', url: 'https://yescollege.com.au/wp-content/uploads/2021/07/Nationally_Recognised_Training-logo-4FFA374E99-seeklogo.com_.png' },
  { name: 'aqf-logo.jpg', url: 'https://yescollege.com.au/wp-content/uploads/2021/07/aqf-colour-logo-for-website-300x158.jpg' },
  { name: 'our-history.png', url: 'https://yescollege.com.au/wp-content/uploads/2021/03/Our-History-1.png' },
  { name: 'course-chc52021.png', url: 'https://yescollege.com.au/wp-content/uploads/2023/10/YES-College-Website-CHC52021-Diploma-of-Community-Services.png' },
  { name: 'course-aur50116.png', url: 'https://yescollege.com.au/wp-content/uploads/2025/09/AUR50116-Website-Pic.png' },
  { name: 'course-rii60520.png', url: 'https://yescollege.com.au/wp-content/uploads/2022/01/20220323_154131_0000.png' },
  { name: 'course-rii50520.png', url: 'https://yescollege.com.au/wp-content/uploads/2025/09/RII50520-Website-Pic.png' },
  { name: 'course-shb50121.png', url: 'https://yescollege.com.au/wp-content/uploads/2023/06/SHB50121-YES-College-Website.png' },
  { name: 'course-bsb60420.png', url: 'https://yescollege.com.au/wp-content/uploads/2021/07/BSB60420.png' },
  { name: 'course-bsb50420.png', url: 'https://yescollege.com.au/wp-content/uploads/2021/07/BSB50420.png' },
  { name: 'course-bsb60120.png', url: 'https://yescollege.com.au/wp-content/uploads/2021/07/BSB60120.png' },
  { name: 'course-bsb50120.png', url: 'https://yescollege.com.au/wp-content/uploads/2021/06/Diploma-of-Business.png' },
  { name: 'course-bsb40120.png', url: 'https://yescollege.com.au/wp-content/uploads/2021/06/20220322_212526_0000.png' },
  { name: 'course-aur30620.png', url: 'https://yescollege.com.au/wp-content/uploads/2021/07/AUR30620.png' },
  { name: 'calendar-2026.png', url: 'https://yescollege.com.au/wp-content/uploads/2026/04/YES-College-2026-Academic-Calendar.png' },
  { name: 'team-kurt.jpg', url: 'https://yescollege.com.au/wp-content/uploads/2020/08/kurtgeorge-3-1024x683.jpg' }
];

if (!fs.existsSync('./downloaded_images')) {
  fs.mkdirSync('./downloaded_images');
}

async function download(item) {
  try {
    const res = await fetch(item.url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buffer = await res.arrayBuffer();
    fs.writeFileSync(`./downloaded_images/${item.name}`, Buffer.from(buffer));
    console.log(`Saved: ${item.name} (${buffer.byteLength} bytes)`);
  } catch (err) {
    console.error(`Failed ${item.name}: ${err.message}`);
  }
}

async function run() {
  for (const item of imagesToDownload) {
    await download(item);
  }
  console.log('Finished downloading images.');
}

run();

