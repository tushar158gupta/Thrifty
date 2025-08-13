    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        // Add other directories if needed, e.g., './app/**/*.{js,ts,jsx,tsx,mdx}' for App Router
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }