# Deployment Guide

## Overview
Your portfolio is now ready to be deployed. This guide covers various deployment options and best practices.

## 📋 Pre-Deployment Checklist

- [ ] Update all social media links in components
- [ ] Update project links and demo URLs
- [ ] Add real testimonials if available
- [ ] Update contact form email recipient
- [ ] Test dark mode on all browsers
- [ ] Verify responsive design on mobile
- [ ] Check all navigation links work
- [ ] Update meta tags with your information
- [ ] Test PWA installation
- [ ] Verify service worker functionality

## 🚀 Deployment Options

### 1. **Vercel (Recommended)**

**Advantages**: Optimal for Vite projects, automatic deployments, free tier generous

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# For production
vercel --prod
```

**Configuration**: Create `vercel.json` (optional):
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev"
}
```

### 2. **Netlify**

**Advantages**: Excellent free tier, form handling, great UI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

**Configuration**: Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. **GitHub Pages**

**Advantages**: Free, integrated with GitHub, no external accounts

```bash
# Update vite.config.js base:
# base: '/My-Portfolio/'

npm run build
# Deploy dist folder to gh-pages branch
```

### 4. **Firebase Hosting**

**Advantages**: Google integration, fast CDN, analytics

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Initialize
firebase init

# Deploy
firebase deploy
```

### 5. **AWS Amplify**

**Advantages**: Scalable, integrated services, free tier

```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Configure
amplify init

# Deploy
amplify publish
```

### 6. **Traditional Hosting (cPanel, etc.)**

```bash
# Build for production
npm run build

# Upload dist folder contents to public_html or your hosting directory
# Ensure proper rewrites for SPA routing
```

## 🔧 Environment Configuration

### Production Build Optimization

1. **Update vite.config.js**:
```js
export default {
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'framer-motion'],
        }
      }
    }
  }
}
```

2. **Create .env.production**:
```
VITE_API_URL=https://your-api.com
```

## 🔒 Security Measures

### 1. Add Security Headers
For services like Vercel/Netlify, configure headers:

**vercel.json**:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ]
}
```

### 2. Enable HTTPS
All services provide free HTTPS. Enable automatic redirects.

### 3. Add robots.txt
```
User-agent: *
Allow: /
Disallow: /admin/
Sitemap: https://yoursite.com/sitemap.xml
```

### 4. Add sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yoursite.com/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yoursite.com/#projects</loc>
    <priority>0.8</priority>
  </url>
</urlset>
```

## 📊 SEO Optimization

### 1. Meta Tags
Already added in `index.html`:
- Title and description
- Open Graph tags
- Twitter Card tags

### 2. Add Google Analytics
In `index.html` head:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 3. Submit to Search Engines
- Google Search Console
- Bing Webmaster Tools

## 📱 PWA Verification

After deployment, verify PWA functionality:

1. **Check manifest.json**:
   - Visit `https://yoursite.com/manifest.json`
   - Should be valid JSON

2. **Check Service Worker**:
   - Open DevTools → Application → Service Workers
   - Should show registered and activated

3. **Install Test**:
   - On mobile or desktop, look for install prompt
   - Install and test offline functionality

## 🚀 Performance Monitoring

### 1. Lighthouse Audit
```bash
# Local
npm run build
npm run preview
# Then audit with Chrome DevTools
```

### 2. Web Vitals Monitoring
Most hosting providers offer built-in monitoring.

### 3. Error Tracking
Consider services like:
- Sentry
- Rollbar
- LogRocket

## 📝 Post-Deployment

1. **Test in Production**:
   - Test all links and navigation
   - Verify dark mode works
   - Test on multiple devices
   - Check mobile responsiveness

2. **Monitor Performance**:
   - Check build logs
   - Monitor uptime
   - Track user engagement

3. **Maintain Updates**:
   - Keep dependencies updated
   - Monitor security alerts
   - Regular backups

## 🎯 Recommended Deployment Path

### For Beginners:
**Vercel** → Simple, automatic, excellent Vite support

### For More Control:
**GitHub Pages** → Free, integrated with code

### For Production Apps:
**Netlify** → Balanced features and ease

### For Enterprise:
**AWS Amplify** or **Firebase** → Full-featured, scalable

## 💡 Tips

1. **Staging Environment**: Deploy to staging first before production
2. **DNS Setup**: Point custom domain to your hosting provider
3. **SSL/TLS**: Always ensure HTTPS is enabled
4. **CDN**: Use CDN for static assets
5. **Caching**: Configure proper cache headers
6. **Monitoring**: Set up error tracking and analytics

## ❌ Common Issues & Solutions

### Issue: Blank page after deployment
**Solution**: Check if routing is configured for SPA (rewrite all routes to index.html)

### Issue: Service worker not registering
**Solution**: Ensure `sw.js` is in public folder and manifest.json is valid

### Issue: Dark mode not persisting
**Solution**: Check if localStorage is enabled and not blocked by browser

### Issue: Images not loading
**Solution**: Use absolute paths or check image file extensions match

### Issue: Slow performance
**Solution**: 
- Check bundle size with `npm run build --report`
- Enable gzip compression
- Optimize images
- Use code splitting

## 📞 Support

For deployment-specific issues:
- Vercel: https://vercel.com/support
- Netlify: https://support.netlify.com
- GitHub Pages: https://docs.github.com/en/pages
- Firebase: https://firebase.google.com/support

---

**Good luck with your deployment! 🚀**