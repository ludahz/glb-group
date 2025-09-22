// Global Color Configuration for GL-B Group
// This file centralizes all color definitions for easy management

const colors = {
  // Primary brand colors - modern professional blue
  primary: {
    main: '#1e40af', // Indigo/blue for brand
    light: '#3b82f6',
    dark: '#1d4ed8',
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },

  // Secondary/accent colors - neutral slate
  secondary: {
    main: '#475569',
    light: '#64748b',
    dark: '#334155',
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },

  // Neutral colors for backgrounds and text
  neutral: {
    white: '#ffffff',
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
    dark: '#0f172a', // For dark sections
  },

  // Semantic colors - minimal usage
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
}

// Tailwind color extensions
const tailwindColors = {
  'primary': colors.primary,
  'secondary': colors.secondary,
  'gray': colors.neutral.gray,
}

module.exports = {
  colors,
  tailwindColors
}
