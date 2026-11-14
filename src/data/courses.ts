export interface UnitOfCompetency {
  code: string;
  name: string;
  type: 'Core' | 'Elective';
}

export interface Course {
  id: string;
  code: string;
  title: string;
  cricos: string;
  category: string;
  categorySlug: 'automotive' | 'business' | 'construction' | 'community-services' | 'beauty';
  duration: string;
  academicWeeks: number;
  holidayWeeks: number;
  terms: string;
  studyMode: string;
  level: 'Certificate III' | 'Certificate IV' | 'Diploma' | 'Advanced Diploma';
  campus: string;
  image: string;
  featured: boolean;
  tagline: string;
  description: string;
  overview: string[];
  careerOutcomes: string[];
  entryRequirements: string[];
  unitsSummary: string;
  coreUnits: UnitOfCompetency[];
  electiveUnits: UnitOfCompetency[];
  intakes: string[];
}

export const COURSES: Course[] = [
  {
    id: 'chc52021-diploma-of-community-services',
    code: 'CHC52021',
    title: 'Diploma of Community Services',
    cricos: '112630E',
    category: 'Community Services',
    categorySlug: 'community-services',
    duration: '104 Weeks (80 Academic + 24 Holidays)',
    academicWeeks: 80,
    holidayWeeks: 24,
    terms: '8 Terms (10 Academic Weeks Each)',
    studyMode: 'Face-to-Face & Practical Industry Work Placement (20 hrs/week)',
    level: 'Diploma',
    campus: 'Sydney Parramatta Campus',
    image: '/images/course-chc52021.png',
    featured: true,
    tagline: 'Lead life-changing support programs, case management, and advocacy across Australian communities.',
    description: 'This qualification reflects the roles of community services, case management and social housing workers involved in the managing, coordinating and delivering of person-centred services to individuals, groups and communities. Workers operate at an advanced skill level, providing direct services and facilitating groups, while applying specialized knowledge of statutory requirements and client rights.',
    overview: [
      'Comprehensive case management planning, review, and client-centered advocacy.',
      'Mandatory 200+ hours of structured vocational work placement in accredited Australian care organizations.',
      'High industry demand across Sydney and NSW welfare, family support, and community centers.',
      'Taught by experienced industry practitioners with active sector networks.'
    ],
    careerOutcomes: [
      'Community Services Case Manager',
      'Family Support Coordinator',
      'Social Housing Specialist',
      'Youth Welfare Worker',
      'Community Development Officer',
      'Crisis & Intake Assessor'
    ],
    entryRequirements: [
      'Must be 18 years of age or older at course commencement',
      'Completion of Australian Year 12 (HSC) or recognized international equivalent',
      'IELTS 6.0 overall (no individual band score less than 5.5) or approved equivalent',
      'National Police Check and Working With Children Check (WWCC) before practical placement'
    ],
    unitsSummary: '16 Units of Competency (8 Core Units + 8 Elective Units)',
    coreUnits: [
      { code: 'CHCCCS007', name: 'Develop and implement service programs', type: 'Core' },
      { code: 'CHCDIV003', name: 'Manage and promote diversity', type: 'Core' },
      { code: 'CHCLEG003', name: 'Manage legal and ethical compliance', type: 'Core' },
      { code: 'CHCPRP003', name: 'Reflect on and improve own professional practice', type: 'Core' },
      { code: 'CHCADV002', name: 'Provide advocacy and representation services', type: 'Core' },
      { code: 'CHCCCS004', name: 'Assess co-existing needs', type: 'Core' },
      { code: 'CHCCSM005', name: 'Develop, facilitate and review all aspects of case management', type: 'Core' },
      { code: 'CHCDEV002', name: 'Analyse impacts of sociological factors on clients in community work and services', type: 'Core' }
    ],
    electiveUnits: [
      { code: 'CHCCCS019', name: 'Recognise and respond to crisis situations', type: 'Elective' },
      { code: 'CHCCCS028', name: 'Provide safe work practices for direct client care', type: 'Elective' },
      { code: 'CHCDFV001', name: 'Recognise and respond appropriately to domestic and family violence', type: 'Elective' },
      { code: 'CHCMHS001', name: 'Work effectively in mental health', type: 'Elective' },
      { code: 'CHCPOL003', name: 'Research and apply evidence to practice', type: 'Elective' },
      { code: 'HLTWHS004', name: 'Manage work health and safety', type: 'Elective' },
      { code: 'BSBFIN501', name: 'Manage budgets and financial plans', type: 'Elective' },
      { code: 'BSBTWK502', name: 'Manage team effectiveness', type: 'Elective' }
    ],
    intakes: ['January', 'April', 'July', 'October']
  },
  {
    id: 'aur30620-certificate-iii-in-light-vehicle-mechanical-technology',
    code: 'AUR30620',
    title: 'Certificate III in Light Vehicle Mechanical Technology',
    cricos: '106393H',
    category: 'Automotive Mechanic',
    categorySlug: 'automotive',
    duration: '94 Weeks (76 Academic + 18 Holidays)',
    academicWeeks: 76,
    holidayWeeks: 18,
    terms: '7.6 Terms (Approx. 2 Years)',
    studyMode: 'Theory & Hands-on Automotive Workshop Practice (20 hrs/week)',
    level: 'Certificate III',
    campus: 'Sydney Parramatta Campus & Automotive Workshop',
    image: '/images/course-aur30620.png',
    featured: true,
    tagline: 'Master modern diagnostic systems, engine overhauls, transmissions, and light vehicle mechanics.',
    description: 'This qualification covers the skills and knowledge required to perform a wide range of servicing, diagnosing, and repairing tasks on light vehicles within the automotive retail, service, and repair industry. Students learn in state-of-the-art mechanical facilities equipped with hydraulic hoists, scan tools, oscilloscope analyzers, and engine rebuilding bays.',
    overview: [
      'Comprehensive hands-on mechanical servicing and high-tech electrical diagnosis.',
      'Training on petrol, diesel, and modern electronic injection engines.',
      'Pathways to trade licensing and qualification as a qualified light vehicle motor mechanic in Australia.',
      'Includes mandatory workplace safety, air-conditioning principles, and precision measurement.'
    ],
    careerOutcomes: [
      'Automotive Light Vehicle Mechanical Technician',
      'Diagnostic Vehicle Specialist',
      'Automotive Workshop Technician',
      'Fleet Maintenance Mechanic',
      'Dealership Service Technician'
    ],
    entryRequirements: [
      'Must be 18 years of age or older',
      'Completion of Australian Year 10 or Year 12 equivalent',
      'IELTS 5.5 overall or equivalent recognized English test',
      'Physical capability to safely carry out mechanical workshop activities'
    ],
    unitsSummary: '36 Units of Competency (20 Core Units + 16 Elective Units)',
    coreUnits: [
      { code: 'AURAEA002', name: 'Follow environmental and sustainability best practice in an automotive workplace', type: 'Core' },
      { code: 'AURASA002', name: 'Follow safe working practices in an automotive workplace', type: 'Core' },
      { code: 'AURAIE002', name: 'Read and apply information in an automotive workplace', type: 'Core' },
      { code: 'AURTTK002', name: 'Use and maintain tools and equipment in an automotive workplace', type: 'Core' },
      { code: 'AURTRT005', name: 'Diagnose and repair light vehicle steering systems', type: 'Core' },
      { code: 'AURTRT006', name: 'Diagnose and repair light vehicle suspension systems', type: 'Core' },
      { code: 'AURTRD003', name: 'Diagnose and repair light vehicle hydraulic braking systems', type: 'Core' },
      { code: 'AURTTE004', name: 'Inspect and service engines', type: 'Core' }
    ],
    electiveUnits: [
      { code: 'AURTTA018', name: 'De-energise and re-energise hybrid and battery electric vehicles', type: 'Elective' },
      { code: 'AURTTX004', name: 'Diagnose and repair manual transmissions', type: 'Elective' },
      { code: 'AURTTX005', name: 'Diagnose and repair automatic transmissions', type: 'Elective' },
      { code: 'AURTEU005', name: 'Diagnose and repair electronic fuel injection systems', type: 'Elective' },
      { code: 'AURETR025', name: 'Test, charge and replace batteries and jump-start vehicles', type: 'Elective' },
      { code: 'AURETR032', name: 'Diagnose and repair automotive electrical systems', type: 'Elective' }
    ],
    intakes: ['January', 'April', 'July', 'October']
  },
  {
    id: 'aur50116-diploma-of-automotive-management',
    code: 'AUR50116',
    title: 'Diploma of Automotive Management',
    cricos: '118051J',
    category: 'Automotive Mechanic',
    categorySlug: 'automotive',
    duration: '52 Weeks (40 Academic + 12 Holidays)',
    academicWeeks: 40,
    holidayWeeks: 12,
    terms: '4 Terms (10 Academic Weeks Each)',
    studyMode: 'Face-to-Face Seminars & Management Workshops',
    level: 'Diploma',
    campus: 'Sydney Parramatta Campus',
    image: '/images/course-aur50116.png',
    featured: false,
    tagline: 'Step into executive workshop management, dealership leadership, and automotive business operations.',
    description: 'This qualification reflects the role of an individual who undertakes leadership and management roles within the automotive retail, service, and repair industry. You will develop competencies in business development, customer dispute resolution, workshop productivity optimization, financial budgeting, and staff leadership.',
    overview: [
      'Strategic automotive workshop management and commercial operations.',
      'Dealership sales, parts inventory logistics, and warranty claim management.',
      'Financial performance analysis and business plan execution for automotive enterprises.',
      'Ideal pathway for technicians stepping up into managerial and director positions.'
    ],
    careerOutcomes: [
      'Automotive Dealership General Manager',
      'Automotive Workshop Operations Director',
      'Automotive Service Department Manager',
      'Automotive Parts & Inventory Manager'
    ],
    entryRequirements: [
      'Must be 18 years of age or older',
      'Relevant automotive trade qualification or substantial industry experience',
      'IELTS 6.0 overall or equivalent'
    ],
    unitsSummary: '12 Units of Competency (6 Core Units + 6 Elective Units)',
    coreUnits: [
      { code: 'AURAMA005', name: 'Manage complex customer issues in an automotive workplace', type: 'Core' },
      { code: 'AURAMA006', name: 'Manage workplace safety in an automotive enterprise', type: 'Core' },
      { code: 'AURAMA007', name: 'Manage customer service in an automotive enterprise', type: 'Core' },
      { code: 'AURMMA002', name: 'Manage operational plans in an automotive workplace', type: 'Core' },
      { code: 'AURSCA005', name: 'Manage automotive sales and repair operations', type: 'Core' },
      { code: 'BSBFIN501', name: 'Manage budgets and financial plans', type: 'Core' }
    ],
    electiveUnits: [
      { code: 'BSBTWK502', name: 'Manage team effectiveness', type: 'Elective' },
      { code: 'BSBHRM525', name: 'Manage recruitment and onboarding', type: 'Elective' },
      { code: 'BSBOPS504', name: 'Manage business risk', type: 'Elective' },
      { code: 'BSBSTR502', name: 'Facilitate continuous improvement', type: 'Elective' }
    ],
    intakes: ['January', 'April', 'July', 'October']
  },
  {
    id: 'shb50121-diploma-of-beauty-therapy',
    code: 'SHB50121',
    title: 'Diploma of Beauty Therapy',
    cricos: '112226F',
    category: 'Beauty and Make-Up',
    categorySlug: 'beauty',
    duration: '52 Weeks (42 Academic + 10 Holidays)',
    academicWeeks: 42,
    holidayWeeks: 10,
    terms: '4 Terms (Intensive Salon Training)',
    studyMode: 'Campus Clinic Practice & Real Client Treatments (20 hrs/week)',
    level: 'Diploma',
    campus: 'Sydney Parramatta Campus & Perth College of Beauty Therapy',
    image: '/images/course-shb50121.png',
    featured: true,
    tagline: 'Learn advanced aesthetics, spa therapies, facials, and clinical treatments in our luxury student salon.',
    description: 'Delivered in our commercial salon training clinics featuring glowing chandeliers, professional beauty beds, and makeup stations. You will master facial treatments, microdermabrasion, body massage, aromatherapies, nail enhancements, lash & brow styling, and salon business operations with 30+ years of beauty education prestige.',
    overview: [
      'Over 30 years of premier beauty heritage through Perth College of Beauty Therapy and YES College.',
      'Accredited by world-renowned examining bodies VTCT and ITEC.',
      'Hands-on experience treating real public clients in our fully operational student salon.',
      'Pathways into dermal aesthetics, resort spas, cruise liners, and medical cosmetic clinics.'
    ],
    careerOutcomes: [
      'Senior Beauty Therapist',
      'Day Spa & Wellness Center Manager',
      'Dermal Aesthetics Practitioner Assistant',
      'Cruise Ship / Resort Spa Specialist',
      'Beauty Salon Owner & Director'
    ],
    entryRequirements: [
      'Must be 18 years of age or older',
      'Completion of Australian Year 12 (or recognized international equivalent)',
      'IELTS 5.5 overall or equivalent',
      'Passion for aesthetics, hygiene compliance, and client service excellence'
    ],
    unitsSummary: '29 Units of Competency (20 Core Units + 9 Elective Units)',
    coreUnits: [
      { code: 'SHBBFAS005', name: 'Provide facial treatments and skin care recommendations', type: 'Core' },
      { code: 'SHBBFAS006', name: 'Provide specialized facial treatments', type: 'Core' },
      { code: 'SHBBBOS008', name: 'Provide body massages', type: 'Core' },
      { code: 'SHBBBOS009', name: 'Provide aromatherapy massages', type: 'Core' },
      { code: 'SHBBINF002', name: 'Maintain infection control standards', type: 'Core' },
      { code: 'SHBBNLS007', name: 'Apply gel nail enhancement', type: 'Core' },
      { code: 'SHBBNLS009', name: 'Apply acrylic nail enhancement', type: 'Core' },
      { code: 'SHBBRES003', name: 'Research and apply beauty industry information', type: 'Core' }
    ],
    electiveUnits: [
      { code: 'SHBBMUP009', name: 'Design and apply make-up', type: 'Elective' },
      { code: 'SHBBHRS010', name: 'Provide waxing services', type: 'Elective' },
      { code: 'SHBBHRS011', name: 'Provide female intimate waxing', type: 'Elective' },
      { code: 'SHBBSPA003', name: 'Provide spa treatments', type: 'Elective' },
      { code: 'BSBSMB404', name: 'Undertake small business planning', type: 'Elective' }
    ],
    intakes: ['January', 'April', 'July', 'October']
  },
  {
    id: 'rii60520-advanced-diploma-of-civil-construction-design',
    code: 'RII60520',
    title: 'Advanced Diploma of Civil Construction Design',
    cricos: '107982A',
    category: 'Building & Civil Construction',
    categorySlug: 'construction',
    duration: '104 Weeks (80 Academic + 24 Holidays)',
    academicWeeks: 80,
    holidayWeeks: 24,
    terms: '8 Terms (10 Academic Weeks Each)',
    studyMode: 'Face-to-Face & Computer-Aided Civil Design Labs (20 hrs/week)',
    level: 'Advanced Diploma',
    campus: 'Sydney Parramatta Campus',
    image: '/images/course-rii60520.png',
    featured: true,
    tagline: 'Design major infrastructure, highways, stormwater networks, and multi-million dollar civil works.',
    description: 'This qualification reflects the role of an individual working as a senior civil works designer or para-professional engineer, supporting professional engineers in design, geotechnical evaluation, structural calculations, and project management across roads, bridges, and infrastructure.',
    overview: [
      'High-level civil engineering drafting, structural design, and stormwater management.',
      'Master industry-standard CAD, 3D modelling, and geotechnical survey analysis.',
      'Massive career demand across Australia’s expanding transport and infrastructure sectors.',
      'Parramatta-based training close to NSW mega-infrastructure projects.'
    ],
    careerOutcomes: [
      'Senior Civil Construction Designer',
      'Civil Engineering Para-Professional',
      'Infrastructure Project Coordinator',
      'Subdivision & Highway Design Specialist',
      'Civil Drafter & Modelling Team Lead'
    ],
    entryRequirements: [
      'Must be 18 years of age or older',
      'Completion of Australian Year 12 with mathematics/science background or relevant Certificate IV/Diploma',
      'IELTS 6.0 overall or equivalent recognized English proficiency'
    ],
    unitsSummary: '12 Units of Competency (5 Core Units + 7 Elective Units)',
    coreUnits: [
      { code: 'RIICWD601E', name: 'Manage the civil works design process', type: 'Core' },
      { code: 'RIIENV601E', name: 'Establish and maintain the environmental management system', type: 'Core' },
      { code: 'RIIWHS601E', name: 'Establish and maintain the WHS management system', type: 'Core' },
      { code: 'RIICWD507E', name: 'Prepare detailed design of traffic management systems', type: 'Core' },
      { code: 'RIICWD510E', name: 'Prepare detailed design of road pavements', type: 'Core' }
    ],
    electiveUnits: [
      { code: 'RIICWD509E', name: 'Prepare detailed design of urban roads', type: 'Elective' },
      { code: 'RIICWD512E', name: 'Prepare detailed design of drainage networks', type: 'Elective' },
      { code: 'RIICWD520E', name: 'Prepare detailed design of subsurface drainage', type: 'Elective' },
      { code: 'BSBFIN501', name: 'Manage budgets and financial plans', type: 'Elective' }
    ],
    intakes: ['January', 'April', 'July', 'October']
  },
  {
    id: 'rii50520-diploma-of-civil-construction-design',
    code: 'RII50520',
    title: 'Diploma of Civil Construction Design',
    cricos: '118207E',
    category: 'Building & Civil Construction',
    categorySlug: 'construction',
    duration: '52 Weeks (40 Academic + 12 Holidays)',
    academicWeeks: 40,
    holidayWeeks: 12,
    terms: '4 Terms (10 Academic Weeks Each)',
    studyMode: 'Face-to-Face & Civil CAD Drafting Studio',
    level: 'Diploma',
    campus: 'Sydney Parramatta Campus',
    image: '/images/course-rii50520.png',
    featured: false,
    tagline: 'Develop technical drafting, site surveying review, and civil works estimation expertise.',
    description: 'This qualification reflects the role of personnel working in civil construction design assisting senior engineers. You will learn to prepare technical drawings, evaluate site specifications, conduct soil and materials assessments, and manage environmental site controls.',
    overview: [
      'Foundational civil design drafting and CAD applications.',
      'Interpretation of Australian engineering standards and soil mechanics.',
      'Direct pathway into the Advanced Diploma of Civil Construction Design (RII60520).'
    ],
    careerOutcomes: [
      'Civil Construction Design Drafter',
      'Civil Works Estimator',
      'Civil Site Technical Officer'
    ],
    entryRequirements: [
      'Must be 18 years of age or older',
      'Year 12 completion or equivalent',
      'IELTS 5.5 overall or equivalent'
    ],
    unitsSummary: '12 Units of Competency (5 Core Units + 7 Elective Units)',
    coreUnits: [
      { code: 'RIICWD501E', name: 'Prepare technical drawings for civil works', type: 'Core' },
      { code: 'RIICWD503E', name: 'Prepare detailed designs for civil earthworks', type: 'Core' },
      { code: 'RIIWHS501E', name: 'Implement and monitor WHS policies', type: 'Core' },
      { code: 'RIIENV501E', name: 'Implement environmental management plans', type: 'Core' },
      { code: 'RIICWD505E', name: 'Prepare detailed design of small bridges and culverts', type: 'Core' }
    ],
    electiveUnits: [
      { code: 'RIICWD514E', name: 'Prepare detailed design of retaining structures', type: 'Elective' },
      { code: 'BSBPMG522', name: 'Undertake project work', type: 'Elective' }
    ],
    intakes: ['January', 'April', 'July', 'October']
  },
  {
    id: 'bsb60420-advanced-diploma-of-leadership-and-management',
    code: 'BSB60420',
    title: 'Advanced Diploma of Leadership and Management',
    cricos: '106077J',
    category: 'Business and Management',
    categorySlug: 'business',
    duration: '52 Weeks (40 Academic + 12 Holidays)',
    academicWeeks: 40,
    holidayWeeks: 12,
    terms: '4 Terms (10 Academic Weeks Each)',
    studyMode: 'Executive Seminars, Case Studies & Strategy Workshops',
    level: 'Advanced Diploma',
    campus: 'Sydney Parramatta Campus',
    image: '/images/course-bsb60420.png',
    featured: true,
    tagline: 'Master executive decision-making, corporate governance, change leadership, and strategy.',
    description: 'This qualification reflects the role of individuals who apply specialized knowledge and skills, together with experience in leadership and management, across a range of enterprise and industry contexts. Students master strategic planning, organizational transformation, and corporate risk governance.',
    overview: [
      'Executive leadership and board-level strategic decision making.',
      'Comprehensive change management frameworks for Australian and multinational corporations.',
      'High-value networking and collaborative case competitions in Parramatta CBD.',
      'Credit transfer pathways towards Australian University Bachelor and Master degrees.'
    ],
    careerOutcomes: [
      'Executive General Manager',
      'Director of Operations',
      'Management Consultant',
      'Strategy & Transformation Lead',
      'Regional Operations Manager'
    ],
    entryRequirements: [
      'Must be 18 years of age or older',
      'Completion of Diploma of Leadership and Management or relevant senior business experience',
      'IELTS 6.0 overall or equivalent'
    ],
    unitsSummary: '10 Units of Competency (5 Core Units + 5 Elective Units)',
    coreUnits: [
      { code: 'BSBLDR601', name: 'Lead and manage organizational change', type: 'Core' },
      { code: 'BSBLDR602', name: 'Provide leadership across the organization', type: 'Core' },
      { code: 'BSBSTR601', name: 'Manage innovation and continuous improvement', type: 'Core' },
      { code: 'BSBFIN601', name: 'Manage finances for organizations', type: 'Core' },
      { code: 'BSBOPS601', name: 'Develop and implement business plans', type: 'Core' }
    ],
    electiveUnits: [
      { code: 'BSBHRM614', name: 'Contribute to strategic workforce planning', type: 'Elective' },
      { code: 'BSBSTR602', name: 'Develop organizational strategies', type: 'Elective' },
      { code: 'BSBCMM511', name: 'Communicate with influence', type: 'Elective' }
    ],
    intakes: ['January', 'April', 'July', 'October']
  },
  {
    id: 'bsb50420-diploma-of-leadership-and-management',
    code: 'BSB50420',
    title: 'Diploma of Leadership and Management',
    cricos: '104244D',
    category: 'Business and Management',
    categorySlug: 'business',
    duration: '52 Weeks (40 Academic + 12 Holidays)',
    academicWeeks: 40,
    holidayWeeks: 12,
    terms: '4 Terms (10 Academic Weeks Each)',
    studyMode: 'Face-to-Face Workshops, Team Simulations & Projects',
    level: 'Diploma',
    campus: 'Sydney Parramatta Campus',
    image: '/images/course-bsb50420.png',
    featured: false,
    tagline: 'Develop dynamic frontline leadership, high-performing team coordination, and business agility.',
    description: 'This qualification reflects the role of individuals who apply knowledge, practical skills and experience in leadership and management across a wide range of enterprise and industry contexts. You will learn to lead team effectiveness, manage workplace risk, and facilitate operational plans.',
    overview: [
      'Hands-on team leadership, performance review, and workplace conflict resolution.',
      'Budget management, WHS compliance, and business presentation techniques.',
      'Direct pathway into the Advanced Diploma of Leadership & Management.'
    ],
    careerOutcomes: [
      'Operations Coordinator',
      'Business Team Leader',
      'Branch Manager',
      'Department Supervisor'
    ],
    entryRequirements: [
      'Must be 18 years of age or older',
      'Completion of Year 12 or Certificate IV qualification',
      'IELTS 5.5 overall or equivalent'
    ],
    unitsSummary: '12 Units of Competency (6 Core Units + 6 Elective Units)',
    coreUnits: [
      { code: 'BSBCMM511', name: 'Communicate with influence', type: 'Core' },
      { code: 'BSBCRT511', name: 'Apply critical thinking for complex problem solving', type: 'Core' },
      { code: 'BSBLDR522', name: 'Manage people performance', type: 'Core' },
      { code: 'BSBOPS502', name: 'Manage business operational plans', type: 'Core' },
      { code: 'BSBPEF502', name: 'Develop and use emotional intelligence', type: 'Core' },
      { code: 'BSBTWK502', name: 'Manage team effectiveness', type: 'Core' }
    ],
    electiveUnits: [
      { code: 'BSBFIN501', name: 'Manage budgets and financial plans', type: 'Elective' },
      { code: 'BSBHRM525', name: 'Manage recruitment and onboarding', type: 'Elective' }
    ],
    intakes: ['January', 'April', 'July', 'October']
  },
  {
    id: 'bsb60120-advanced-diploma-of-business',
    code: 'BSB60120',
    title: 'Advanced Diploma of Business',
    cricos: '106076K',
    category: 'Business and Management',
    categorySlug: 'business',
    duration: '52 Weeks (40 Academic + 12 Holidays)',
    academicWeeks: 40,
    holidayWeeks: 12,
    terms: '4 Terms (10 Academic Weeks Each)',
    studyMode: 'Face-to-Face & Corporate Case Studies',
    level: 'Advanced Diploma',
    campus: 'Sydney Parramatta Campus',
    image: '/images/course-bsb60120.png',
    featured: false,
    tagline: 'Strategic corporate planning, global business development, and commercial operations.',
    description: 'This qualification reflects the role of individuals with significant expertise in either specialized or broad business areas who are seeking to develop comprehensive business acumen. It covers global market analysis, financial modeling, and corporate governance.',
    overview: [
      'International business expansion strategies and market risk assessments.',
      'Advanced financial budgeting, corporate sustainability, and business model design.',
      'Comprehensive preparation for commercial executives in corporate Australia.'
    ],
    careerOutcomes: [
      'Senior Commercial Manager',
      'Corporate Strategy Executive',
      'Business Development Director',
      'Operations Consultant'
    ],
    entryRequirements: [
      'Must be 18 years of age or older',
      'Completion of Diploma of Business or equivalent qualification',
      'IELTS 6.0 overall or equivalent'
    ],
    unitsSummary: '10 Units of Competency (5 Core Units + 5 Elective Units)',
    coreUnits: [
      { code: 'BSBCRT611', name: 'Apply critical thinking for organizational outcomes', type: 'Core' },
      { code: 'BSBFIN601', name: 'Manage finances for organizations', type: 'Core' },
      { code: 'BSBOPS601', name: 'Develop and implement business plans', type: 'Core' },
      { code: 'BSBSTR601', name: 'Manage innovation and continuous improvement', type: 'Core' },
      { code: 'BSBSTR602', name: 'Develop organizational strategies', type: 'Core' }
    ],
    electiveUnits: [
      { code: 'BSBMKG623', name: 'Develop marketing plans', type: 'Elective' },
      { code: 'BSBTEC601', name: 'Review organizational digital strategy', type: 'Elective' }
    ],
    intakes: ['January', 'April', 'July', 'October']
  },
  {
    id: 'bsb50120-diploma-of-business',
    code: 'BSB50120',
    title: 'Diploma of Business',
    cricos: '106075M',
    category: 'Business and Management',
    categorySlug: 'business',
    duration: '52 Weeks (40 Academic + 12 Holidays)',
    academicWeeks: 40,
    holidayWeeks: 12,
    terms: '4 Terms (10 Academic Weeks Each)',
    studyMode: 'Face-to-Face & Practical Enterprise Projects',
    level: 'Diploma',
    campus: 'Sydney Parramatta Campus',
    image: '/images/course-bsb50120.png',
    featured: false,
    tagline: 'Build core business competence in marketing, project management, and digital workplace tools.',
    description: 'This qualification applies to personnel in various business roles who apply substantial knowledge in a specialized area alongside broad skills across administrative, financial, marketing, and human resource frameworks.',
    overview: [
      'Practical marketing communication, digital workflows, and project coordination.',
      'Business data analysis and customer relationship management (CRM) workflows.',
      'Direct pathway into the Advanced Diploma of Business.'
    ],
    careerOutcomes: [
      'Business Administration Manager',
      'Project Coordinator',
      'Account Manager',
      'Marketing Assistant'
    ],
    entryRequirements: [
      'Must be 18 years of age or older',
      'Year 12 completion or equivalent',
      'IELTS 5.5 overall or equivalent'
    ],
    unitsSummary: '12 Units of Competency (5 Core Units + 7 Elective Units)',
    coreUnits: [
      { code: 'BSBCRT511', name: 'Apply critical thinking for complex problem solving', type: 'Core' },
      { code: 'BSBFIN501', name: 'Manage budgets and financial plans', type: 'Core' },
      { code: 'BSBOPS502', name: 'Manage business operational plans', type: 'Core' },
      { code: 'BSBSUS511', name: 'Develop and implement sustainable workplace practices', type: 'Core' },
      { code: 'BSBTEC501', name: 'Automate business processes', type: 'Core' }
    ],
    electiveUnits: [
      { code: 'BSBMKG541', name: 'Identify and evaluate marketing opportunities', type: 'Elective' },
      { code: 'BSBPMG522', name: 'Undertake project work', type: 'Elective' }
    ],
    intakes: ['January', 'April', 'July', 'October']
  },
  {
    id: 'bsb40120-certificate-iv-in-business',
    code: 'BSB40120',
    title: 'Certificate IV in Business',
    cricos: '106074A',
    category: 'Business and Management',
    categorySlug: 'business',
    duration: '52 Weeks (40 Academic + 12 Holidays)',
    academicWeeks: 40,
    holidayWeeks: 12,
    terms: '4 Terms (10 Academic Weeks Each)',
    studyMode: 'Face-to-Face & Computer Lab Sessions',
    level: 'Certificate IV',
    campus: 'Sydney Parramatta Campus',
    image: '/images/course-bsb40120.png',
    featured: false,
    tagline: 'Launch your professional career with core administrative, digital, and communication tools.',
    description: 'This qualification provides foundational skills for clerical, administrative, and frontline business careers. You will learn professional writing, spreadsheet analytics, customer satisfaction management, and workplace health and safety compliance.',
    overview: [
      'Hands-on computer training in modern enterprise productivity software.',
      'Professional communication and customer negotiation techniques.',
      'Ideal entry point for school leavers or professionals switching careers.'
    ],
    careerOutcomes: [
      'Executive Administrative Assistant',
      'Records Officer',
      'Customer Service Specialist',
      'Office Junior Coordinator'
    ],
    entryRequirements: [
      'Must be 18 years of age or older',
      'Completion of Australian Year 11/12 or equivalent',
      'IELTS 5.5 overall or equivalent'
    ],
    unitsSummary: '12 Units of Competency (6 Core Units + 6 Elective Units)',
    coreUnits: [
      { code: 'BSBCMM412', name: 'Lead difficult conversations', type: 'Core' },
      { code: 'BSBCRT414', name: 'Apply principles of design thinking', type: 'Core' },
      { code: 'BSBTEC404', name: 'Use digital technologies to collaborate in a work environment', type: 'Core' },
      { code: 'BSBWRT411', name: 'Write complex documents', type: 'Core' },
      { code: 'BSBWHS411', name: 'Implement and monitor WHS policies', type: 'Core' },
      { code: 'BSBXCM401', name: 'Apply communication strategies in the workplace', type: 'Core' }
    ],
    electiveUnits: [
      { code: 'BSBINS401', name: 'Analyze and present research information', type: 'Elective' },
      { code: 'BSBFIN401', name: 'Report on financial activity', type: 'Elective' }
    ],
    intakes: ['January', 'April', 'July', 'October']
  },
  {
    id: 'cpc33020-certificate-iii-in-bricklaying-and-blocklaying',
    code: 'CPC33020',
    title: 'Certificate III in Bricklaying and Blocklaying',
    cricos: 'Available on request',
    category: 'Building & Civil Construction',
    categorySlug: 'construction',
    duration: '94 - 104 Weeks',
    academicWeeks: 80,
    holidayWeeks: 20,
    terms: '8 Terms with Practical Yard Trade Practice',
    studyMode: 'Practical Yard Training & Technical Trade Theory (20 hrs/week)',
    level: 'Certificate III',
    campus: 'Sydney Trade Facility & Parramatta Campus',
    image: '/images/campus-parramatta.png',
    featured: false,
    tagline: 'Become a trade-qualified bricklayer and blocklayer in Australia’s booming construction sector.',
    description: 'This qualification provides a trade outcome in bricklaying and blocklaying. It covers masonry brick and block structures, curved walls, structural footings, decorative features, and scaffolding erection in domestic, residential, and commercial settings.',
    overview: [
      'High trade demand across NSW residential and commercial construction sites.',
      'Practical bricklaying training in simulated construction yard bays.',
      'Preparation for trade contractor licensing and Australian building industry compliance.'
    ],
    careerOutcomes: [
      'Qualified Bricklayer & Blocklayer',
      'Masonry Contractor Sub-trade',
      'Residential Builder Subcontractor',
      'Construction Site Tradesperson'
    ],
    entryRequirements: [
      'Must be 18 years of age or older',
      'Australian Year 10 or equivalent',
      'White Card (CPCWHS1001) before entering practical trade yards',
      'IELTS 5.5 overall or equivalent'
    ],
    unitsSummary: '28 Units of Competency (20 Core Units + 8 Elective Units)',
    coreUnits: [
      { code: 'CPCCBL3002', name: 'Carry out masonry veneer construction', type: 'Core' },
      { code: 'CPCCBL3003', name: 'Carry out cavity brick construction', type: 'Core' },
      { code: 'CPCCBL3005', name: 'Lay curved walls in brickwork', type: 'Core' },
      { code: 'CPCCBL3006', name: 'Lay multi-thickness walls and piers', type: 'Core' },
      { code: 'CPCCWHS2001', name: 'Apply WHS requirements, policies and procedures in the construction industry', type: 'Core' }
    ],
    electiveUnits: [
      { code: 'CPCCBL3010', name: 'Construct masonry arches', type: 'Elective' },
      { code: 'CPCCCM2006', name: 'Apply basic levelling procedures', type: 'Elective' }
    ],
    intakes: ['January', 'April', 'July', 'October']
  }
];

