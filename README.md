# MotionA Portfolio

Professional portfolio website for MotionA - Software Development Company.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css         # Global styles & theme
│   ├── layout.tsx          # Root layout with SEO
│   ├── page.tsx            # Main page
│   ├── sitemap.ts          # Dynamic sitemap
│   └── robots.ts           # Robots configuration
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Hero, Services, Projects, Founder, Testimonials, Contact
│   └── ui/                 # ThemeToggle, LanguageToggle, ProjectModal
├── context/                # Theme & Language providers
├── data/                   # Editable data files (projects, company, social, translations)
└── public/
    └── projects/           # Project images (cover.jpg, gallery images)
```

## ✏️ How to Edit Content

All content is managed through TypeScript files in `src/data/`:

### Add/Edit Projects
Edit `src/data/projects.ts`:
```typescript
{
  id: 'unique-id',
  slug: 'project-slug',
  title: 'Project Name',
  description: { en: '...', es: '...' },
  url: 'https://project.motiona.xyz',
  images: ['/projects/project-slug/cover.jpg', '/projects/project-slug/screenshot.jpg'],
  technologies: ['React', 'Python'],
  featured: true,
  status: 'active',
  year: 2025,
}
```

### Add Project Images
1. Create folder: `public/projects/[project-slug]/`
2. Add `cover.jpg` (main image shown on card)
3. Add additional images for carousel gallery

### Edit Company Info
Edit `src/data/company.ts` for company info, services, and testimonials.

### Edit Social Links
Edit `src/data/social.ts` for social media links.

### Edit Translations
Edit `src/data/translations.ts` for EN/ES text.

## 🎨 Theme Colors

- **Brown Derby**: #4E3629 (primary accent)
- **Maroon Oak**: #5C3D30 (secondary)
- **Seal Brown**: #321414 (dark accent)

## 🌐 Deployment

Optimized for Vercel deployment:

```bash
npm run build
```

## 📧 Contact Form

The contact form generates a `mailto:` link with pre-filled subject and body. No backend required.

---

Built with ❤️ by [Mateo Piedrabuena](https://mateopiedrabuena.motiona.xyz)
