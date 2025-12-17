# M Awais Raza - Full-Stack Developer Portfolio

A modern, fully-featured portfolio website showcasing projects, skills, and experience. Built with React, Tailwind CSS, Framer Motion, and Vite for optimal performance.

## ✨ Features

### 🎨 Design & UX
- **Modern Gradient Design**: Contemporary color scheme with blue and cyan gradients
- **Dark Mode Toggle**: Persistent dark/light mode with localStorage
- **Smooth Animations**: Framer Motion animations and transitions throughout
- **Responsive Design**: Fully responsive on mobile, tablet, and desktop
- **Interactive Elements**: Hover effects, scroll animations, and micro-interactions

### 🎯 Core Sections
- **Hero Section**: Eye-catching introduction with Spline 3D graphics and CTA buttons
- **About Me**: Personal introduction with mission and values
- **Skills Section**: Interactive skill cards with hover animations
- **Projects Showcase**: Filterable project cards with GitHub and demo links
- **Testimonials**: Client feedback and reviews section
- **Contact**: Quick contact options and call-to-action

### ⚡ Performance & PWA
- **Progressive Web App (PWA)**: Installable on mobile devices
- **Service Worker**: Offline functionality and caching strategy
- **Web Manifest**: App metadata and icons for standalone installation
- **Optimized Assets**: WebP images and code splitting for fast loading
- **Smooth Scrolling**: Native scroll behavior with progress indicator

### 🔧 Advanced Features
- **Scroll Progress Indicator**: Visual indicator of page scroll progress in header
- **Smooth Scroll Navigation**: Click navigation with smooth page scrolling
- **Context API**: Dark mode state management with ThemeContext
- **Custom Hooks**: useScrollProgress and useScrollToSection utilities
- **Performance Optimized**: Lazy loading and code splitting

## 📦 Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.0
- **Styling**: Tailwind CSS 4.1.11 with @tailwindcss/postcss
- **Animations**: Framer Motion 12.19.1
- **Icons**: React Icons 5.5.0
- **3D Graphics**: @splinetool/react-spline 4.0.0
- **Routing**: React Router DOM 7.6.2
- **Email**: emailjs-com 3.2.0
- **Package Manager**: npm

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project
cd My-Portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will open at `http://localhost:5174` (or the next available port).

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── AboutSection.jsx          # About me section
│   ├── Footer.jsx                # Enhanced footer with links
│   ├── HeroSection.jsx           # Hero with Spline 3D
│   ├── Projects.jsx              # Project showcase cards
│   ├── SkillsSection.jsx         # Skills grid
│   ├── TestimonialsSection.jsx   # Client testimonials
│   ├── Header/
│   │   ├── header.jsx            # Main header with nav
│   │   ├── ContactFormModal.jsx  # Contact form
│   │   └── mobileNav.jsx         # Mobile menu
├── context/
│   └── ThemeContext.jsx          # Dark mode state management
├── hooks/
│   └── useScroll.js              # Custom scroll hooks
├── data/
│   ├── projects.jsx              # Projects data
│   └── Skills.jsx                # Skills data
├── pages/
│   ├── Home.jsx                  # Home page
│   └── Layout.jsx                # Layout wrapper
├── App.jsx                       # Main app component
├── main.jsx                      # Entry point
└── index.css                     # Global styles

public/
├── manifest.json                 # PWA manifest
├── sw.js                         # Service worker
└── me.webp                       # Profile image
```

## 🎨 Customization

### Colors
Update Tailwind colors in `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: '#3b82f6',
      secondary: '#06b6d4',
    }
  }
}
```

### Dark Mode
The dark mode toggle is persistent and managed by ThemeContext. Users can switch themes using the sun/moon icon in the header.

### Projects Data
Edit `src/data/projects.jsx` to add/modify projects:
```jsx
{
  name: "Project Name",
  description: "Project description",
  tags: [{ name: "React", color: "text-blue-400" }],
  image: projectImage,
  sourceCodeLink: "https://github.com/...",
  demoLink: "https://demo.com",
}
```

### Skills Data
Edit `src/data/Skills.jsx` to manage skill categories and descriptions.

## 🔗 Links & Social Media

- **GitHub**: https://github.com/Awais-0
- **LinkedIn**: https://www.linkedin.com/in/awais-raza-88262022a/
- **Instagram**: https://www.instagram.com/1_awais_raza/

## ✅ Enhancements Made

- ✨ Modern gradient-based color scheme
- 🌙 Dark mode toggle with persistence
- 📱 Full PWA support with service worker
- 🎨 Enhanced animations and transitions
- 📊 Scroll progress indicator
- 🎯 Improved project cards with hover effects
- 👥 Added testimonials section
- 🔗 Smooth scroll navigation
- 📦 Optimized performance and code splitting
- 📝 Updated meta tags and SEO
- 🎪 Better footer with quick links
- 🚀 Responsive mobile-first design

## 📈 Performance

- Lighthouse Performance: Optimized for Core Web Vitals
- PWA Ready: Can be installed as standalone app
- Lazy Loading: Images and components loaded on demand
- Code Splitting: Automatic with Vite
- Caching: Service worker for offline support

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**M Awais Raza**
- Full-Stack Developer
- Portfolio: This project
- GitHub: [@Awais-0](https://github.com/Awais-0)
- LinkedIn: [Awais Raza](https://www.linkedin.com/in/awais-raza-88262022a/)

## 🙏 Credits

- **Spline**: 3D graphics and animations
- **Framer Motion**: Smooth animations and transitions
- **Tailwind CSS**: Modern utility-first CSS
- **React Icons**: Beautiful icon library
- **Vite**: Ultra-fast build tool

---

**Built with ❤️ by Muhammad Awais Raza**
