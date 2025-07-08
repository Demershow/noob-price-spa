/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bg: '#181A2A',
        card: '#23263A',
        primary: '#A843FF',
        'primary-hover': '#8E3BD9',
        accent: '#F9C851',
      },
    },
  },
  plugins: [],
};
