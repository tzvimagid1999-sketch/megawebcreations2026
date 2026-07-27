# Component Library - MegaWebCreations

Complete component documentation with usage examples.

## Buttons

### Primary Button
```tsx
<button className="px-lg py-md bg-gradient-accent text-inverse font-semibold rounded-md hover:shadow-glow-md hover:brightness-110 active:brightness-95 disabled:opacity-50 transition-all duration-fast">
  Get Started
</button>
```

### Secondary Button
```tsx
<button className="px-lg py-md border-2 border-accent text-accent font-semibold rounded-md hover:bg-accent/10 active:bg-accent/20 disabled:opacity-50 transition-all duration-fast">
  Learn More
</button>
```

### Ghost Button
```tsx
<button className="px-lg py-md text-text-primary hover:bg-white/5 active:bg-white/10 rounded-md transition-all duration-fast">
  Dismiss
</button>
```

### Button with Icon
```tsx
<button className="inline-flex items-center gap-md px-lg py-md bg-accent text-inverse font-semibold rounded-md hover:shadow-glow-md transition-all duration-fast">
  <svg>...</svg>
  Start Project
</button>
```

### Size Variants
```tsx
// Small
<button className="px-sm py-xs text-sm rounded-md">Sm</button>

// Medium (default)
<button className="px-lg py-md text-base rounded-md">Md</button>

// Large
<button className="px-xl py-lg text-lg rounded-md">Lg</button>

// Extra Large
<button className="px-2xl py-xl text-xl rounded-md">Xl</button>
```

## Form Elements

### Input Field
```tsx
<input
  type="text"
  placeholder="Enter text"
  className="w-full px-lg py-md bg-bg-light border border-accent/20 rounded-md text-text-primary placeholder:text-text-tertiary focus:border-accent focus:shadow-glow-sm focus:outline-none transition-all duration-fast"
/>
```

### Label + Input
```tsx
<div>
  <label className="block text-sm font-medium text-text-primary mb-md">
    Full Name
    <span className="text-error">*</span>
  </label>
  <input
    type="text"
    className="w-full px-lg py-md bg-bg-light border border-accent/20 rounded-md text-text-primary focus:border-accent focus:shadow-glow-sm focus:outline-none"
  />
</div>
```

### Textarea
```tsx
<textarea
  placeholder="Enter message"
  className="w-full px-lg py-md bg-bg-light border border-accent/20 rounded-md text-text-primary placeholder:text-text-tertiary focus:border-accent focus:shadow-glow-sm focus:outline-none resize-none"
  rows={4}
/>
```

### Select/Dropdown
```tsx
<select className="w-full px-lg py-md bg-bg-light border border-accent/20 rounded-md text-text-primary focus:border-accent focus:shadow-glow-sm focus:outline-none">
  <option>Select an option</option>
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

### Form Error
```tsx
<div>
  <label className="block text-sm font-medium text-text-primary mb-md">Email</label>
  <input
    type="email"
    className="w-full px-lg py-md bg-bg-light border-2 border-error rounded-md text-text-primary focus:outline-none bg-error/5"
  />
  <p className="text-sm text-error mt-sm">Email is required</p>
</div>
```

### Checkbox
```tsx
<label className="flex items-center gap-md cursor-pointer">
  <input
    type="checkbox"
    className="w-5 h-5 rounded-sm accent-accent cursor-pointer"
  />
  <span className="text-base text-text-primary">I agree to terms</span>
</label>
```

### Radio Button
```tsx
<label className="flex items-center gap-md cursor-pointer">
  <input
    type="radio"
    name="option"
    className="w-5 h-5 rounded-full accent-accent cursor-pointer"
  />
  <span className="text-base text-text-primary">Option A</span>
</label>
```

## Cards

### Default Card
```tsx
<div className="bg-bg-light border border-accent/10 rounded-lg p-xl hover:border-accent/30 transition-all duration-fast">
  <h3 className="text-xl font-bold text-text-primary mb-md">Card Title</h3>
  <p className="text-base text-text-secondary">Card content goes here</p>
</div>
```

### Elevated Card
```tsx
<div className="bg-bg-light border border-accent/5 rounded-lg p-xl shadow-lg hover:shadow-xl transition-all duration-fast">
  <h3 className="text-xl font-bold text-text-primary">Elevated Card</h3>
  <p className="text-text-secondary">With prominent shadow</p>
</div>
```

### Featured Card with Badge
```tsx
<div className="relative bg-gradient-subtle border-2 border-accent rounded-lg p-xl overflow-hidden">
  <div className="absolute top-lg right-lg px-md py-sm bg-accent text-inverse text-xs font-bold rounded-full">
    Featured
  </div>
  <h3 className="text-xl font-bold text-text-primary mb-md">Featured Card</h3>
  <p className="text-text-secondary">Highlighted with accent border</p>
</div>
```

### Card with Header
```tsx
<div className="bg-bg-light border border-accent/10 rounded-lg overflow-hidden">
  <div className="px-xl py-lg border-b border-accent/10">
    <h3 className="text-lg font-bold text-text-primary">Card Header</h3>
  </div>
  <div className="px-xl py-lg">
    <p className="text-base text-text-secondary">Content</p>
  </div>
</div>
```

### Card Grid
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-lg">
  {/* Card items */}
</div>
```

## Typography

### Heading 1 (Hero)
```tsx
<h1 className="text-5xl font-bold text-text-primary leading-tight">
  Large Page Heading
</h1>
```

### Heading 2 (Page Section)
```tsx
<h2 className="text-4xl font-bold text-text-primary">
  Section Heading
</h2>
```

### Heading 3 (Card/Subsection)
```tsx
<h3 className="text-2xl font-bold text-text-primary">
  Card Heading
</h3>
```

### Body Text (Large)
```tsx
<p className="text-lg text-text-primary leading-relaxed">
  Larger body paragraph for emphasis or introductions.
</p>
```

### Body Text (Default)
```tsx
<p className="text-base text-text-secondary leading-relaxed">
  Default body text for most content.
</p>
```

### Small Text
```tsx
<p className="text-sm text-text-tertiary">
  Small text for captions or metadata.
</p>
```

### Label/Badge
```tsx
<span className="text-xs font-medium text-accent uppercase tracking-wider">
  Premium
</span>
```

### Gradient Text
```tsx
<h2 className="text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent">
  Highlighted Text
</h2>
```

## Badges & Labels

### Primary Badge
```tsx
<span className="inline-block px-md py-sm bg-accent text-inverse text-xs font-bold rounded-full">
  New
</span>
```

### Secondary Badge
```tsx
<span className="inline-block px-md py-sm border border-accent text-accent text-xs font-bold rounded-full">
  Featured
</span>
```

### Success Badge
```tsx
<span className="inline-block px-md py-sm bg-success/20 text-success text-xs font-bold rounded-full">
  Active
</span>
```

### Status Indicator
```tsx
<div className="flex items-center gap-sm">
  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
  <span className="text-sm text-text-secondary">Online</span>
</div>
```

## Navigation

### Top Navigation
```tsx
<nav className="sticky top-0 bg-bg-light border-b border-accent/10 px-lg py-md">
  <div className="flex items-center justify-between max-w-5xl mx-auto">
    <h1 className="text-lg font-bold text-text-primary">Logo</h1>
    <ul className="flex gap-xl">
      <li><a href="#" className="text-text-primary hover:text-accent transition-colors">Link</a></li>
    </ul>
    <button className="px-lg py-md bg-accent text-inverse rounded-md font-semibold">
      CTA
    </button>
  </div>
</nav>
```

### Breadcrumb
```tsx
<nav className="flex gap-sm text-sm text-text-secondary">
  <a href="#" className="hover:text-accent transition-colors">Home</a>
  <span>/</span>
  <a href="#" className="hover:text-accent transition-colors">Section</a>
  <span>/</span>
  <span className="text-text-primary">Current</span>
</nav>
```

## Alerts & Notifications

### Alert Container
```tsx
<div className="bg-accent/10 border border-accent text-accent text-sm rounded-lg p-lg">
  <strong>Success:</strong> Your changes have been saved.
</div>
```

### Error Alert
```tsx
<div className="bg-error/10 border border-error text-error text-sm rounded-lg p-lg">
  <strong>Error:</strong> Something went wrong. Please try again.
</div>
```

### Warning Alert
```tsx
<div className="bg-warning/10 border border-warning text-warning text-sm rounded-lg p-lg">
  <strong>Warning:</strong> This action cannot be undone.
</div>
```

## Loading & Empty States

### Loading Spinner
```tsx
<div className="inline-block">
  <div className="w-6 h-6 border-3 border-accent/20 border-t-accent rounded-full animate-spin"></div>
</div>
```

### Skeleton
```tsx
<div className="bg-bg-light rounded-lg p-lg animate-pulse">
  <div className="h-4 bg-bg-elevated rounded mb-lg w-3/4"></div>
  <div className="h-4 bg-bg-elevated rounded w-1/2"></div>
</div>
```

### Empty State
```tsx
<div className="text-center py-4xl">
  <div className="text-4xl mb-lg">📭</div>
  <h3 className="text-lg font-semibold text-text-primary mb-md">No items found</h3>
  <p className="text-text-secondary mb-xl">Try adjusting your filters</p>
  <button className="px-lg py-md bg-accent text-inverse rounded-md font-semibold">
    Create New
  </button>
</div>
```

## Modals & Overlays

### Modal Overlay
```tsx
<div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
  <div className="bg-bg-light border border-accent/30 rounded-lg p-2xl max-w-lg w-full mx-4">
    <h2 className="text-2xl font-bold text-text-primary mb-lg">Modal Title</h2>
    <p className="text-text-secondary mb-2xl">Modal content</p>
    <div className="flex gap-lg justify-end">
      <button className="px-lg py-md border border-accent text-accent rounded-md">Cancel</button>
      <button className="px-lg py-md bg-accent text-inverse rounded-md font-semibold">Confirm</button>
    </div>
  </div>
</div>
```

## Layout

### Container
```tsx
<div className="max-w-5xl mx-auto px-lg md:px-xl lg:px-2xl py-4xl">
  {/* Content */}
</div>
```

### Two Column Layout
```tsx
<div className="grid md:grid-cols-2 gap-2xl">
  <div>{/* Left column */}</div>
  <div>{/* Right column */}</div>
</div>
```

### Three Column Layout
```tsx
<div className="grid md:grid-cols-3 gap-2xl">
  <div>{/* Column 1 */}</div>
  <div>{/* Column 2 */}</div>
  <div>{/* Column 3 */}</div>
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

## Utility Classes Quick Reference

### Spacing
- Padding: `p-xs`, `p-sm`, `p-md`, `p-lg`, `p-xl`, `p-2xl`
- Margin: `m-lg`, `m-xl`, `m-2xl`, `m-3xl`, `m-4xl`, `m-5xl`
- Gap: `gap-md`, `gap-lg`, `gap-xl`

### Colors
- Background: `bg-background`, `bg-bg-light`, `bg-bg-elevated`
- Text: `text-text-primary`, `text-text-secondary`, `text-text-tertiary`
- Accent: `text-accent`, `bg-accent`, `border-accent`
- Status: `text-success`, `text-error`, `text-warning`

### Borders
- Radius: `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`
- Border: `border`, `border-2`, `border-accent`, `border-accent/20`

### Shadows
- Regular: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-2xl`
- Glow: `shadow-glow-sm`, `shadow-glow-md`, `shadow-glow-lg`, `shadow-glow-purple`
- Focus: `shadow-focus`

### Typography
- Font size: `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`, `text-4xl`, `text-5xl`
- Font weight: `font-normal`, `font-medium`, `font-semibold`, `font-bold`

### Transitions
- Duration: `duration-instant`, `duration-fast`, `duration-base`, `duration-slow`
- Easing: `ease-in`, `ease-out`, `ease-in-out`
- Example: `transition-all duration-fast ease-in-out`

### Responsive
- Mobile first: Default styles apply to all breakpoints
- Prefixes: `md:`, `lg:`, `xl:`, `2xl:`
- Example: `w-full md:w-1/2 lg:w-1/3`

### Animations
- `animate-fade`, `animate-slide-up`, `animate-slide-down`, `animate-scale`, `animate-pulse`, `animate-glow`

## Best Practices

1. **Use consistent spacing**: Always use defined spacing values, never arbitrary values
2. **Maintain color hierarchy**: Use primary, secondary, tertiary text colors appropriately
3. **Accessibility first**: Ensure sufficient color contrast (4.5:1 minimum)
4. **Mobile responsive**: Start with mobile design, enhance for larger screens
5. **Animation restraint**: Use animations purposefully, not for decoration
6. **Focus states**: Every interactive element needs a clear focus indicator
7. **Error handling**: Always show clear error messages with success/warning colors
8. **Loading states**: Indicate to users when something is happening
9. **Consistent radius**: Use `rounded-md` (8px) as default for most elements
10. **Hierarchy**: Use font sizes and weights to create clear visual hierarchy
