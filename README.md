# Futuristic Developer Portfolio

A modern, futuristic developer portfolio built with React and Vite, featuring a circuit grid background, smooth animations, and a sleek dark/light theme toggle.

## Features

- **Animated Circuit Grid Background** - Dynamic circuit board pattern with pulsing animations
- **Dark/Light Theme Toggle** - Switch between dark circuit grid and clean white theme
- **Pill-Shaped Navigation** - Modern pill-shaped navbar with smooth scrolling
- **Futuristic Typography** - Orbitron and Rajdhani fonts for a robotic aesthetic
- **Project Showcase** - Cards with thumbnail images and technology logo badges
- **Skills Display** - Technology logos organized by category
- **Icon-Only Social Links** - Clean, minimal social media buttons
- **Resume Download** - Prominent resume download button
- **Fully Responsive** - Works perfectly on all device sizes
- **Smooth Animations** - Fade-in, slide, and hover effects throughout

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` to view your portfolio.

### Build for Production

```bash
npm run build
```

## Customization Guide

### 1. Personal Information

Update your details in the following files:

#### Hero Section
[src/components/Hero.jsx](src/components/Hero.jsx)
- Line 10: Replace `YOUR NAME`
- Line 13: Replace `FULL STACK DEVELOPER` with your title
- Lines 15-17: Update your bio/description

#### Contact Section
[src/components/Contact.jsx](src/components/Contact.jsx)
- Line 8: Update GitHub URL
- Line 21: Update Email address
- Line 30: Update Twitter URL
- Line 39: Update LinkedIn URL
- Line 88: Replace `Your Name` in footer

### 2. Projects

Edit [src/components/Projects.jsx](src/components/Projects.jsx) (starting at line 6):

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description...',
    thumbnail: '/images/project1.jpg', // Add your image to public/images/
    technologies: ['react', 'nodejs', 'mongodb'], // Available logos listed below
    githubUrl: 'https://github.com/yourusername/project',
    liveUrl: 'https://yourproject.com'
  },
  // Add more projects...
]
```

**Available Technology Logos:**
react, nodejs, mongodb, express, nextjs, typescript, tailwind, postgresql, python, django, docker, aws, vue, firebase, graphql

### 3. Skills

Edit [src/components/Skills.jsx](src/components/Skills.jsx) to customize your skills.

Add or remove skills in each category (Frontend, Backend, Database, DevOps & Tools).

### 4. Resume

Place your resume PDF in the `public` folder and name it `resume.pdf`:

```bash
public/resume.pdf
```

Or update the path in [src/components/Contact.jsx](src/components/Contact.jsx) at line 74.

### 5. Project Images

Add your project thumbnail images to:

```
public/images/project1.jpg
public/images/project2.jpg
public/images/project3.jpg
```

Or update the paths in [src/components/Projects.jsx](src/components/Projects.jsx).

### 6. Theme Colors

Customize the color scheme in [src/App.css](src/App.css):

**Dark Theme** (lines 3-14):
```css
:root[data-theme='dark'] {
  --accent-primary: #00d9ff; /* Main accent color (cyan) */
  --accent-secondary: #7b2cbf; /* Secondary accent (purple) */
  /* Modify these to change the theme */
}
```

**Light Theme** (lines 16-27):
```css
:root[data-theme='light'] {
  --accent-primary: #0080ff; /* Main accent color (blue) */
  /* Modify these to change the theme */
}
```

## Project Structure

```
portfolio1.0/
├── public/
│   ├── images/          # Project thumbnails
│   └── resume.pdf       # Your resume
├── src/
│   ├── components/
│   │   ├── CircuitBackground.jsx  # Animated background
│   │   ├── Navbar.jsx             # Navigation bar
│   │   ├── Hero.jsx               # Landing section
│   │   ├── Projects.jsx           # Projects showcase
│   │   ├── Skills.jsx             # Skills display
│   │   └── Contact.jsx            # Contact & social links
│   ├── App.jsx          # Main app component
│   ├── App.css          # Global styles & theme
│   └── index.css        # Base styles
└── package.json
```

## Technologies Used

- React 19
- Vite 7
- CSS3 with CSS Variables
- Google Fonts (Orbitron, Rajdhani)
- Devicons for technology logos

## Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install -D gh-pages
```

2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## Tips

- Keep project descriptions concise (1-2 sentences)
- Use high-quality project screenshots (recommended: 600x400px)
- Optimize images before adding them
- Test the portfolio on mobile devices
- Update the favicon in the `public` folder

## License

Feel free to use this template for your own portfolio!

---

**Built with ❤️ using React + Vite**
