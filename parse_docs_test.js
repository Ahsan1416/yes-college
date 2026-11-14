const fs = require('fs');

function checkDocsAndTestimonials() {
  const testimonials = fs.readFileSync('./scraped/testimonials.html', 'utf8');
  const docs = fs.readFileSync('./scraped/docs.html', 'utf8');

  console.log('--- TESTIMONIALS ---');
  const testMatches = [...testimonials.matchAll(/<blockquote[\s\S]*?<\/blockquote>|<div class="[^"]*testimonial[^"]*"[\s\S]*?<\/div>/gi)].map(m => m[0]);
  console.log('Found testimonials blocks:', testMatches.length);
  console.log(testimonials.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').slice(1000, 3000));

  console.log('\n--- DOCUMENTS AND FORMS ---');
  const docLinks = [...docs.matchAll(/<a[^>]+href=["']([^"']+\.(?:pdf|docx?))["'][^>]*>([\s\S]*?)<\/a>/gi)].map(m => ({
    url: m[1],
    title: m[2].replace(/<[^>]+>/g, '').trim()
  }));
  console.log('PDFs/Forms found:', docLinks);
}

checkDocsAndTestimonials();

