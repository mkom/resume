import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  apolloGraphql,
  astro,
  chakraUi,
  cypress,
  eslint,
  firebase,
  mongoDb,
  nestJs,
  pnpm,
  postgreSql,
  prettier,
  react,
  sass,
  supabase,
  tailwindCss,
  typescript,
  wordpress,
  bootstrap,
  nextJs,
  yarn,
  airtable,
  jquery
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'I already know',
      skills: [
        wordpress({
          level: 5,
          // description:
          //   'Proin ut erat sed massa tempus suscipit. Mauris efficitur nunc sem, nec scelerisque ligula bibendum ut.',
        }),
        nextJs({
          level: 4,
          // description:
          //   'Praesent feugiat ultricies iaculis. In posuere vehicula odio, sed consequat velit porta viverra.',
        }),
        jquery({
          level: 4,
          // description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        }),
        sass({
          level: 5,
          // description: 'Nulla interdum pellentesque ultricies. Ut id eros commodo, ultrices ligula eu, elementum ante.',
        }),
        bootstrap({ level: 5 }),
        tailwindCss({ level: 5 }),
        // prettier({ level: 5 }),
        eslint({
          level: 4,
          // description:
          //   'Nulla tempor turpis at vehicula pharetra. Vestibulum tellus tortor, commodo et suscipit id, lobortis id nunc.',
        }),
      
        yarn({
          level: 4,
          // description:
          //   'Praesent feugiat ultricies iaculis. In posuere vehicula odio, sed consequat velit porta viverra.',
        }),
        airtable({ level: 4 }),
        postgreSql({ level: 2 }),
        mongoDb({ level: 1 }),
        // firebase({ level: 1 }),
        // pnpm({ level: 3 }),
      ],
    },
    // {
    //   title: 'I want to learn',
    //   skills: [apolloGraphql(), astro(), supabase(), cypress()],
    // },
    // {
    //   title: 'I speak',
    //   skills: [
    //     { icon: 'circle-flags:pl', name: 'Polish - native' },
    //     { icon: 'circle-flags:us', name: 'English - C1' },
    //     { icon: 'circle-flags:es-variant', name: 'Spanish - B1' },
    //   ],
    // },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
