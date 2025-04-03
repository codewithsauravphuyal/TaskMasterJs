import('tailwindcss').Config;
module.exports = {
    content: [
      './src/**/*.{js,jsx}',
      './app/**/*.{js,jsx}',
    ],
    theme: {
      extend: {
        colors: {
          background: 'rgb(var(--background))',
          foreground: 'rgb(var(--foreground))',
        },
      },
    },
    plugins: [],
  }