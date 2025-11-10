/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(214.3 31.8% 91.4%)',
        calculator: {
          display: '#1a1a1a',
          body: '#f5f5f5',
          button: '#e0e0e0',
          buttonHover: '#d0d0d0',
          operation: '#3b82f6',
          operationHover: '#2563eb',
          equals: '#10b981',
          equalsHover: '#059669',
          clear: '#ef4444',
          clearHover: '#dc2626',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}