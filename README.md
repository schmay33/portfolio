# Nathan Schmidt's Portfolio

A modern, responsive portfolio website built with Astro, React, and Framer
Motion. Features a dark mode design, interactive animations, and a clean,
professional layout.

## 🚀 Features

- **Modern Design**: Clean, professional layout with dark mode as default
- **Interactive UI**: Smooth animations and transitions using Framer Motion
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Fast loading times and optimized assets
- **SEO Ready**: Includes meta tags and Open Graph protocol support
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA labels
- **Contact Form**: Professional contact form with validation
- **Project Showcase**: Interactive grid layout for project display
- **Skills Section**: Animated skill cards with categories
- **Custom Cursor**: Enhanced user experience with custom cursor effects
- **Particle System**: Interactive particle background in hero section

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build)
- **Components**: [React](https://reactjs.org)
- **Animations**: [Framer Motion](https://www.framer.com/motion)
- **Styling**: SCSS with modern CSS features
- **Deployment**: GitHub Pages
- **Version Control**: Git

## 📦 Project Structure

```
/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.scss
├── public/
│   └── projects/
│       └── [project-images]
├── astro.config.mjs
└── package.json
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/nschmdt/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview the production build**
   ```bash
   npm run preview
   ```

## 🎨 Customization

1. **Colors**: Edit the CSS variables in `src/layouts/Layout.astro`
2. **Content**: Update project information in `src/components/Projects.tsx`
3. **Skills**: Modify skill categories in `src/components/Skills.tsx`
4. **Contact**: Update social links in `src/components/Contact.tsx`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions. Any
push to the main branch will trigger a new deployment.

## 🌟 Performance

The site is optimized for performance with:

- Lazy loading images
- Optimized animations
- Minified assets
- Responsive images
- Efficient code splitting

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contact

Nathan Schmidt - [LinkedIn](https://linkedin.com/in/nathan-schmidt)

Project Link:
[https://github.com/nschmdt/portfolio](https://github.com/nschmdt/portfolio)
