import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, instagram, linkedin, twitter, website } from '../helpers/links';
import {
  airtable,
  chakraUi,
  eslint,
  firebase,
  jquery,
  nextJs,
  nx,
  php,
  pnpm,
  react,
  reactQuery,
  sass,
  tailwindCss,
  typescript,
  vue,
  wordpress,
  yarn,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Senior Web developer',
      company: 'Kreatif Infotek Global (www.bitsof.id)',
      image: import('@/assets/logos/pt_kreatif_infotek_global_logo.jpeg'),
      dates: [new Date('2013-07'), null],
      description: `
        - Develop and maintain custom WordPress themes and plugins for clients across diverse industries.
        - Built responsive, cross-browser compatible websites using HTML, SCSS, and JQuery for various clients.
        - Implement third-party integrations with services like Airtable and CRM platforms, enhancing functionality and automation.
        - Optimize websites for performance, SEO, and mobile responsiveness, resulting in improved user engagement and faster load times.
        - Integrated RESTful APIs with backend services, improving web app interactivity and functionality.
        - Collaborate closely with design and backend teams to ensure smooth project execution.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [wordpress(), php(), jquery(), sass(), yarn(), airtable()],
      },
      links: [website({ url: 'https://www.bitsof.id/' }), linkedin({ url: 'https://id.linkedin.com/company/bitsof' })],
    },
    // {
    //   role: 'React.js developer',
    //   company: 'Facebook',
    //   image: import('@/assets/logos/facebook-logo.png'),
    //   dates: [new Date('2019-04'), new Date('2020-02')],
    //   description: `
    //     - Aenean eget ultricies felis. Pellentesque dictum massa ut tellus eleifend, sed posuere massa mattis.
    //     - Ut posuere massa lacus, eleifend molestie tortor auctor vel.
    //     - Sed sed sollicitudin eros, id ultricies mi. Aliquam sodales elit vel ante tempor, non vehicula nibh facilisis.
    //     - Cras feugiat ultricies maximus. Aliquam tristique ex odio, ac semper urna accumsan a.
    //   `,
    //   tagsList: {
    //     title: 'Technologies',
    //     tags: [react(), reactQuery(), chakraUi(), eslint()],
    //   },
    //   links: [website({ url: '#' }), instagram({ url: '#' })],
    // },
    // {
    //   role: 'Junior front-end developer',
    //   company: 'GitLab',
    //   image: import('@/assets/logos/gitlab-logo.png'),
    //   dates: [new Date('2016-09'), new Date('2019-04')],
    //   description: `
    //     Nulla volutpat justo ante, rhoncus posuere massa egestas in:

    //     - Quisque pellentesque, dolor nec sollicitudin iaculis, sem velit consequat ligula, eget tempus ligula leo et est.
    //     - Maecenas ut elit sit amet nibh maximus condimentum in nec lorem. Pellentesque tincidunt odio vel leo suscipit, in interdum mi gravida.

    //     Donec non vulputate augue 🤓
    //   `,
    //   tagsList: {
    //     title: 'Technologies',
    //     tags: [vue(), tailwindCss(), pnpm()],
    //   },
    //   links: [twitter({ url: '#' }), github({ url: '#' })],
    // },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
