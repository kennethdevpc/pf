import type { Config } from 'tailwindcss';
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        secondary: '#f5741c',
        darkBG: '#131424',
        bermuda: '#4d7c0f',
        tertiary: '#862DE3',
        quaternary: '#E030D2',

        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      backgroundImage: {
        'gradient-cover': 'linear-gradient(90.21deg, #f0fc1480 -5.91%, rgba(74,47,189,0.5)111.58%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
