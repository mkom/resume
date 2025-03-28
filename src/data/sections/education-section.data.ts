import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Information Technology',
      institution: 'Muhammadiyah University of Purwokerto',
      image: import('@/assets/logos/logo_ump.png'),
      dates: [new Date('2007.09'), new Date('2012.10')],
      description: 'Bachelor degree. Specialization in software development.',
      links: [website({ url: 'https://ump.ac.id/' })],
    },
   
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
