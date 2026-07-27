/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Core backgrounds
        background: '#0a0e27',
        'bg-light': '#1a1f3a',
        'bg-elevated': '#242d47',

        // Primary accent (Cyan)
        accent: '#00d9ff',
        'accent-dark': '#0099cc',
        'accent-light': '#66e6ff',

        // Secondary accent (Purple)
        purple: '#7c3aed',
        'purple-dark': '#6d28d9',
        'purple-light': '#c4b5fd',

        // Semantic colors
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',

        // Text colors
        'text-primary': '#e5e7eb',
        'text-secondary': '#9ca3af',
        'text-tertiary': '#6b7280',
        'text-inverse': '#0a0e27',
      },

      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['Monaco', 'Courier New', 'monospace'],
      },

      fontSize: {
        xs: ['12px', { lineHeight: '1.5' }],
        sm: ['14px', { lineHeight: '1.6' }],
        base: ['16px', { lineHeight: '1.6' }],
        lg: ['18px', { lineHeight: '1.75' }],
        xl: ['20px', { lineHeight: '1.8' }],
        '2xl': ['24px', { lineHeight: '1.9' }],
        '3xl': ['32px', { lineHeight: '1.9' }],
        '4xl': ['40px', { lineHeight: '1.8' }],
        '5xl': ['48px', { lineHeight: '1.8' }],
      },

      spacing: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px',
        '3xl': '48px',
        '4xl': '64px',
        '5xl': '80px',
      },

      padding: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px',
        '3xl': '48px',
      },

      margin: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px',
        '3xl': '48px',
        '4xl': '64px',
        '5xl': '80px',
      },

      gap: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px',
      },

      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
        full: '9999px',
      },

      boxShadow: {
        // Standard shadows
        sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px rgba(0, 0, 0, 0.15)',
        xl: '0 20px 25px rgba(0, 0, 0, 0.2)',
        '2xl': '0 25px 50px rgba(0, 0, 0, 0.25)',

        // Accent glow effects
        'glow-sm': '0 0 8px rgba(0, 217, 255, 0.3)',
        'glow-md': '0 0 20px rgba(0, 217, 255, 0.3)',
        'glow-lg': '0 0 40px rgba(0, 217, 255, 0.4)',
        'glow-purple': '0 0 20px rgba(124, 58, 237, 0.2)',

        // Focus states
        focus: '0 0 0 2px #0a0e27, 0 0 0 4px #00d9ff',
      },

      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #00d9ff 0%, #7c3aed 100%)',
        'gradient-subtle': 'linear-gradient(135deg, rgba(0, 217, 255, 0.05), rgba(124, 58, 237, 0.05))',
      },

      borderColor: {
        accent: '#00d9ff',
        'accent-dark': '#0099cc',
        'accent-light': '#66e6ff',
      },

      transitionDuration: {
        instant: '75ms',
        fast: '150ms',
        base: '200ms',
        slow: '300ms',
        slower: '500ms',
      },

      transitionTimingFunction: {
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },

      animation: {
        fade: 'fade 200ms ease-out',
        'slide-up': 'slideUp 200ms ease-out',
        'slide-down': 'slideDown 200ms ease-out',
        scale: 'scale 200ms ease-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        glow: 'glow 2s ease-in-out infinite',
      },

      keyframes: {
        fade: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideDown: {
          from: {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        scale: {
          from: {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(0, 217, 255, 0.5)',
          },
        },
      },

      screens: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
