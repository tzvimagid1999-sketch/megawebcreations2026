# MegaWebCreations Design System

A comprehensive, production-ready design system inspired by Stripe, Linear, Vercel, Notion, and Framer.

## 1. Color Palette

### Core Colors
- **Background**: `#0a0e27` (Dark Navy)
- **Background Lighter**: `#1a1f3a` (Slightly lighter)
- **Background Elevated**: `#242d47` (Cards, elevated surfaces)

### Primary Accent
- **Accent**: `#00d9ff` (Electric Cyan)
- **Accent Dark**: `#0099cc` (Darker cyan for hover/active)
- **Accent Light**: `#66e6ff` (Lighter cyan for backgrounds)

### Secondary Accent
- **Purple**: `#7c3aed` (Vibrant Purple)
- **Purple Dark**: `#6d28d9` (Darker purple)
- **Purple Light**: `#c4b5fd` (Light purple for backgrounds)

### Semantic Colors
- **Success**: `#10b981` (Green)
- **Warning**: `#f59e0b` (Amber)
- **Error**: `#ef4444` (Red)
- **Info**: `#3b82f6` (Blue)

### Neutral Grays
- **Gray 50**: `#f9fafb`
- **Gray 100**: `#f3f4f6`
- **Gray 200**: `#e5e7eb`
- **Gray 300**: `#d1d5db`
- **Gray 400**: `#9ca3af`
- **Gray 500**: `#6b7280`
- **Gray 600**: `#4b5563`
- **Gray 700**: `#374151`
- **Gray 800**: `#1f2937`
- **Gray 900**: `#111827`

### Text Colors
- **Text Primary**: `#e5e7eb` (Light gray on dark backgrounds)
- **Text Secondary**: `#9ca3af` (Medium gray for secondary content)
- **Text Tertiary**: `#6b7280` (Darker gray for disabled/hints)
- **Text Inverse**: `#0a0e27` (For light backgrounds)

## 2. Typography

### Font Family
- **Primary**: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
- **Mono**: "Monaco", "Courier New", monospace

### Type Scale

| Size | Name | Weight | Line Height | Use Case |
|------|------|--------|-------------|----------|
| 12px | Xs | 400, 500 | 1.5 | Labels, badges, small text |
| 14px | Sm | 400, 500 | 1.6 | Body text, descriptions |
| 16px | Base | 400, 500, 600 | 1.6 | Default body text |
| 18px | Lg | 500, 600 | 1.75 | Slightly larger emphasis |
| 20px | Xl | 600, 700 | 1.8 | Section headings |
| 24px | 2Xl | 700 | 1.9 | Subheadings |
| 32px | 3Xl | 700 | 1.9 | Page headings |
| 40px | 4Xl | 700 | 1.8 | Hero headings |
| 48px | 5Xl | 700 | 1.8 | Large hero headings |

### Font Weights
- **400** - Regular text
- **500** - Medium (UI elements, labels)
- **600** - Semibold (emphasis, nav items)
- **700** - Bold (headings)

## 3. Button Styles

### Primary Button
- Background: Accent gradient (`#00d9ff` to `#7c3aed`)
- Text: Dark (`#0a0e27`)
- Padding: `12px 24px` (md), `16px 32px` (lg)
- Border Radius: `8px`
- Font Weight: 600
- Box Shadow: `0 0 20px rgba(0, 217, 255, 0.3)` (glow)
- Hover: Brightness 1.1, shadow increases
- Active: Brightness 0.95
- Disabled: Opacity 0.5, no shadow

### Secondary Button
- Border: 2px `#00d9ff`
- Text: `#00d9ff`
- Background: Transparent
- Padding: `10px 22px` (md), `14px 30px` (lg)
- Hover: Background `rgba(0, 217, 255, 0.1)`
- Active: Background `rgba(0, 217, 255, 0.2)`

### Ghost Button
- Background: Transparent
- Text: `#e5e7eb`
- Border: None
- Padding: `12px 16px`
- Hover: Background `rgba(255, 255, 255, 0.05)`
- Active: Background `rgba(255, 255, 255, 0.1)`

### Button Sizes
- **Sm**: `10px 16px`, `12px` text
- **Md**: `12px 24px`, `14px` text
- **Lg**: `16px 32px`, `16px` text
- **Xl**: `20px 40px`, `18px` text

## 4. Form Styles

### Input Fields
- Background: `#1a1f3a`
- Border: `1px solid rgba(0, 217, 255, 0.2)`
- Border Radius: `8px`
- Padding: `12px 16px`
- Text Color: `#e5e7eb`
- Placeholder: `#6b7280`
- Focus: Border color `#00d9ff`, box shadow `0 0 8px rgba(0, 217, 255, 0.2)`
- Disabled: Opacity 0.5, cursor not-allowed

### Text Area
- Same as input fields
- Min height: `120px`
- Resize: vertical only
- Font: Monospace for code input

### Select Dropdown
- Background: `#1a1f3a`
- Border: `1px solid rgba(0, 217, 255, 0.2)`
- Padding: `12px 16px`
- Arrow color: `#00d9ff`

### Labels
- Font Size: `14px`
- Font Weight: 500
- Color: `#e5e7eb`
- Margin Bottom: `6px`
- Required indicator: `*` in accent color

### Error States
- Border color: `#ef4444`
- Error text: `#ef4444`, `12px`, below field
- Background: `rgba(239, 68, 68, 0.05)`

### Success States
- Border color: `#10b981`
- Success text: `#10b981`, `12px`, below field

## 5. Cards

### Default Card
- Background: `#1a1f3a`
- Border: `1px solid rgba(0, 217, 255, 0.1)`
- Border Radius: `12px`
- Padding: `24px`
- Box Shadow: None (subtle border only)

### Hover Card
- Border color: `rgba(0, 217, 255, 0.3)`
- Transition: 150ms ease-in-out

### Elevated Card
- Box Shadow: `0 4px 20px rgba(0, 0, 0, 0.3)`
- Border: 1px solid `rgba(0, 217, 255, 0.05)`

### Featured Card
- Border: 2px solid `#00d9ff`
- Background: `linear-gradient(135deg, rgba(0, 217, 255, 0.05), rgba(124, 58, 237, 0.05))`

## 6. Shadows

### Shadow Scale
- **Sm**: `0 1px 2px rgba(0, 0, 0, 0.05)`
- **Md**: `0 4px 6px rgba(0, 0, 0, 0.1)`
- **Lg**: `0 10px 15px rgba(0, 0, 0, 0.15)`
- **Xl**: `0 20px 25px rgba(0, 0, 0, 0.2)`
- **2Xl**: `0 25px 50px rgba(0, 0, 0, 0.25)`

### Glow Effects
- **Accent Glow Sm**: `0 0 8px rgba(0, 217, 255, 0.3)`
- **Accent Glow Md**: `0 0 20px rgba(0, 217, 255, 0.3)`
- **Accent Glow Lg**: `0 0 40px rgba(0, 217, 255, 0.4)`
- **Purple Glow**: `0 0 20px rgba(124, 58, 237, 0.2)`

## 7. Border Radius

- **None**: `0px`
- **Sm**: `4px`
- **Md**: `8px`
- **Lg**: `12px`
- **Xl**: `16px`
- **2Xl**: `24px`
- **Full**: `9999px` (pills, avatars)

## 8. Icon Style

### Icon Design Principles
- Stroke width: `1.5px` (consistent with Feather Icons)
- Consistent sizing: 16px, 20px, 24px, 32px
- Square viewBox: 24x24
- Rounded line caps and joins
- Color: Inherit from text/accent color
- No fill on default icons (outline style)

### Icon Sizes
- **Xs**: `16px` (labels, badges)
- **Sm**: `18px` (buttons, inputs)
- **Md**: `24px` (navigation, default)
- **Lg**: `32px` (hero sections)
- **Xl**: `48px` (large emphasis)

### Icon Colors
- **Default**: Inherit from parent
- **Primary**: `#00d9ff` (accent)
- **Muted**: `#6b7280` (secondary content)
- **Danger**: `#ef4444` (errors)
- **Success**: `#10b981` (confirmation)

## 9. Animation Rules

### Duration Scale
- **Instant**: `75ms` (micro-interactions)
- **Fast**: `150ms` (common interactions)
- **Base**: `200ms` (standard transitions)
- **Slow**: `300ms` (emphasis animations)
- **Slower**: `500ms` (page transitions)

### Easing Functions
- **Ease In**: `cubic-bezier(0.4, 0, 1, 1)`
- **Ease Out**: `cubic-bezier(0, 0, 0.2, 1)`
- **Ease In Out**: `cubic-bezier(0.4, 0, 0.2, 1)`
- **Linear**: `linear` (for continuous motion)

### Animation Library
- **Fade**: Opacity 0 → 1, duration 200ms, ease-out
- **Slide Up**: Transform Y -10px → 0, opacity, 200ms
- **Slide Down**: Transform Y 10px → 0, opacity, 200ms
- **Scale**: Transform scale 0.95 → 1, opacity, 200ms
- **Pulse**: Opacity oscillation, 2s loop
- **Glow**: Shadow oscillation, infinite

### Hover Animations
- Buttons: Brightness change + shadow intensify, 150ms
- Cards: Border color + shadow increase, 150ms
- Links: Color change + underline expand, 150ms
- Icons: Scale 1 → 1.1 or color change, 150ms

### Focus Animations
- Outline: 2px solid accent with 2px offset, 150ms ease-out
- Shadow: Glow effect fade in, 200ms

### No Animation For
- Disabled states (opacity only)
- Essential transitions (page loads, critical UX)

## 10. Grid System

### Container
- Max width: `1280px` (80rem)
- Padding: 
  - Mobile: `16px`
  - Tablet: `24px`
  - Desktop: `32px`

### Grid Columns
- Mobile: 1 column (100%)
- Tablet (768px+): 2 columns (equal width)
- Desktop (1024px+): 3-4 columns (equal width)
- Wide (1280px+): 4-6 columns (equal width)

### Grid Gap
- **Mobile**: `16px`
- **Tablet**: `20px`
- **Desktop**: `24px`
- **Wide**: `32px`

## 11. Spacing Scale

### Base Unit: 4px

| Token | Size | Use Case |
|-------|------|----------|
| xs | 4px | Minimal spacing |
| sm | 8px | Tight spacing |
| md | 12px | Comfortable spacing |
| lg | 16px | Default spacing |
| xl | 24px | Large spacing |
| 2xl | 32px | Extra large spacing |
| 3xl | 48px | Huge spacing |
| 4xl | 64px | Massive spacing |
| 5xl | 80px | Full section spacing |

### Common Spacing Usage
- **Padding**: md (12px), lg (16px), xl (24px)
- **Margin**: lg (16px), xl (24px), 2xl (32px)
- **Gap**: md (12px), lg (16px), xl (24px)
- **Section margins**: 3xl (48px), 4xl (64px), 5xl (80px)

## 12. Responsive Breakpoints

| Name | Width | Use Case |
|------|-------|----------|
| xs | 320px | Extra small phones |
| sm | 640px | Phones |
| md | 768px | Tablets |
| lg | 1024px | Laptops |
| xl | 1280px | Desktops |
| 2xl | 1536px | Large screens |

### Mobile-First Approach
- Design for mobile (320px) first
- Add breakpoints for larger screens
- Use `md:`, `lg:`, `xl:` prefixes in Tailwind

### Typography Scaling
- Mobile: 14px base
- Tablet (md): 16px base
- Desktop (lg): 16px base
- Large screens (xl): 16px base

### Padding/Margin Scaling
- Mobile: 16px horizontal padding
- Tablet (md): 24px horizontal padding
- Desktop (lg): 32px horizontal padding

## 13. Accessibility Standards

### Color Contrast
- Text on background: 4.5:1 minimum (WCAG AA)
- Text on accent: High contrast verified
- Accent on dark: 7:1 ratio achieved

### Focus States
- Visible outline: 2px solid accent color
- Outline offset: 2px
- Not hidden by overflow or other elements

### Motion
- Reduced motion respected: `@media (prefers-reduced-motion)`
- No auto-playing animations
- User controls animation triggers

### Form Accessibility
- Labels associated with inputs
- Error messages linked to inputs
- Required fields clearly marked
- Placeholder text not as replacement for labels

## 14. Component Patterns

### Button with Icon
- Icon on left or right
- 8px gap between icon and text
- Icon color matches text color

### Card with Header
- Header padding: lg (16px)
- Border between header and content
- Content padding: lg (16px)

### Input with Icon
- Icon padding: md (12px)
- Icon color: secondary text color
- Focus changes icon color to accent

### Dropdown/Select
- Min width: 120px
- Option padding: md (12px)
- Selected item highlight: accent background

## 15. Dark Mode

All colors specified assume dark mode (dark Navy background). Light mode variants not currently implemented but can be added via CSS variables.

## Usage

### With Tailwind CSS
All values are configured in `tailwind.config.js`. Use utility classes:
- Colors: `bg-accent`, `text-primary`, `border-accent-dark`
- Spacing: `p-lg`, `m-xl`, `gap-md`
- Border Radius: `rounded-md`, `rounded-lg`
- Shadows: `shadow-md`, `shadow-accent-md`
- Animations: `animate-fade`, `animate-glow`

### With CSS Variables
```css
:root {
  --color-background: #0a0e27;
  --color-accent: #00d9ff;
  --spacing-lg: 16px;
  --radius-md: 8px;
}
```

### Custom Components
Follow these patterns for consistency across the application.
