import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)']
      }, 
      minWidth: {
        '1/4': '20%',
      }
    }
  },
  plugins: []
};

export default config;
