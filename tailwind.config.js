/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'transparent': 'transparent',
      'neutral': '#fff',
      'contrast': '#000',
      'contrast-variant': '#00000089',

    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    fontSize: {
      'xs': ['0.75rem', '1'], 
      'sm': ['0.875rem', '1.25'],
      'md': ['1rem', '1.5'], 
      'lg': ['1.2rem', '1.75'],
      'xl': ['1.25rem', '2'],
      '2xl': ['1.5rem', '2.25'],
      '3xl': ['2rem', '1.5'],
      '4xl': ['2.25rem', '1'],
      '5xl': ['3rem', '2'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
        'side': '8rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}
