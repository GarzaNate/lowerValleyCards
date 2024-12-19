/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Custom Theme Colors
        primary: {
          light: '#009FE3', // Bright Blue
          dark: '#0077B6',  // Slightly darker blue for dark mode
        },
        secondary: {
          light: '#2C8C4A', // Green for light mode
          dark: '#1E6C34',  // Darker green for dark mode
        },
        accent: {
          red: '#E63946',
          yellow: '#F2B705',
        },
        neutral: {
          light: '#F3F4F6', // Light gray
          dark: '#1E293B',  // Dark gray for backgrounds
          white: '#FFFFFF',
          black: '#000000',
        },
      },
    },
  },
  plugins: [],
}

