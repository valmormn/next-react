const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // media or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '640px',
      lg: '900px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      typography: {}
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme('fontSize.5xl') },
        h2: { fontSize: theme('fontSize.4xl') },
        h3: { fontSize: theme('fontSize.3xl') },
        h4: { fontSize: theme('fontSize.2xl') }
      })
    }),
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
    themes: [
      'dark',
      'emerald',
      'forest',
      {
        mytheme: {
          primary: '#22c55e',
          secondary: '#22d3ee',
          accent: '#fcd34d',
          neutral: '#047857',
          'base-100': '#f3f4f6',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#f43f5e'
        }
      }
    ]
  }
}
