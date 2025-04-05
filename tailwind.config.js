/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          morph: {
            '0%': { borderRadius: '40% 60% 60% 40% / 40% 40% 60% 60%' },
            '50%': { borderRadius: '60% 40% 40% 60% / 60% 60% 40% 40%' },
            '100%': { borderRadius: '40% 60% 60% 40% / 40% 40% 60% 60%' },
          },
        },
        animation: {
          morph: 'morph 5s ease-in-out infinite',
        },
      },
    },
    plugins: [],
  }
  