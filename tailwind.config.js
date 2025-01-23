/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './App.{js,jsx,ts,tsx}',
        './app/**/*.{js,jsx,ts,tsx}',
        './src/**/*.{js,jsx,ts,tsx}', // src klasörünü ekledik
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};