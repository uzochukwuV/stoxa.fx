/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'scale(0)', borderRadius: "50%" },
          '100%': { transform: 'scale(1)', borderRadius: "0" },
        },
        out:{
          '0%': {
            opacity: 1,
            
            },
          '100%': {
            opacity: 0,
            
            }  ,    

        },
    },
    animation: {
      wiggle: 'wiggle 1s ease-in-out forwards',
      out: "out 5s ease-in-out forwards",
    },
    
  },
},
  plugins: [],
}
