// Color Hook for easy color access throughout the app
import { colors } from '../styles/colors'

export const useColors = () => {
  return {
    // Primary brand colors
    primary: colors.primary.main,
    primaryLight: colors.primary.light,
    primaryDark: colors.primary.dark,
    
  // Secondary (slate) accent
  secondary: colors.secondary.main,
  secondaryLight: colors.secondary.light,
  secondaryDark: colors.secondary.dark,
    
    // Common combinations for consistency
  gradientPrimary: `linear-gradient(135deg, ${colors.primary.main} 0%, ${colors.primary.dark} 100%)`,
  gradientSecondary: `linear-gradient(135deg, ${colors.secondary.main} 0%, ${colors.secondary.dark} 100%)`,
  gradientMixed: `linear-gradient(135deg, ${colors.primary.main} 0%, ${colors.secondary.main} 100%)`,
    
    // Utility functions
  getPrimaryShade: (shade) => colors.primary[shade] || colors.primary.main,
  getSecondaryShade: (shade) => colors.secondary[shade] || colors.secondary.main,
  }
}

// CSS-in-JS style objects for common patterns
export const colorStyles = {
  button: {
    primary: {
      backgroundColor: colors.primary.main,
      color: colors.neutral.white,
      border: `2px solid ${colors.primary.main}`,
      '&:hover': {
        backgroundColor: colors.primary.dark,
        borderColor: colors.primary.dark,
      }
    },
    secondary: {
      backgroundColor: 'transparent',
      color: colors.secondary.main,
      border: `2px solid ${colors.secondary.main}`,
      '&:hover': {
        backgroundColor: colors.secondary.main,
        color: colors.neutral.white,
      }
    }
  },
  
  icon: {
    primary: {
      background: `linear-gradient(135deg, ${colors.primary.main} 0%, ${colors.secondary.main} 100%)`,
      color: colors.neutral.white,
    }
  },
  
  accent: {
    line: {
      background: `linear-gradient(90deg, ${colors.primary.main} 0%, ${colors.secondary.main} 100%)`,
      height: '4px',
      borderRadius: '2px',
    }
  }
}

export default useColors
