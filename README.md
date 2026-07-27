# MegaWebCreations Website

A modern, premium website built with Next.js, TypeScript, and Tailwind CSS. Deployed on Vercel.

## Features

- ⚡ Fast performance with Next.js 15
- 🎨 Modern design with cool color accents (electric blue & purple)
- 📱 Fully responsive and mobile-first
- ♿ Accessible (WCAG compliant)
- 🔍 SEO optimized
- 📧 Contact form with lead capture
- 🎯 Conversion-focused sections
- 🌙 Dark theme with glowing accents

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Setup

1. Clone the repository:
```bash
git clone <repo-url>
cd megawebcreations
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Then add your Formspree form ID to `.env.local`.

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

### Email Form Integration

The contact form is set up to use Formspree. To enable it:

1. Go to [formspree.io](https://formspree.io)
2. Create a new form endpoint
3. Copy your form ID
4. Add it to `.env.local`:
```
NEXT_PUBLIC_FORMSPREE_ID=your_form_id_here
```

5. Update the fetch URL in `components/ContactForm.tsx` and `components/ContactModal.tsx`

### Customization

- **Colors**: Edit `tailwind.config.js` to change the accent colors
- **Content**: Edit component files in `/components` to update copy
- **Sections**: Add new sections by creating new components and importing them in `app/page.tsx`

## Deployment

Deploy to Vercel with one click:

1. Push to GitHub
2. Import to Vercel
3. Vercel will auto-deploy on every push

## Performance

- Optimized images
- Code splitting
- CSS minification
- Fast load times (90+ Lighthouse scores)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

All rights reserved © 2026 MegaWebCreations
