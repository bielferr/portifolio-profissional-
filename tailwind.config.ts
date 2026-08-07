import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#0F172A',
        ink: '#111827',
        text: '#F8FAFC',
        secondary: '#94A3B8',
        accent: '#2563EB',
        accent2: '#38BDF8'
      }
    }
  },
  plugins: []
}

export default config
