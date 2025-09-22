# GL-B Group Color System Documentation

## 🎨 Centralized Color Management

This project now uses a centralized color system to make color changes easy and consistent across the entire website.

## 📁 File Structure

```
src/
├── styles/
│   ├── colors.js          # Main color configuration
│   └── globals.css        # Global styles with CSS variables
└── hooks/
    └── useColors.js       # React hook for accessing colors
```

## 🔧 How to Change Colors Globally

### 1. Main Color Configuration (`src/styles/colors.js`)

This is the **single source of truth** for all colors. To change the entire website's color scheme:

```javascript
const colors = {
  primary: {
    main: '#1e40af',    // Change this to update all primary colors
    // ...
  },
  secondary: {
    main: '#475569',    // Change this to update all secondary accents
    // ...
  }
}
```

### 2. CSS Classes in `globals.css`

Pre-built classes for common elements:

- `.btn-primary` - Primary buttons
- `.btn-secondary` - Secondary slate buttons  
- `.accent-line` - Decorative lines
- `.icon-primary` - Small icons (16px)
- `.icon-large` - Large icons (20px)
- `.text-gradient` - Gradient text

### 3. Usage Examples

#### Using CSS Classes (Recommended)
```jsx
// Instead of custom styling:
<div className="w-20 h-20 bg-primary-600 rounded-full">

// Use predefined class:
<div className="icon-large">
```

#### Using CSS Variables
```css
.custom-element {
  background-color: var(--color-primary);
  border-color: var(--color-gold);
}
```

#### Using React Hook
```jsx
import { useColors } from '../hooks/useColors'

const MyComponent = () => {
  const colors = useColors()
  
  return (
    <div style={{ backgroundColor: colors.primary }}>
      Content
    </div>
  )
}
```

## 🎯 Current Color Scheme (Professional & Brand-Aligned)

### Primary Colors (Blue)
- **Main**: `#1e40af` - Professional blue matching your logo
- **Light**: `#3b82f6` - For hover states
- **Dark**: `#1e3a8a` - For pressed states

### Secondary Colors (Slate Gray)
- **Main**: `#475569` - Professional slate gray complement
- **Light**: `#64748b` - For subtle highlights
- **Dark**: `#334155` - For depth and contrast

### Philosophy
- **Brand-Aligned**: Matches your black and blue logo perfectly
- **Professional**: Sophisticated slate gray instead of flashy gold
- **Minimal**: Only 2 main brand colors (blue + slate)
- **Corporate**: Perfect for international trade and business
- **Accessible**: Excellent contrast ratios

## ⚡ Quick Changes

### To Change Primary Color Across Entire Site:
1. Open `src/styles/colors.js`
2. Change `primary.main` value
3. Save file - all components update automatically!

### To Change Secondary Color Across Entire Site:
1. Open `src/styles/colors.js`
2. Change `secondary.main` value
3. Save file - all secondary elements update automatically!

### To Add New Color:
1. Add to `colors` object in `colors.js`
2. Add to `tailwindColors` export
3. Add CSS variable in `globals.css`
4. Create utility class if needed

## 🔍 Benefits

1. **Single Point of Control**: Change one file, update entire site
2. **Consistency**: Ensures all components use exact same colors
3. **Maintainability**: Easy to modify color scheme later
4. **Performance**: Reduces CSS duplication
5. **Team Friendly**: Clear color naming and documentation

## 🚨 Important Notes

- Always use the predefined classes when possible
- Avoid hardcoding color values in components
- Test color changes in both light and dark sections
- Ensure accessibility standards are maintained

---

*This system makes your GL-B Group website much easier to maintain and ensures perfect color consistency throughout!*
