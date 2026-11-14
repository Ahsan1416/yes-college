import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PitchBanner from '@/components/PitchBanner';
import { COLLEGE_INFO } from '@/data/collegeInfo';

export const viewport: Viewport = {
  themeColor: '#0a1d37',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://yescollege.com.au'),
  title: {
    default: 'YES College | Australian Registered Training Organisation (RTO 0249 | CRICOS 03282E)',
    template: '%s | YES College Australia'
  },
  description:
    'Leading Australian Registered Training Organisation (RTO Code: 0249, CRICOS: 03282E) in Parramatta Sydney & Perth. Nationally accredited courses in Community Services, Automotive Mechanic, Beauty Therapy, Civil Construction Design, and Business & Leadership.',
  keywords: [
    'YES College',
    'RTO 0249',
    'CRICOS 03282E',
    'MVJ Enterprises',
    'Perth College of Beauty Therapy',
    'Vocational Education Australia',
    'Parramatta College Sydney',
    'Subclass 500 Student Visa',
    'Diploma of Community Services Sydney',
    'Certificate III Automotive Mechanic',
    'Diploma of Beauty Therapy Perth',
    'Civil Construction Design Advanced Diploma',
    'Leadership and Management Diploma',
    'VET Student Loans Australia'
  ],
  authors: [{ name: 'YES College Admissions Team' }],
  creator: 'YES College',
  publisher: 'MVJ Enterprises Pty Ltd',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://yescollege.com.au/',
    siteName: 'YES College Australia',
    title: 'YES College | Australian RTO 0249 & CRICOS 03282E',
    description:
      'Yes to your bright future in Australia. 30+ years of vocational excellence in Sydney & Perth. Discover 12 nationally recognized qualifications.',
    images: [
      {
        url: '/images/hero-banner.png',
        width: 1200,
        height: 630,
        alt: 'YES College Australia - Vocational Education Campuses in Sydney & Perth',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YES College | Australian RTO 0249 & CRICOS 03282E',
    description: 'Premier Vocational Education in Sydney Parramatta & Perth. Nationally recognised qualifications.',
    images: ['/images/hero-banner.png'],
  },
  alternates: {
    canonical: 'https://yescollege.com.au/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: COLLEGE_INFO.shortName,
    legalName: COLLEGE_INFO.legalName,
    url: 'https://yescollege.com.au/',
    logo: 'https://yescollege.com.au/wp-content/uploads/2017/09/YES-DSN-AU-0417_logo_high-resolution-files_1d_09-06-2017_RGB-1024x549.png',
    description: COLLEGE_INFO.motto,
    telephone: COLLEGE_INFO.phone,
    email: COLLEGE_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '43-45 Marion Street',
      addressLocality: 'Parramatta',
      addressRegion: 'NSW',
      postalCode: '2150',
      addressCountry: 'AU'
    },
    identifier: [
      {
        '@type': 'PropertyValue',
        propertyID: 'RTO Code',
        value: COLLEGE_INFO.rtoCode
      },
      {
        '@type': 'PropertyValue',
        propertyID: 'CRICOS Provider Code',
        value: COLLEGE_INFO.cricosCode
      }
    ],
    sameAs: [
      COLLEGE_INFO.socialLinks.facebook,
      COLLEGE_INFO.socialLinks.instagram,
      COLLEGE_INFO.socialLinks.linkedin
    ]
  };

  return (
    <html lang="en-AU" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/images/logo.png" />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased font-sans">
        <PitchBanner />
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

