import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'lifeful-green': '#A4C639',
        'lifeful-magenta': '#B01B8F',
        'lifeful-dark': '#000000',
        'lifeful-gray': '#999999',
      },
    },
  },
  plugins: [],
}

export default config
