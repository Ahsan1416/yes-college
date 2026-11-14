const fs = require('fs');
const path = require('path');

const courseFiles = fs.readdirSync('./scraped').filter(f => f.startsWith('course_'));

const courses = [];

for (const file of courseFiles) {
  const html = fs.readFileSync(path.join('./scraped', file), 'utf8');

  // Title
  const titleMatch = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || html.match(/<title>([^<]+)<\/title>/i);
  let title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : file;
  title = title.replace(/\s*\|\s*YES College.*/i, '').trim();

  // Extract CRICOS
  const cricosMatch = html.match(/CRICOS\s*(?:Course\s*)?Code\s*[:\s]*([0-9A-Z]+)/i) ||
                      html.match(/11[0-9]{4}[A-Z]/i) ||
                      html.match(/09[0-9]{4}[A-Z]/i) ||
                      html.match(/10[0-9]{4}[A-Z]/i);

  // Extract Duration
  const durationMatch = html.match(/(\d+\s*weeks(?:\s*\([^)]+\))?)/i);

  // Extract Units
  const units = [...html.matchAll(/([A-Z]{3,5}[0-9]{3,5}[A-Z0-9]*)\s*[-–]\s*([^<\n\r]{5,80})/gi)].map(m => ({
    code: m[1].trim(),
    name: m[2].trim()
  }));

  // Clean text
  const text = html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<nav\b[^<]*(?:(?!<\/nav>)<[^<]*)*<\/nav>/gi, '')
    .replace(/<header\b[^<]*(?:(?!<\/header>)<[^<]*)*<\/header>/gi, '')
    .replace(/<footer\b[^<]*(?:(?!<\/footer>)<[^<]*)*<\/footer>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ');

  // Career outcomes
  let careers = [];
  const careerBlock = html.match(/(?:Career Opportunities|Employment Opportunities|Career Outcomes)[\s\S]*?<\/ul>/i);
  if (careerBlock) {
    careers = [...careerBlock[0].matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  }

  // Course Image
  const imgMatch = html.match(/<img[^>]+src=["']([^"']*(?:uploads|\.png|\.jpg)[^"']*)["'][^>]*>/i);

  courses.push({
    file,
    title,
    cricos: cricosMatch ? cricosMatch[1] || cricosMatch[0] : 'Available on request',
    duration: durationMatch ? durationMatch[1] : '52 - 104 weeks',
    unitsCount: units.length,
    sampleUnits: units.slice(0, 10),
    careers: careers.slice(0, 6),
    snippet: text.slice(0, 800)
  });
}

fs.writeFileSync('parsed_courses.json', JSON.stringify(courses, null, 2));
console.log('Parsed', courses.length, 'courses');
courses.forEach(c => console.log(`- ${c.title} | CRICOS: ${c.cricos} | Duration: ${c.duration} | Units: ${c.unitsCount}`));

