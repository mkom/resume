import type { Config } from '@/types/data';
import { id } from 'date-fns/locale';
import type { ReadonlyDeep } from 'type-fest';

const config = {
  i18n: {
    locale: id,
    dateFormat: 'MMMM yyyy',
    translations: {
      now: 'now',
    },
  },
  meta: {
    title: 'Muhammad Komar - Senior Web Developer',
    description:
      'Highly skilled Web Developer with over 5 years of experience specializing in frontend development and WordPress',
    faviconPath: '/src/assets/Komar_photo.jpg',
  },
  pdf: {
    footer:
      'I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process.',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;
