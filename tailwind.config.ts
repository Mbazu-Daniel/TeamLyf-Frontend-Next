import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        'cs-gray': {
          200: '#f0f5f8',
        },
        purple: {
          100: 'hsla(263, 100%, 90%, 1)', // Lightest shade
          200: 'hsla(263, 100%, 70%, 1)', // Light shade
          300: 'hsla(263, 100%, 43%, 1)', // Base color
          400: 'hsla(263, 100%, 30%, 1)', // Dark shade
          500: 'hsla(263, 100%, 20%, 1)', // Darkest shade
          600: 'hsla(263, 100%, 10%, 1)', // Very dark shade
        },
        gray: {
          100: 'hsla(0, 0%, 90%, 0.5)',
          200: 'hsla(0, 0%, 80%, 0.5)',
          300: 'hsla(0, 0%, 70%, 0.5)',
          400: 'hsla(0, 0%, 60%, 0.5)',
          500: 'hsla(0, 0%, 50%, 0.5)',
          600: 'hsla(0, 0%, 40%, 0.5)',
          700: 'hsla(0, 0%, 30%, 0.5)',
          800: 'hsla(0, 0%, 20%, 0.5)',
          900: 'hsla(0, 0%, 10%, 0.5)',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
