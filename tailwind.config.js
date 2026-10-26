/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        void: 'rgb(var(--bg-void) / <alpha-value>)',
        deep: 'rgb(var(--bg-deep) / <alpha-value>)',
        'text-primary': 'rgb(var(--text-primary) / <alpha-value>)',
        'text-muted': 'rgb(var(--text-muted) / <alpha-value>)',
        quantum: 'rgb(var(--accent-quantum) / <alpha-value>)',
        'tensor-blue': '#2F6BFF',
        'tensor-light': '#5C98FF',
        'tensor-dark': '#1D4ED8',
        subtle: 'rgb(var(--border-subtle) / <alpha-value>)',
        accent: {
          DEFAULT: '#2F6BFF',
          light: '#5C98FF',
          glow: 'rgba(47, 107, 255, 0.22)',
        },
        success: '#10b981',
        primary: {
          DEFAULT: '#2F6BFF',
          hover: '#3B7BFF',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      transitionTimingFunction: {
        'apple-spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'apple-bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      boxShadow: {
        'apple-glass': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.12), 0 16px 36px -8px rgba(0, 0, 0, 0.5)',
        'apple-card': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.10), 0 20px 40px -12px rgba(0, 0, 0, 0.6)',
        'quantum-glow': '0 0 35px -5px rgba(0, 229, 255, 0.25)',
      },
    },
  },
  plugins: [],
}
