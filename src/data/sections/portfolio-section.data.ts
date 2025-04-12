import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, github, mockups, website } from '../helpers/links';
import {
  airtable,
  bootstrap,
  chakraUi,
  eslint,
  firebase,
  jest,
  jquery,
  nestJs,
  nextJs,
  nx,
  php,
  pnpm,
  postgreSql,
  prettier,
  react,
  sass,
  tailwindCss,
  typescript,
  wordpress,
  yarn,
} from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Projects',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'Elevate Washington',
      image: import('@/assets/portfolio/logo_elevate.png'),
      dates: [new Date('2019-07'), null],
      details: [
        { label: 'Team size', value: '5 people' },
        { label: 'My role', value: ['Front-end Developer', 'Maintenance', ] },
        { label: 'Category', value: ['Web app'] },
      ],
      // pdfDetails: [
      //   { label: 'Demo', value: 'https://golden-bulls-d73jd7.netlify.app', url: '#' },
      //   { label: 'Repository', value: 'https://github.com/mark-freeman/golden-bulls', url: '#' },
      // ],
      // screenshots: [
      //   { src: import('@/assets/portfolio/project-1-screenshot-1.jpg'), alt: 'First screenshot' },
      //   { src: import('@/assets/portfolio/project-1-screenshot-2.jpg'), alt: 'Second screenshot' },
      //   { src: import('@/assets/portfolio/project-1-screenshot-3.jpg'), alt: 'Third screenshot' },
      // ],
      description:
        'Developed a large-scale web platform using WordPress with custom functionalities, and Integrated RESTful APIs with backend services.',
      tagsList: {
        title: 'Technologies',
        tags: [wordpress(), sass(), yarn(), eslint(), bootstrap()],
      },
      links: [ website({ url: 'https://elevatewashington.org/' })],
    },
    {
      name: 'Idaho Launch',
      image: import('@/assets/portfolio/logo_idaho.png'),
      dates: [new Date('2023-09'), new Date('2024-12')],
      details: [
        { label: 'Team size', value: '7 people' },
        { label: 'My role', value: 'Maintenance and Bug Fixing' },
        { label: 'Category', value: ['Web app'] },
      ],
      // pdfDetails: [
      //   { label: 'Demo', value: 'https://disco-ninjas-g321ol.netlify.app', url: '#' },
      //   { label: 'Repository', value: 'https://github.com/mark-freeman/disco-ninjas', url: '#' },
      // ],
      description:
      'Maintenance and Integrated RESTful APIs with backend services and Airtable. Integrating real-time data updates and user-friendly interfaces.',
      tagsList: {
        title: 'Technologies',
        tags: [php(), jquery(), yarn(),airtable(),bootstrap()],
      },
      links: [website({ url: 'https://idaholaunch.com/' })],
    },
    {
      name: 'Next Steps Idaho',
      image: import('@/assets/portfolio/ns-logo.png'),
      dates: [new Date('2023-09'), new Date('2024-12')],
      details: [
        { label: 'Team size', value: '7 people' },
        { label: 'My role', value: 'Maintenance and Bug Fixing' },
        { label: 'Category', value: ['Web app'] },
      ],
      // pdfDetails: [
      //   { label: 'Demo', value: 'https://disco-ninjas-g321ol.netlify.app', url: '#' },
      //   { label: 'Repository', value: 'https://github.com/mark-freeman/disco-ninjas', url: '#' },
      // ],
      description:
      'Maintenance and Integrated RESTful APIs with backend services. Integrating real-time data updates and user-friendly interfaces.',
      tagsList: {
        title: 'Technologies',
        tags: [wordpress(),php(), jquery(), yarn(),bootstrap()],
      },
      links: [website({ url: 'https://nextsteps.idaho.gov/high-school-learning-plans' })],
    },
    {
      name: 'MRSC Rosters',
      image: import('@/assets/portfolio/logo_mrsc_.png'),
      dates: [new Date('2024-07'), new Date('2025-01')],
      details: [
        { label: 'Team size', value: '3 people' },
        { label: 'My role', value: ['Front-end Developer', 'Maintenance'] },
        { label: 'Category', value: ['Web app'] },
      ],
      // pdfDetails: [
      //   { label: 'Demo', value: 'https://software-chasers-e82l8e.netlify.app', url: '#' },
      //   { label: 'Repository', value: 'https://github.com/mark-freeman/software-chasers', url: '#' },
      // ],
      description:
        'Maintenance and Integrated RESTful APIs with backend services',
      tagsList: {
        title: 'Technologies',
        tags: [php(), jquery()],
      },
      links: [website({ url: 'https://mrscrosters.org/' })],
    },
    {
      name: 'Vedic',
      image: import('@/assets/portfolio/logo-vedic.png'),
      dates: [new Date('2024-12'), new Date('2025-01')],
      details: [
        { label: 'Team size', value: '3 people' },
        { label: 'My role', value: ['Front-end Developer', ] },
        { label: 'Category', value: ['Ecommerce'] },
      ],
      // pdfDetails: [
      //   { label: 'Demo', value: 'https://golden-bulls-d73jd7.netlify.app', url: '#' },
      //   { label: 'Repository', value: 'https://github.com/mark-freeman/golden-bulls', url: '#' },
      // ],
      // screenshots: [
      //   { src: import('@/assets/portfolio/project-1-screenshot-1.jpg'), alt: 'First screenshot' },
      //   { src: import('@/assets/portfolio/project-1-screenshot-2.jpg'), alt: 'Second screenshot' },
      //   { src: import('@/assets/portfolio/project-1-screenshot-3.jpg'), alt: 'Third screenshot' },
      // ],
      description:
        'Developed and rebuilding the website using Divi and WooCommerce.',
      tagsList: {
        title: 'Technologies',
        tags: [wordpress(), sass(), yarn(), eslint(), bootstrap()],
      },
      links: [ website({ url: 'https://vedic.id/' })],
    },
    {
      name: 'ArkoPay',
      image: import('@/assets/portfolio/logo_arkopay.png'),
      dates: [new Date('2023-11'), new Date('2024-11')],
      details: [
        { label: 'Team size', value: '3 people' },
        { label: 'My role', value: ['Front-end Developer', ' Maintenance'] },
        { label: 'Category', value: ['Web app'] },
      ],
      // pdfDetails: [
      //   { label: 'Demo', value: 'https://tru-quest-ck7ea3.netlify.app', url: '#' },
      //   { label: 'Repository', value: 'https://github.com/mark-freeman/tru-quest', url: '#' },
      // ],
      description:
        'Developed a large-scale web platform using WordPress with custom functionalities. Led the frontend development of a data-driven web app using Airtable, integrating real-time data updates and user-friendly interfaces.',
      tagsList: {
        title: 'Technologies',
        tags: [wordpress(), sass(), yarn(), bootstrap(), airtable()],
      },
      links: [ website({ url: 'https://arkopay.com/' })],
    },
    {
      name: 'Chin’an Gaming Hall ',
      image: import('@/assets/portfolio/logo-Chin_an.png'),
      dates: [new Date('2025-02'), new Date('2025-02')],
      details: [
        { label: 'Team size', value: '1 people' },
        { label: 'My role', value: ['Front-end Developer', 'Maintenance'] },
        { label: 'Category', value: ['Landing page'] },
      ],
      // pdfDetails: [
      //   { label: 'Demo', value: 'https://tru-quest-ck7ea3.netlify.app', url: '#' },
      //   { label: 'Repository', value: 'https://github.com/mark-freeman/tru-quest', url: '#' },
      // ],
      description:
        'Developed a large-scale web platform using Nextjs with custom functionalities. Led the frontend development of a data-driven web app using Airtable, integrating real-time data updates and user-friendly interfaces.',
      tagsList: {
        title: 'Technologies',
        tags: [nextJs(), tailwindCss(), airtable()],
      },
      links: [ website({ url: 'https://chinancasino.com/' })],
    },
    
   
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
