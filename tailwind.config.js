/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#651FFF',
                'primary-dark': '#5218D0',
                gray: '#DBE2E6',
                'gray-dark': '#312C3A',
                'gray-light': '#F1F5F7',
                'background-gray': '#F8F8F8',
                red: '#FB4E4E',
                'red-light': '#FFBFBF',
                green: '#2BC945',
            },
            keyframes: {
                'scale-in': {
                    '0%': {opacity: 0, transform: 'scale(0)'},
                    '100%': {opacity: 1, transform: 'scale(1)'},
                },
                'slide-down': {
                    '0%': {opacity: 0, transform: 'translateY(-10px)'},
                    '100%': {opacity: 1, transform: 'translateY(0)'},
                },
                'slide-up': {
                    '0%': {opacity: 0, transform: 'translateY(10px)'},
                    '100%': {opacity: 1, transform: 'translateY(0)'},
                },
            },
            animation: {
                'scale-in': 'scale-in 0.2s ease-in-out',
                'slide-down': 'slide-down 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                'slide-up': 'slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            },
        },
    },
    plugins: [require('tailwindcss-radix')(), require("tailwindcss-animate")],
};
