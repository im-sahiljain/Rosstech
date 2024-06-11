/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'neutralSilver' : '#F5F7FA',
        'neutralDGrey' : '#4D4D4D',
        'brandPrimary' : '#8972EC',
        'neutralGrey' : '#717171',
        'gray900' : '#717171',
        'green' : '#A7DA7C',
        'Revbox' : '#DCB0FE66',
        'links' : '#949494',
        'green-100': '#E8F5E9',  
        'pink-100': '#FCE4EC',

      }
    },
  },
}

