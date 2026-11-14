const fs = require('fs');
const path = require('path');

function parseMain(filename) {
  const html = fs.readFileSync(path.join('./scraped', filename), 'utf8');
  // Find article or main or entry-content or content
  const contentMatch = html.match(/<article[\s\S]*?<\/article>/i) ||
                       html.match(/<main[\s\S]*?<\/main>/i) ||
                       html.match(/<div[^>]*class=["'][^"']*(?:entry-content|page-content|elementor-section-wrap)[^"']*["'][\s\S]*?<\/div>/i);
  const text = contentMatch ? contentMatch[0] : html;
  return text
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<nav\b[^<]*(?:(?!<\/nav>)<[^<]*)*<\/nav>/gi, '')
    .replace(/<header\b[^<]*(?:(?!<\/header>)<[^<]*)*<\/header>/gi, '')
    .replace(/<footer\b[^<]*(?:(?!<\/footer>)<[^<]*)*<\/footer>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

console.log('=== CONTACT PAGE ===');
console.log(parseMain('contact.html').slice(0, 1500));

console.log('\n=== CAMPUS PAGE ===');
console.log(parseMain('campus.html').slice(0, 1500));

console.log('\n=== ABOUT PAGE ===');
console.log(parseMain('about.html').slice(0, 1500));

console.log('\n=== COURSE: COMMUNITY SERVICES ===');
console.log(parseMain('course_community.html').slice(0, 2000));

