/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 기본 색상 팔레트
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#007AFF', // 포인트 블루
          600: '#0054CC',
          700: '#0040A0',
          800: '#002D73',
          900: '#001E4D',
        },
        mint: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#00C896', // 포인트 민트
          600: '#00A076',
          700: '#00785A',
          800: '#005140',
          900: '#003428',
        },
        gray: {
          50: '#FAFAFA',
          100: '#F8F8F8',
          200: '#E8E8E8',
          300: '#D0D0D0',
          400: '#A8A8A8',
          500: '#808080',
          600: '#606060',
          700: '#404040',
          800: '#333333',
          900: '#1A1A1A',
        },
        // 시멘틱 컬러
        background: {
          DEFAULT: '#FFFFFF',
          light: '#F8F8F8',
          dark: '#1A1A1A',
        },
        text: {
          primary: '#1A1A1A',
          secondary: '#333333',
          muted: '#808080',
          light: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Noto Sans', 'Pretendard', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-in': 'slideIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}; 