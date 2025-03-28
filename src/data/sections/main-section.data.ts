import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, linkedin, twitter } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/Komar_photo.jpg'),
  fullName: 'Muhammad Komar',
  role: 'Senior Web Developer',
  details: [
    // { label: 'Phone', value: '605 475 6961', url: 'tel:605 475 6961' },
    { label: 'Email', value: 'muh.komar@gmail.com', url: 'mailto:muh.komar@gmail.com' },
    { label: 'From', value: 'Bogor, Jawa Barat, Indonesia' },
    // { label: 'Salary range', value: '18 000 - 25 000 PLN' },
  ],
  pdfDetails: [
    // { label: 'Phone', value: '605 475 6961' },
    { label: 'Email', value: 'muh.komar@gmail.com' },
    // { label: 'LinkedIn', value: '/in/mark-freeman', url: 'https://linkedin.com' },
    { label: 'GitHub', value: '/mkom', url: 'https://github.com' },
    // { label: 'Website', value: 'mark-freeman-personal-website.com', url: '/', fullRow: true },
  ],
  description:
    'Highly skilled Web Developer with over 5 years of experience specializing in frontend development and WordPress. Expertise in building and maintaining mid to large-scale websites and web applications using modern technologies including PHP, HTML, SCSS/SASS, JQuery, Next.js, and CMS WordPress. Proficient in integrating third-party services like Airtable and other APIs to create seamless web solutions. Adept at delivering efficient, responsive, and user-friendly websites.',
  tags: [{ name: 'Open for freelance' }, { name: 'Available for mentoring' }, { name: 'Working on side project' }],
  action: {
    label: 'Download CV',
    url: '/cv_muhammad_komar.pdf',
    downloadedFileName: 'cv_muhammad_komar.pdf',
  },
  links: [github({ url: 'https://github.com/mkom' }),twitter({ url: 'https://x.com/muhkomar' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
