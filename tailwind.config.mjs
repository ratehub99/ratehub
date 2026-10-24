/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        geist: ['Geist', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'geist-mono': ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      colors: {
        // Tokens del sistema "técnico": valores en src/styles/ds.css (light y dark).
        bg: 'var(--bg)',
        'bg-2': 'var(--bg-2)',
        fg: 'var(--fg)',
        'fg-muted': 'var(--fg-muted)',
        'fg-subtle': 'var(--fg-subtle)',
        line: 'var(--border)',
        'line-strong': 'var(--border-strong)',
        state: {
          blue: 'var(--blue)',
          green: 'var(--green)',
          amber: 'var(--amber)',
          red: 'var(--red)',
          'blue-bg': 'var(--blue-bg)',
          'amber-bg': 'var(--amber-bg)',
        },
        brand: {
          50:  '#f0f4ff',
          100: '#e0eaff',
          200: '#c7d7fe',
          300: '#a5b8fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
