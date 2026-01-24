# Personal Portfolio App

A modern, animated portfolio website built with Next.js 16, React 19, TypeScript, Tailwind CSS 4, Framer Motion, and GSAP.

## Features

- Responsive design optimized for all devices
- Smooth animations with Framer Motion and GSAP
- Interactive particle background
- Swipeable testimonials and process cards
- Contact form with validation and error handling
- Lead magnet subscription form
- Case studies showcase
- Services/packages section with pricing
- SEO optimized with OpenGraph and Twitter cards
- Accessibility features (skip links, ARIA labels, screen reader support)

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion, GSAP
- **UI Components:** Radix UI, shadcn/ui
- **Forms:** React Hook Form, Zod validation
- **Analytics:** Vercel Analytics

## Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd personal-portfolio-app
```

### 2. Install dependencies

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory:

```env
# Required for protected API endpoints (admin access)
ADMIN_API_KEY=your-secure-api-key-here

# Optional: Add your email service API key for contact form
# EMAIL_API_KEY=your-email-service-api-key

# Optional: GitHub settings used by the GitHub metrics API endpoint
# GITHUB_USERNAME=your-github-username   # defaults to 'shubham' if not set
# GITHUB_TOKEN=personal-access-token     # OPTIONAL but recommended (increases rate limits)
```

### 4. Run the development server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

## Project Structure

```
personal-portfolio-app/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── contact/       # Contact form endpoint
│   │   └── leads/         # Lead magnet endpoint
│   ├── case-studies/      # Case study pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── *.tsx             # Feature components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── public/                # Static assets
├── src/data/             # JSON data files
│   ├── case-studies.json
│   ├── packages.json
│   ├── process.json
│   └── testimonials.json
└── styles/               # Additional styles
```

## Customization

### Personal Information

Update the following files with your information:

1. **`app/layout.tsx`** - Update metadata (name, description, URLs, social handles)
2. **`components/hero.tsx`** - Update terminal text and stats
3. **`components/about.tsx`** - Update experience timeline and skills
4. **`components/footer.tsx`** - Update social links
5. **`components/contact-form.tsx`** - Update contact details

### Case Studies / Projects Images

Place project images under `public/images/case-studies/` using the following naming convention (these file names were added as placeholders when importing your repos):

- `saas-dashboard-cover.jpg`
- `saas-landing-cover.jpg`
- `ai-landing-page-cover.jpg`
- `photography-banner-cover.jpg`
- `katachi-studio-cover.jpg`

Each project expects at least a `-cover.jpg` image. You can also add a gallery image set (e.g. `saas-dashboard-1.jpg`, `saas-dashboard-2.jpg`) and update `src/data/case-studies.json` to include additional gallery entries.

If you want, share the image files and I can add them to `public/images/case-studies/` for you. Otherwise, place the images locally and the site will pick them up automatically.

### Data Files

Edit the JSON files in `src/data/`:

- **`case-studies.json`** - Your portfolio projects
- **`packages.json`** - Your service packages and pricing
- **`process.json`** - Your work process steps
- **`testimonials.json`** - Client testimonials

### Styling

- **Colors:** Edit CSS variables in `app/globals.css`
- **Fonts:** Configured in `app/layout.tsx` (Geist font family)

## API Endpoints

### POST /api/contact

Handles contact form submissions.

**Request body:**

```json
{
  "name": "string",
  "email": "string",
  "company": "string (optional)",
  "projectBrief": "string",
  "budget": "string",
  "startDate": "string (optional)"
}
```

### POST /api/leads

Handles lead magnet subscriptions.

**Request body:**

```json
{
  "name": "string",
  "email": "string"
}
```

### GET /api/contact & GET /api/leads

Retrieve submissions (protected with API key).

**Required header:**

```
x-api-key: your-admin-api-key
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

Build the production version:

```bash
npm run build
npm run start
```

## Adding Images

Place your images in the `public/` directory:

- `/public/images/case-studies/` - Case study images
- `/public/avatars/` - Testimonial avatars
- `/public/logos/` - Company logos
- `/public/og-image.jpg` - OpenGraph image (1200x630px)

## Production Checklist

- [ ] Update all personal information and content
- [ ] Add real case study images
- [ ] Set up email service for contact form (Formspree, SendGrid, etc.)
- [ ] Configure `ADMIN_API_KEY` environment variable
- [ ] Add Google Analytics or keep Vercel Analytics
- [ ] Update `metadataBase` URL in `app/layout.tsx`
- [ ] Add real social media links
- [ ] Test all forms and animations
- [ ] Run Lighthouse audit for performance

## License

MIT License - feel free to use this template for your own portfolio.
