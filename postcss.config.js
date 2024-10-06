import purgecss from '@fullhuman/postcss-purgecss';

export const plugins = [
  'postcss-flexbugs-fixes',
  'postcss-preset-env',
  [
    'tailwindcss',
    'autoprefixer',
  ],
  purgecss({
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    safelist: ['html', 'body'], // Añade clases que no deben ser eliminadas
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  }),
];
