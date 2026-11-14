const fs = require('fs');

async function scrape() {
  try {
    const res = await fetch('https://yescollege.com.au/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    const html = await res.text();
    fs.writeFileSync('home.html', html, 'utf8');
    console.log('Saved home.html, size:', html.length);

    // Extract title, meta description
    const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
    const descMatch = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i);
    console.log('Title:', titleMatch ? titleMatch[1] : 'N/A');
    console.log('Desc:', descMatch ? descMatch[1] : 'N/A');

    // Extract images
    const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
    const images = [];
    let match;
    while ((match = imgRegex.exec(html)) !== null) {
      images.push(match[1]);
    }
    console.log('Found images:', images.length);
    fs.writeFileSync('images.json', JSON.stringify([...new Set(images)], null, 2));

    // Extract links
    const linkRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
    const links = [];
    while ((match = linkRegex.exec(html)) !== null) {
      const href = match[1];
      const text = match[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
      if (text && href && !href.startsWith('#') && !href.startsWith('javascript:')) {
        links.push({ href, text });
      }
    }
    fs.writeFileSync('links.json', JSON.stringify(links, null, 2));
    console.log('Found links:', links.length);

    // Also try to fetch sitemap.xml
    try {
      const sitemapRes = await fetch('https://yescollege.com.au/sitemap.xml', {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });
      const sitemapText = await sitemapRes.text();
      fs.writeFileSync('sitemap.xml', sitemapText, 'utf8');
      console.log('Saved sitemap.xml, size:', sitemapText.length);
    } catch (e) {
      console.log('Sitemap fetch failed:', e.message);
    }
  } catch (err) {
    console.error('Scrape error:', err);
  }
}

scrape();

