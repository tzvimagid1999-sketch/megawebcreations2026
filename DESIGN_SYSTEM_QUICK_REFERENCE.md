# Design System Quick Reference

## Cheat Sheet for Developers

### Colors
```
Text:        text-text-primary, text-text-secondary, text-text-tertiary
Background:  bg-background, bg-bg-light, bg-bg-elevated
Accent:      text-accent, bg-accent, border-accent
Status:      text-success, text-error, text-warning, text-info
```

### Spacing (4px base unit)
```
xs: 4px      → p-xs, m-xs, gap-xs
sm: 8px      → p-sm, m-sm, gap-sm
md: 12px     → p-md, m-md, gap-md
lg: 16px     → p-lg, m-lg, gap-lg (DEFAULT)
xl: 24px     → p-xl, m-xl, gap-xl
2xl: 32px    → p-2xl, m-2xl, gap-2xl
3xl: 48px    → m-3xl
4xl: 64px    → m-4xl
5xl: 80px    → m-5xl (sections)
```

### Typography
```
Display:  text-5xl (48px), text-4xl (40px)
Title:    text-3xl (32px), text-2xl (24px)
Heading:  text-xl (20px), text-lg (18px)
Body:     text-base (16px), text-sm (14px)
Small:    text-xs (12px)

Weight:   font-normal, font-medium, font-semibold, font-bold
```

### Buttons
```
Primary:     px-lg py-md bg-gradient-accent text-inverse font-semibold rounded-md
Secondary:   px-lg py-md border-2 border-accent text-accent font-semibold rounded-md
Ghost:       px-lg py-md text-text-primary hover:bg-white/5 rounded-md

Sizes:
  Sm:  px-sm py-xs text-sm
  Md:  px-lg py-md text-base (default)
  Lg:  px-xl py-lg text-lg
  Xl:  px-2xl py-xl text-xl
```

### Forms
```
Input:   w-full px-lg py-md bg-bg-light border border-accent/20 rounded-md
Focus:   focus:border-accent focus:shadow-glow-sm focus:outline-none
Error:   border-error bg-error/5
Label:   text-sm font-medium text-text-primary mb-md
Help:    text-xs text-text-tertiary
```

### Cards
```
Default:   bg-bg-light border border-accent/10 rounded-lg p-xl
Hover:     hover:border-accent/30 transition-all duration-fast
Elevated:  shadow-lg border border-accent/5
Featured:  border-2 border-accent bg-gradient-subtle
```

### Shadows
```
Standard:  shadow-sm, shadow-md, shadow-lg, shadow-xl, shadow-2xl
Glow:      shadow-glow-sm, shadow-glow-md, shadow-glow-lg
Purple:    shadow-glow-purple
Focus:     shadow-focus
```

### Border Radius
```
sm:   rounded-sm (4px)
md:   rounded-md (8px)    DEFAULT
lg:   rounded-lg (12px)
xl:   rounded-xl (16px)
2xl:  rounded-2xl (24px)
full: rounded-full (pill)
```

### Transitions
```
Duration:  duration-instant (75ms), duration-fast (150ms), 
           duration-base (200ms), duration-slow (300ms)
Easing:    ease-in, ease-out, ease-in-out
Example:   transition-all duration-fast ease-in-out
```

### Animations
```
animate-fade         Fade in
animate-slide-up     Slide up with fade
animate-slide-down   Slide down with fade
animate-scale        Scale up with fade
animate-pulse        Opacity oscillation
animate-glow         Shadow glow pulse
```

### Responsive
```
Mobile:   (default, < 768px)
Tablet:   md:... (768px+)
Laptop:   lg:... (1024px+)
Desktop:  xl:... (1280px+)
Large:    2xl:... (1536px+)

Example:  w-full md:w-1/2 lg:w-1/3 xl:w-1/4
```

## Common Component Patterns

### Button with Icon
```tsx
<button className="flex items-center gap-md px-lg py-md bg-accent text-inverse rounded-md">
  <IconComponent /> Text
</button>
```

### Card with Header
```tsx
<div className="bg-bg-light border border-accent/10 rounded-lg overflow-hidden">
  <div className="px-xl py-lg border-b border-accent/10">
    <h3 className="text-lg font-bold text-text-primary">Header</h3>
  </div>
  <div className="px-xl py-lg">Content</div>
</div>
```

### Input with Label
```tsx
<div>
  <label className="block text-sm font-medium text-text-primary mb-md">
    Field Name <span className="text-error">*</span>
  </label>
  <input className="w-full px-lg py-md bg-bg-light border border-accent/20 rounded-md focus:border-accent focus:shadow-glow-sm" />
</div>
```

### Grid Layout
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-lg">
  {/* Items */}
</div>
```

### Section Spacing
```tsx
<section className="py-4xl md:py-5xl">
  <div className="max-w-5xl mx-auto px-lg">
    {/* Content */}
  </div>
</section>
```

## Do's & Don'ts

✅ **DO:**
- Use defined spacing values (px-lg, p-2xl, etc.)
- Apply text color hierarchy (primary → secondary → tertiary)
- Include focus states on all interactive elements
- Use consistent border radius (md or lg for most elements)
- Add transitions for smooth interactions
- Test color contrast (4.5:1 minimum)
- Mobile-first approach with breakpoint prefixes

❌ **DON'T:**
- Use arbitrary values (px-[17px], w-[312px])
- Mix multiple color schemes
- Hide focus states
- Use animations for decoration
- Forget about accessibility
- Apply opacity directly to colors (use color variables instead)
- Use different shadow effects inconsistently

## Testing Checklist

- [ ] All text has sufficient contrast (4.5:1+)
- [ ] Focus states are visible on all interactive elements
- [ ] Mobile layout is responsive and readable
- [ ] Dark theme colors are consistent
- [ ] Animations respect `prefers-reduced-motion`
- [ ] Font sizes scale appropriately by breakpoint
- [ ] Spacing follows 4px base unit
- [ ] All buttons have hover/active states
- [ ] Form inputs show validation states
- [ ] Interactive elements have cursor feedback

## Performance Tips

1. Use Tailwind utility classes - they're optimized
2. Avoid inline styles - use component classes
3. Keep animations simple - 200ms is usually enough
4. Use CSS transitions over JavaScript when possible
5. Lazy-load components in long pages
6. Consider prefers-reduced-motion for critical interactions

## Extending the Design System

### Adding a New Color
1. Add to `tailwind.config.js` in `colors` object
2. Update `DESIGN_SYSTEM.md` with documentation
3. Test contrast ratios for accessibility
4. Add example to `DesignSystemShowcase.tsx`

### Adding a New Component
1. Create in `/components` folder
2. Use only design system tokens
3. Document in `COMPONENT_LIBRARY.md`
4. Add example to showcase
5. Test on mobile and desktop

### Changing Existing Tokens
1. Update both `tailwind.config.js` AND `DESIGN_SYSTEM.md`
2. Search for usage in components
3. Test affected pages
4. Update showcase component
5. Document breaking changes

## Resources

- **Full Documentation**: See `DESIGN_SYSTEM.md`
- **Component Examples**: See `COMPONENT_LIBRARY.md`
- **Visual Showcase**: Navigate to `/showcase` route
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Accessibility Guide**: https://www.w3.org/WAI/WCAG21/quickref/
