import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /* Blue & White Classic Professional Palette */
        'background': '#ffffff',
        'on-background': '#0d1b2a',
        'surface': '#f4f7fb',
        'on-surface': '#0d1b2a',
        'surface-variant': '#e8eef6',
        'on-surface-variant': 'rgba(13,27,42,0.65)',
        'surface-dim': '#edf2f8',
        'surface-bright': '#ffffff',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f4f7fb',
        'surface-container': '#e8eef6',
        'surface-base': '#f4f7fb',
        'surface-container-high': '#dde6f2',
        'surface-container-highest': '#c8d8eb',

        'primary': '#1a3a6b',
        'on-primary': '#ffffff',
        'primary-container': '#dde6f2',
        'on-primary-container': '#0d1b2a',
        'primary-fixed': '#1a3a6b',
        'primary-fixed-dim': '#14306b',
        'on-primary-fixed': '#ffffff',
        'on-primary-fixed-variant': '#dde6f2',
        'inverse-primary': '#dde6f2',

        'secondary': '#1a5fb4',
        'on-secondary': '#ffffff',
        'secondary-container': '#dde9fa',
        'on-secondary-container': '#0d1b2a',
        'secondary-fixed': '#1a5fb4',
        'secondary-fixed-dim': '#1450a0',
        'on-secondary-fixed': '#ffffff',
        'on-secondary-fixed-variant': '#dde9fa',

        'tertiary': '#0d47a1',
        'on-tertiary': '#ffffff',
        'tertiary-container': '#e3ecff',
        'on-tertiary-container': '#0d1b2a',
        'tertiary-fixed': '#e3ecff',
        'tertiary-fixed-dim': '#b3ccf5',
        'on-tertiary-fixed': '#0d1b2a',
        'on-tertiary-fixed-variant': '#1a3a6b',
        'tertiary-plum': '#b3ccf5',

        'error': '#c0392b',
        'on-error': '#ffffff',
        'error-container': '#fdecea',
        'on-error-container': '#c0392b',

        'outline': '#b0c4de',
        'outline-variant': '#dde6f2',

        'inverse-surface': '#0d1b2a',
        'inverse-on-surface': '#f4f7fb',

        'neutral-champagne': '#f0f4f8',
        'surface-tint': '#1a5fb4',
      },
      borderRadius: {
        DEFAULT: '0px',
        lg: '0px',
        xl: '0px',
        full: '9999px',
        sm: '0px',
        md: '0px',
        none: '0px',
      },
      spacing: {
        'stack-sm': '8px',
        'overlap-offset': '-48px',
        'stack-md': '16px',
        'margin-mobile': '24px',
        'gutter': '32px',
        'section-padding': '120px',
        'stack-lg': '48px',
        'container-max': '1200px',
        'margin-desktop': '64px',
      },
      fontFamily: {
        'body-lg': ['"Source Serif 4"', 'Georgia', 'serif'],
        'headline-xl': ['Bodoni Moda', 'Georgia', 'serif'],
        'body-md': ['"Source Serif 4"', 'Georgia', 'serif'],
        'headline-md': ['Bodoni Moda', 'Georgia', 'serif'],
        'headline-lg': ['Bodoni Moda', 'Georgia', 'serif'],
        'headline-md-mobile': ['Bodoni Moda', 'Georgia', 'serif'],
        'label-md': ['Metrophobic', 'sans-serif'],
      },
      fontSize: {
        'body-lg': ['20px', { lineHeight: '32px', fontWeight: '400' }],
        'headline-xl': ['110px', { lineHeight: '95px', letterSpacing: '-0.04em', fontWeight: '200' }],
        'body-md': ['16px', { lineHeight: '26px', fontWeight: '300' }],
        'headline-md': ['36px', { lineHeight: '44px', fontWeight: '300' }],
        'headline-lg': ['56px', { lineHeight: '60px', letterSpacing: '-0.01em', fontWeight: '300' }],
        'headline-md-mobile': ['32px', { lineHeight: '40px', fontWeight: '300' }],
        'label-md': ['11px', { lineHeight: '18px', letterSpacing: '0.25em', fontWeight: '400' }],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
}

export default config
