import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // Light theme primary colors
                'brown-derby': {
                    DEFAULT: '#4E3629',
                    50: '#F5F0ED',
                    100: '#E8DED8',
                    200: '#D1BDB1',
                    300: '#BA9C8A',
                    400: '#A37B63',
                    500: '#4E3629',
                    600: '#3E2B21',
                    700: '#2E2018',
                    800: '#1F1510',
                    900: '#0F0B08',
                },
                'maroon-oak': {
                    DEFAULT: '#5C3D30',
                    50: '#F7F2EF',
                    100: '#EBE0DA',
                    200: '#D7C1B5',
                    300: '#C3A290',
                    400: '#AF836B',
                    500: '#5C3D30',
                    600: '#4A3126',
                    700: '#37251D',
                    800: '#251913',
                    900: '#120C0A',
                },
                'seal-brown': {
                    DEFAULT: '#321414',
                    50: '#F2E8E8',
                    100: '#E5D1D1',
                    200: '#CBA3A3',
                    300: '#B17575',
                    400: '#974747',
                    500: '#321414',
                    600: '#281010',
                    700: '#1E0C0C',
                    800: '#140808',
                    900: '#0A0404',
                },
                // Accent colors for dark theme
                'cream': {
                    DEFAULT: '#F5F0ED',
                    50: '#FFFFFF',
                    100: '#FDFCFB',
                    200: '#F5F0ED',
                    300: '#E8DED8',
                    400: '#D1BDB1',
                    500: '#BA9C8A',
                },
            },
            fontFamily: {
                serif: ['Playfair Display', 'Georgia', 'serif'],
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
                'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
                'slide-in-right': 'slideInRight 0.5s ease-out forwards',
                'scale-in': 'scaleIn 0.3s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-20px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(20px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-subtle': 'linear-gradient(135deg, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
} satisfies Config;
