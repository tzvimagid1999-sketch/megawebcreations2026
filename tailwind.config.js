/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Core backgrounds - Professional dark gray
        background: '#0f1419',
        'bg-light': '#1a2332',
        'bg-elevated': '#232f3e',

        // Primary accent - Professional blue (not cyan)
        accent: '#2563eb',
        'accent-dark': '#1e40af',
        'accent-light': '#3b82f6',

        // Secondary accent - Slate (not purple)
        purple: '#475569',
        'purple-dark': '#334155',
        'purple-light': '#64748b',

        // Semantic colors
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#2563eb',

        // Text colors
        'text-primary': '#f1f5f9',
        'text-secondary': '#cbd5e1',
        'text-tertiary': '#94a3b8',
        'text-inverse': '#0f1419',
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

        // Subtle accent shadows (not glows)
        'glow-sm': '0 4px 12px rgba(37, 99, 235, 0.1)',
        'glow-md': '0 8px 24px rgba(37, 99, 235, 0.12)',
        'glow-lg': '0 12px 32px rgba(37, 99, 235, 0.15)',
        'glow-purple': '0 4px 12px rgba(71, 85, 105, 0.1)',

        // Focus states
        focus: '0 0 0 2px #0f1419, 0 0 0 4px #2563eb',
      },

      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
        'gradient-subtle': 'linear-gradient(135deg, rgba(37, 99, 235, 0.03), rgba(30, 64, 175, 0.03))',
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
        fade: 'fade 400ms ease-out forwards',
        'slide-up': 'slideUp 400ms ease-out forwards',
        'slide-down': 'slideDown 400ms ease-out forwards',
        'slide-right': 'slideRight 400ms ease-out forwards',
        scale: 'scaleIn 400ms ease-out forwards',
        'scale-hover': 'scaleHover 300ms ease-out forwards',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        glow: 'glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 1s',
        'bounce-subtle': 'bounceSubtle 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },

      keyframes: {
        fade: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideDown: {
          from: {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideRight: {
          from: {
            opacity: '0',
            transform: 'translateX(-20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        scaleIn: {
          from: {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        scaleHover: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
          '100%': { transform: 'scale(1)' },
        },
        glow: {
          '0%, 100%': {
            boxShadow: '0 8px 20px rgba(37, 99, 235, 0.1)',
          },
          '50%': {
            boxShadow: '0 12px 28px rgba(37, 99, 235, 0.15)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-2px)' },
          '75%': { transform: 'translateY(2px)' },
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
