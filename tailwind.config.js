/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        amber: {
          400: '#FFC107',
          500: '#FFA000',
          600: '#FF8F00',
          900: '#FF6F00',
        },
        green: {
          400: '#10B981',
          500: '#059669',
          600: '#047857',
          900: '#064E3B',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'glow': '0 0 50px -12px rgba(16, 185, 129, 0.25)',
      }
    },
  },
  plugins: [],
  safelist: [
    'bg-green-900/30',
    'text-green-500',
    'bg-amber-900/30',
    'text-amber-500',
    'from-green-500/20',
    'from-amber-500/20',
  ],
};