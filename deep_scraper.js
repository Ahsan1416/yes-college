const fs = require('fs');

async function scrapePages() {
  const pagesToScrape = [
    { key: 'contact', url: 'https://yescollege.com.au/contact-us/' },
    { key: 'campus', url: 'https://yescollege.com.au/our-campus/' },
    { key: 'about', url: 'https://yescollege.com.au/why-chose-yes-college/' },
    { key: 'international', url: 'https://yescollege.com.au/international-students/' },
    { key: 'student_services', url: 'https://yescollege.com.au/student-services/' },
    { key: 'docs', url: 'https://yescollege.com.au/documents-and-forms/' },
    { key: 'agents', url: 'https://yescollege.com.au/education-agents/' },
    { key: 'term_dates', url: 'https://yescollege.com.au/term-dates/' },
    { key: 'intake_dates', url: 'https://yescollege.com.au/intake-dates/' },
    { key: 'beauty_school', url: 'https://yescollege.com.au/school-of-beauty/' },
    { key: 'testimonials', url: 'https://yescollege.com.au/testimonials/' },
    { key: 'meet_team', url: 'https://yescollege.com.au/meet-the-team/' },
    // Course pages
    { key: 'course_community', url: 'https://yescollege.com.au/course/chc52021-diploma-of-community-services/' },
    { key: 'course_auto_mgmt', url: 'https://yescollege.com.au/course/aur50116-diploma-of-automotive-management/' },
    { key: 'course_civil_adv', url: 'https://yescollege.com.au/course/rii60520-advanced-diploma-of-civil-construction-design/' },
    { key: 'course_civil_dip', url: 'https://yescollege.com.au/course/rii50520-diploma-of-civil-construction-design/' },
    { key: 'course_beauty', url: 'https://yescollege.com.au/course/shb50121-diploma-of-beauty-therapy/' },
    { key: 'course_lead_adv', url: 'https://yescollege.com.au/course/bsb60420-advanced-diploma-of-leadership-and-management/' },
    { key: 'course_lead_dip', url: 'https://yescollege.com.au/course/bsb50420-diploma-of-leadership-and-management/' },
    { key: 'course_bus_adv', url: 'https://yescollege.com.au/course/bsb60120-advanced-diploma-of-business/' },
    { key: 'course_bus_dip', url: 'https://yescollege.com.au/course/bsb50120-diploma-of-business/' },
    { key: 'course_bus_cert4', url: 'https://yescollege.com.au/course/bsb40120-certificate-iv-in-business/' },
    { key: 'course_auto_cert3', url: 'https://yescollege.com.au/course/aur30620-certificate-iii-in-light-vehicle-mechanical-technology/' },
    { key: 'course_bricklaying', url: 'https://yescollege.com.au/courses/cpc33020-certificate-iii-in-bricklaying-and-blocklaying/' },
  ];

  if (!fs.existsSync('./scraped')) {
    fs.mkdirSync('./scraped');
  }

  const results = {};
  const allImages = new Set();

  for (const item of pagesToScrape) {
    try {
      console.log('Fetching:', item.key, item.url);
      const res = await fetch(item.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });
      const html = await res.text();
      fs.writeFileSync(`./scraped/${item.key}.html`, html, 'utf8');

      // extract all images
      const imgMatches = [...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)].map(m => m[1]);
      imgMatches.forEach(img => allImages.add(img));

      // extract title
      const title = html.match(/<title>([^<]+)<\/title>/i)?.[1] || '';

      // clean text content
      const cleanText = html
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
        .replace(/<nav\b[^<]*(?:(?!<\/nav>)<[^<]*)*<\/nav>/gi, '')
        .replace(/<footer\b[^<]*(?:(?!<\/footer>)<[^<]*)*<\/footer>/gi, '')
        .replace(/<header\b[^<]*(?:(?!<\/header>)<[^<]*)*<\/header>/gi, '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

      results[item.key] = {
        url: item.url,
        title,
        textPreview: cleanText.slice(0, 3000),
        images: imgMatches
      };
    } catch (e) {
      console.error('Error fetching', item.key, e.message);
    }
  }

  fs.writeFileSync('scraped_summary.json', JSON.stringify(results, null, 2));
  fs.writeFileSync('all_scraped_images.json', JSON.stringify([...allImages], null, 2));
  console.log('Done! Total unique images discovered:', allImages.size);
}

scrapePages();

