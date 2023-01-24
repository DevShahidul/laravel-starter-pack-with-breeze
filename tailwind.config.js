const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        colors: {
            'primary': {
                DEFAULT: '#5329FF',
                30: 'rgba(16, 9, 55, 0.3)',
                60: 'rgba(16, 9, 55, 0.6)'
            },
            'secondary': {
                DEFAULT: '#5329FF',
            },
            'green': {
                DEFAULT: '#61C877'
            },
            'red': {
                DEFAULT: '#FF6056'
            },
            'yellow': {
                DEFAULT: '#FFCE93'
            },
            'gray': {
                DEFAULT: '#D6D6D6',
                50: '#EFEFEF',
                100: '#F6F6F6',
                200: '#F9F9F9',
            }
        },
        extend: {
            fontFamily: {
                sans: ['Helvetica Neue', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                'xxl': '1.375rem',
            }
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
