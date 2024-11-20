/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'brand': ['tiejili-regular', 'sans-serif'],
        'pixel-zh': ['fusion-pixel-zh', 'sans-serif'],
        'smileysans': ['smileysans', 'sans-serif'],
      },
      animation: {
        'star': 'pulse 0.5s cubic-bezier(0.6, 0.2, 0.4, 1) 2',
      },
      colors: {
        'green-brand': '#5c7f71',
        'red-brand': '#802520',
        'yellow-brand': '#ba8530',
        'black-brand': '#181818',
        'white-brand': '#f5eddc',
        'orange-brand': '#b2653b',
      },
    },
  },
  plugins: [],
}