# Quick Reference Guide

## 🚀 Quick Start Commands

```bash
# Install dependencies (already done)
npm install

# Start development server
npm run dev
# → Opens at http://localhost:5174

# Build for production
npm run build
# → Creates optimized dist/ folder

# Preview production build
npm run preview
# → Test production build locally

# Lint code
npm run lint
# → Check code quality
```

## 📁 Important Folders

```
src/
├── components/        # React components
├── context/          # State management (ThemeContext)
├── hooks/            # Custom hooks (useScroll)
├── data/             # Static data (projects, skills)
└── pages/            # Page components

public/
├── manifest.json     # PWA metadata
├── sw.js             # Service worker
└── me.webp           # Your profile image

dist/                 # Production build output
```

## 🎨 Quick Customization

### Update Social Links
File: `src/components/Header/header.jsx`
```jsx
socialLinks: [
  { icon: FiGithub, href: "YOUR_GITHUB_URL" },
  ...
]
```

### Change Colors
File: `tailwind.config.js`
```js
primary: '#3b82f6',      // Main color
secondary: '#06b6d4',    // Accent color
```

### Add New Project
File: `src/data/projects.jsx`
```jsx
{
  name: "Project Name",
  description: "Description",
  tags: [{ name: "Tech", color: "text-blue-400" }],
  image: projectImage,
  sourceCodeLink: "github-url",
  demoLink: "demo-url",
}
```

### Update Profile
File: `public/me.webp` - Replace with your image
File: `index.html` - Update title and meta tags

## 🔧 Configuration Files

- **`vite.config.js`** - Build configuration
- **`tailwind.config.js`** - CSS framework setup
- **`postcss.config.js`** - CSS processing
- **`eslint.config.js`** - Code linting
- **`package.json`** - Dependencies & scripts
- **`index.html`** - HTML template & PWA setup

## 🌙 Dark Mode

**How it works:**
1. Toggle button in header (sun/moon icon)
2. Stores preference in localStorage
3. Applies class to html element
4. Tailwind `dark:` classes handle styling

**How to customize:**
- Edit colors in Tailwind config
- Update className selectors with `dark:` prefix

## 📱 Responsive Breakpoints

Tailwind default breakpoints (all supported):
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Example: `md:text-4xl` = text-4xl on medium screens and up

## 🎬 Animation Library

**Framer Motion** used for animations:
- `whileHover` - On hover state
- `whileTap` - On click/tap
- `animate` - Continuous animation
- `transition` - Animation timing
- `initial` - Starting state
- `viewport` - Scroll triggers

## 🔗 Important Links in Code

Header Navigation:
```jsx
const navLinks = ["Home", "About", "Projects", "Skills"]
// Links to sections with id="home", id="about", etc.
```

## 🚨 Troubleshooting

| Issue | Solution |
|-------|----------|
| Dark mode not working | Check localStorage enabled |
| Images not showing | Verify image path in data files |
| Service worker error | Check public/sw.js exists |
| Build errors | Run `npm install` again |
| Port 5173 in use | Dev server auto-switches to 5174 |
| Styles not applying | Clear browser cache |

## 📊 Performance Tips

1. Use WebP images instead of PNG/JPG
2. Lazy load components with React.lazy
3. Optimize images before upload
4. Monitor bundle size with `npm run build`
5. Use CSS classes instead of inline styles

## 🔐 Security Checklist

- [ ] Update social media links
- [ ] Verify contact form email
- [ ] Check external links are HTTPS
- [ ] Review meta tags
- [ ] Test form submission
- [ ] Verify service worker

## 📱 Mobile Testing

```bash
# Build for testing
npm run build

# Preview on local network
npm run preview -- --host

# Then visit from mobile:
# http://YOUR_IP:4173
```

## 📦 Deployment Quick Links

- **Vercel**: `vercel deploy`
- **Netlify**: `netlify deploy --prod`
- **GitHub Pages**: Push to gh-pages branch
- **Firebase**: `firebase deploy`

## 🆘 Common Errors

**"Port in use"**
→ Dev server auto-switches ports (5173 → 5174 → etc)

**"Module not found"**
→ Check import paths (case-sensitive on Linux/Mac)

**"Dark mode not persisting"**
→ Check localStorage isn't blocked

**"Images 404"**
→ Verify image exists in public/ or correct import path

**"Service worker not registered"**
→ Check public/sw.js exists and manifest.json is valid

## 🎯 File Locations Quick Reference

| Item | Location |
|------|----------|
| Logo/Avatar | `public/me.webp` |
| Projects | `src/data/projects.jsx` |
| Skills | `src/data/Skills.jsx` |
| Colors | `tailwind.config.js` |
| Dark Mode | `src/context/ThemeContext.jsx` |
| Header | `src/components/Header/header.jsx` |
| Hero | `src/components/HeroSection.jsx` |
| About | `src/components/AboutSection.jsx` |
| Footer | `src/components/Footer.jsx` |
| CSS | `src/index.css` |
| HTML | `index.html` |

## 🚀 Deploy in 3 Steps

1. **Build**: `npm run build`
2. **Choose Host**: Vercel/Netlify/GitHub Pages
3. **Deploy**: Follow host-specific instructions

That's it! Your site is live! 🎉

---

**For more info, see README.md, ENHANCEMENTS.md, or DEPLOYMENT.md**