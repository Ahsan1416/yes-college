const fs = require('fs');
const path = require('path');

function extractInfo() {
  const dir = './scraped';
  const files = fs.readdirSync(dir);

  const contactHtml = fs.readFileSync(path.join(dir, 'contact.html'), 'utf8');
  const campusHtml = fs.readFileSync(path.join(dir, 'campus.html'), 'utf8');
  const aboutHtml = fs.readFileSync(path.join(dir, 'about.html'), 'utf8');
  const intlHtml = fs.readFileSync(path.join(dir, 'international.html'), 'utf8');
  const studentServHtml = fs.readFileSync(path.join(dir, 'student_services.html'), 'utf8');
  const docsHtml = fs.readFileSync(path.join(dir, 'docs.html'), 'utf8');
  const agentsHtml = fs.readFileSync(path.join(dir, 'agents.html'), 'utf8');
  const termDatesHtml = fs.readFileSync(path.join(dir, 'term_dates.html'), 'utf8');
  const intakeDatesHtml = fs.readFileSync(path.join(dir, 'intake_dates.html'), 'utf8');

  function clean(html) {
    return html
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  console.log('--- CONTACT INFO ---');
  console.log(clean(contactHtml).slice(0, 1500));

  console.log('--- CAMPUS INFO ---');
  console.log(clean(campusHtml).slice(0, 1500));

  console.log('--- ABOUT INFO ---');
  console.log(clean(aboutHtml).slice(0, 1500));

  console.log('--- INTL INFO ---');
  console.log(clean(intlHtml).slice(0, 1500));

  console.log('--- DOCS INFO ---');
  console.log(clean(docsHtml).slice(0, 1500));

  console.log('--- AGENTS INFO ---');
  console.log(clean(agentsHtml).slice(0, 1500));

  console.log('--- TERM DATES ---');
  console.log(clean(termDatesHtml).slice(0, 1500));
}

extractInfo();

