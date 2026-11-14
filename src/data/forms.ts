export interface ResourceDoc {
  title: string;
  category: 'Student Forms' | 'Policies & Procedures' | 'VET Student Loans' | 'Academic Information';
  description: string;
  downloadUrl: string;
  format: 'PDF' | 'DOCX';
  fileSize?: string;
  isImportant?: boolean;
}

export const RESOURCE_DOCS: ResourceDoc[] = [
  {
    title: 'YES College Student Handbook',
    category: 'Student Forms',
    description: 'Essential orientation guide covering student rights, campus facilities, academic expectations, ASQA regulations, and student support services.',
    downloadUrl: 'https://yescollege.com.au/wp-content/uploads/2026/09/YES_College_Student_Handbook.pdf',
    format: 'PDF',
    fileSize: '1.8 MB',
    isImportant: true
  },
  {
    title: 'International Student Enrolment Application Form',
    category: 'Student Forms',
    description: 'Official application form for overseas student admission, course selection, and Subclass 500 visa CoE processing.',
    downloadUrl: 'https://yescollege.com.au/wp-content/uploads/2026/04/SMD-Enrolment-Form-International-Students-v5.5.docx',
    format: 'DOCX',
    fileSize: '340 KB',
    isImportant: true
  },
  {
    title: 'Application to Defer or Suspend Enrolment',
    category: 'Student Forms',
    description: 'Formal request form for temporary deferral or compassionate leave of absence under ESOS National Code standards.',
    downloadUrl: 'https://yescollege.com.au/wp-content/uploads/2023/10/SMD-Application-to-Defer-or-Suspend-Enrolment.pdf',
    format: 'PDF',
    fileSize: '210 KB'
  },
  {
    title: 'Course Withdrawal & Cancellation Application',
    category: 'Student Forms',
    description: 'Application form for course cancellation, release request, and statement of attainment issuance.',
    downloadUrl: 'https://yescollege.com.au/wp-content/uploads/2023/05/SMD-Application-to-Withdraw.pdf',
    format: 'PDF',
    fileSize: '185 KB'
  },
  {
    title: 'Unique Student Identifier (USI) Application Form',
    category: 'Student Forms',
    description: 'Australian Government USI authorization and verification form required for all accredited vocational training in Australia.',
    downloadUrl: 'https://yescollege.com.au/wp-content/uploads/2023/10/SMD-Unique-Student-Identifier-Form.pdf',
    format: 'PDF',
    fileSize: '150 KB'
  },
  {
    title: 'Student Exemption & Credit Transfer Form',
    category: 'Student Forms',
    description: 'Form to apply for Recognition of Prior Learning (RPL) or National Credit Transfer from previous Australian qualifications.',
    downloadUrl: 'https://yescollege.com.au/wp-content/uploads/2024/04/SMD-Student-Exemption-Form.pdf',
    format: 'PDF',
    fileSize: '220 KB'
  },
  {
    title: 'Student Complaints and Appeals Policy & Procedure',
    category: 'Policies & Procedures',
    description: 'Comprehensive independent procedure for informal and formal resolution of academic or non-academic student grievances.',
    downloadUrl: 'https://yescollege.com.au/wp-content/uploads/2026/09/Student-Complaints-and-Appeals-Policy.pdf',
    format: 'PDF',
    fileSize: '410 KB',
    isImportant: true
  },
  {
    title: 'Tuition Fees and Refund Policy',
    category: 'Policies & Procedures',
    description: 'Transparent terms regarding student tuition fee schedules, cooling-off periods, visa refusal refunds, and provider default provisions.',
    downloadUrl: 'http://yescollege.com.au/wp-content/uploads/2020/08/FP-Refund-Policy-and-Procedures.pdf',
    format: 'PDF',
    fileSize: '320 KB',
    isImportant: true
  },
  {
    title: 'Monitoring Course Progress Policy & Procedures',
    category: 'Policies & Procedures',
    description: 'Standards for maintaining satisfactory academic progress and study intervention strategies in compliance with ESOS National Code.',
    downloadUrl: 'https://yescollege.com.au/wp-content/uploads/2024/06/Monitoring-Course-Progress-Policy-and-Procedures.pdf',
    format: 'PDF',
    fileSize: '290 KB'
  },
  {
    title: 'Privacy and Personal Information Policy',
    category: 'Policies & Procedures',
    description: 'Compliance guidelines protecting student records under the Australian Privacy Act 1988 and Australian Privacy Principles (APPs).',
    downloadUrl: 'https://yescollege.com.au/wp-content/uploads/2026/09/Privacy-Policy.pdf',
    format: 'PDF',
    fileSize: '250 KB'
  },
  {
    title: 'Health, Safety and Wellbeing Policy',
    category: 'Policies & Procedures',
    description: 'College protocols ensuring a safe, supportive, and harassment-free learning environment for all students and staff.',
    downloadUrl: 'https://yescollege.com.au/wp-content/uploads/2026/09/Health-and-Wellbeing-Policy.pdf',
    format: 'PDF',
    fileSize: '270 KB'
  },
  {
    title: 'VET Student Loans Information Booklet',
    category: 'VET Student Loans',
    description: 'Official Australian Government Department of Employment and Workplace Relations guide to VSL loans, eligibility, and repayment.',
    downloadUrl: 'https://yescollege.com.au/wp-content/uploads/2023/11/VSL-Information-Booklet-v7.0.pdf',
    format: 'PDF',
    fileSize: '950 KB',
    isImportant: true
  },
  {
    title: 'VSL Student Loan Information & Obligations Fact Sheet',
    category: 'VET Student Loans',
    description: 'Summary of student responsibilities, census dates, and loan fee caps for approved vocational courses.',
    downloadUrl: 'https://yescollege.com.au/wp-content/uploads/2026/10/VSLD-VET-Student-Loan-Information-and-Obligations-Fact-Sheet.pdf',
    format: 'PDF',
    fileSize: '380 KB'
  },
  {
    title: 'Statement of VSL Tuition Assurance',
    category: 'VET Student Loans',
    description: 'Tuition assurance protections guaranteeing course completion or fee refunds for enrolled students.',
    downloadUrl: 'https://yescollege.com.au/wp-content/uploads/2023/10/VSLP-VSL-Statement-of-tuition-assurance.pdf',
    format: 'PDF',
    fileSize: '190 KB'
  },
  {
    title: 'YES College 2026 - 2027 Academic Term Calendar',
    category: 'Academic Information',
    description: 'Full official schedule of 2026 and 2027 academic term start dates, mid-term breaks, end-of-year holidays, and census dates.',
    downloadUrl: 'https://yescollege.com.au/wp-content/uploads/2026/04/YES-College-2026-Academic-Calendar.png',
    format: 'PDF',
    fileSize: '745 KB',
    isImportant: true
  }
];

