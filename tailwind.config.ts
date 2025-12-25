import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors (from VeriPip iOS app)
        brand: {
          'deep-blue': 'rgb(30, 58, 95)',
          'teal': 'rgb(45, 156, 219)',
          'lime': 'rgb(111, 207, 151)',
          'navy': 'rgb(42, 75, 124)',
        },
        // Accent Colors
        accent: {
          DEFAULT: 'rgb(0, 255, 255)',
          cyan: 'rgb(0, 255, 255)',
          teal: 'rgb(45, 156, 219)',
        },
        // Semantic Colors
        success: 'rgb(111, 207, 151)',
        error: 'rgb(235, 87, 87)',
        warning: 'rgb(242, 201, 76)',
        // Background Colors
        surface: {
          dark: 'rgb(10, 10, 10)',
          card: 'rgb(25, 25, 25)',
          elevated: 'rgb(30, 30, 30)',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 255, 255, 0.6)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(60px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'brand-gradient': 'linear-gradient(135deg, rgb(30, 58, 95), rgb(45, 156, 219), rgb(111, 207, 151))',
        'hero-gradient': 'radial-gradient(ellipse at top, rgba(45, 156, 219, 0.15) 0%, transparent 50%)',
      },
    },
  },
  plugins: [],
}

export default config

