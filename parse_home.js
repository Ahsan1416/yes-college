const fs = require('fs');

const html = fs.readFileSync('home.html', 'utf8');

// Find all image tags with src
const imgMatches = [...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)].map(m => m[1]);
console.log('Home Images:', imgMatches);

// Find background images
const bgMatches = [...html.matchAll(/url\((['"]?)(.*?)\1\)/gi)].map(m => m[2]).filter(u => u.includes('wp-content'));
console.log('Background Images:', bgMatches.slice(0, 10));

// Find phone, email, rto, cricos
const rtoMatch = html.match(/RTO\s*(?:Provider\s*)?(?:Code|No\.?|ID)?\s*[:#]?\s*([0-9]+)/i);
const cricosMatch = html.match(/CRICOS\s*(?:Provider\s*)?(?:Code|No\.?)?\s*[:#]?\s*([0-9A-Z]+)/i);
const emailMatch = html.match(/[a-zA-Z0-9._%+-]+@yescollege\.com\.au/gi);
const phoneMatch = html.match(/(?:\+?61|0)[2-9]\s?\d{4}\s?\d{4}|\b1300\s?\d{3}\s?\d{3}\b|\b1800\s?\d{3}\s?\d{3}\b/g);

console.log('RTO:', rtoMatch ? rtoMatch[0] : 'not found');
console.log('CRICOS:', cricosMatch ? cricosMatch[0] : 'not found');
console.log('Emails:', [...new Set(emailMatch || [])]);
console.log('Phones:', [...new Set(phoneMatch || [])]);

// Look for campus or address mentions
const addressMatches = [...html.matchAll(/(?:Sydney|Melbourne|Brisbane|Perth|Adelaide|Gold Coast)[^<>\n\r]{10,100}/gi)].map(m => m[0]);
console.log('Campuses / Locations mentioned:', addressMatches.slice(0, 10));

