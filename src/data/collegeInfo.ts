export interface CampusInfo {
  name: string;
  tagline: string;
  address: string;
  suburb: string;
  state: string;
  postcode: string;
  phone: string;
  email: string;
  description: string;
  features: string[];
  transport: string;
  hours: string;
}

export const COLLEGE_INFO = {
  legalName: 'MVJ Enterprises Pty Ltd',
  tradingName: 'YES College / Perth College of Beauty Therapy',
  shortName: 'YES College',
  tagline: 'Yes to Your Bright Future in Australia',
  motto: 'Delivering Quality Nationally Recognised Vocational Education for Over 3 Decades',
  rtoCode: '0249',
  cricosCode: '03282E',
  abn: '63 063 334 027',
  phone: '+61 2 9635 0652',
  phoneDisplay: '(02) 9635 0652',
  email: 'info@yescollege.com.au',
  award: 'Parramatta Local Business Awards WINNER - Outstanding Education Services 2022',
  establishedYear: '1987',
  experienceYears: '30+',
  socialLinks: {
    facebook: 'https://www.facebook.com/YESCollegeAU/',
    instagram: 'https://www.instagram.com/yescollegeau/',
    linkedin: 'https://www.linkedin.com/company/yes-college-australia/'
  },
  campuses: [
    {
      name: 'Sydney Parramatta Campus',
      tagline: 'Centrally Located in Greater Sydney’s Thriving Commercial Hub',
      address: '43-45 Marion Street & Level 3, 106 Church Street',
      suburb: 'Parramatta',
      state: 'NSW',
      postcode: '2150',
      phone: '+61 2 9635 0652',
      email: 'info@yescollege.com.au',
      description: 'Our purpose-built Sydney campus is conveniently situated right in the center of Parramatta. Just a short 3-4 minute walk from Parramatta train and bus interchange and directly opposite Westfield Parramatta. Featuring modern audiovisual theory classrooms, dedicated computer labs, practical beauty clinics with glowing chandeliers and beauty beds, automotive workshop training facilities, and vibrant student breakout hubs.',
      features: [
        '3-4 minute walk from Parramatta Train & Bus Interchange',
        'Directly opposite Westfield Parramatta Shopping Centre',
        'Commercial Salon Training Clinic with Professional Stations & Mirrors',
        'High-tech Audiovisual Theory Classrooms',
        'Dedicated Student Computer Study & Printing Labs',
        'Fully Equipped Student Kitchen & Breakout Lounge',
        'Student Support & Career Guidance Hub',
        'Automotive Workshop Practical Training Facility'
      ],
      transport: 'Parramatta Train Station, Metro bus interchange, and Parramatta Light Rail connections.',
      hours: 'Monday – Friday: 9:00 AM – 5:00 PM'
    },
    {
      name: 'Perth College of Beauty Therapy',
      tagline: 'Over 30 Years of Beauty & Wellness Training Excellence',
      address: 'Perth Campus Facilities',
      suburb: 'Perth',
      state: 'WA',
      postcode: '6000',
      phone: '+61 8 9228 4611',
      email: 'info@yescollege.com.au',
      description: 'Originally established in 1987 by Beverly Stone, our Perth branch has trained generations of premier beauty therapists, salon owners, and spa directors across Australia. Accredited by leading international examining bodies VTCT and ITEC.',
      features: [
        'Established in 1987 with 30+ Years Heritage',
        'Accredited by International Bodies VTCT and ITEC',
        'Dedicated Clinical Treatment Rooms & Nail Studios',
        'Industry Experienced Educators & Salon Owners',
        'Direct Industry Placement Network across Western Australia'
      ],
      transport: 'Centrally accessible via Transperth train and bus networks.',
      hours: 'Monday – Friday: 9:00 AM – 5:00 PM'
    }
  ],
  stats: [
    { label: 'Years of Vocational Heritage', value: '30+', suffix: 'Years' },
    { label: 'Nationally Recognised Courses', value: '12', suffix: 'Courses' },
    { label: 'Graduate Satisfaction Rate', value: '98%', suffix: 'Rating' },
    { label: 'Award Winning Education', value: '2022', suffix: 'Winner' }
  ],
  faqs: [
    {
      q: 'Is YES College a Registered Training Organisation (RTO) in Australia?',
      a: 'Yes. YES College (MVJ Enterprises Pty Ltd) is a fully registered Australian Registered Training Organisation (RTO Code: 0249) regulated by ASQA (Australian Skills Quality Authority) and a CRICOS Provider (CRICOS Code: 03282E) authorised to enrol international student visa holders.'
    },
    {
      q: 'Where are your campuses located?',
      a: 'Our main Sydney campus is located at 43-45 Marion Street & Level 3, 106 Church Street, Parramatta NSW 2150 (3-4 mins walk from Parramatta Train Station, directly opposite Westfield). We also deliver training through our long-established Perth College of Beauty Therapy branch in Western Australia.'
    },
    {
      q: 'Can international students apply for Subclass 500 Student Visas?',
      a: 'Yes. All our CRICOS-registered courses enable international candidates to receive a Confirmation of Enrolment (CoE) to apply for an Australian Subclass 500 Student Visa. We provide complete Genuine Student (GS) compliance guidance.'
    },
    {
      q: 'Are VET Student Loans (VSL) available for eligible local students?',
      a: 'Yes. YES College is an approved VET Student Loans provider for eligible Australian citizens and permanent humanitarian visa holders enrolled in designated diploma courses.'
    },
    {
      q: 'How often are course intakes throughout the year?',
      a: 'We offer frequent term intakes throughout the calendar year across all study areas (Automotive, Business & Leadership, Community Services, Civil Construction, and Beauty Therapy) in January, April, July, and October, plus modular monthly intakes.'
    },
    {
      q: 'How do I enrol or check entry requirements?',
      a: 'You can enrol online directly through our website or connect with our admissions team. Minimum age is 18 years, completion of Australian Year 12 (or equivalent overseas secondary qualification), and English proficiency (IELTS 5.5 to 6.0 or equivalent).'
    }
  ]
};

