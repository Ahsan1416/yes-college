const fs = require('fs');

async function getSitemaps() {
  const maps = [
    'https://yescollege.com.au/page-sitemap.xml',
    'https://yescollege.com.au/academia_course-sitemap.xml',
    'https://yescollege.com.au/lp_course-sitemap.xml',
    'https://yescollege.com.au/academia_course_category-sitemap.xml'
  ];

  const allUrls = [];
  for (const url of maps) {
    try {
      const res = await fetch(url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
      });
      const text = await res.text();
      const locs = Array.from(text.matchAll(/<loc><!\[CDATA\[(.*?)\]\]><\/loc>|<loc>(.*?)<\/loc>/gi))
        .map(m => m[1] || m[2]);
      console.log(url, 'found:', locs.length);
      allUrls.push(...locs);
    } catch (e) {
      console.log('Failed', url, e.message);
    }
  }

  const unique = [...new Set(allUrls)];
  fs.writeFileSync('all_urls.json', JSON.stringify(unique, null, 2));
  console.log('Total unique URLs:', unique.length);
}

getSitemaps();

