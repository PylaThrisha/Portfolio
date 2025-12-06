# Pyla Thrisha - Portfolio Website

A professional, modern, and fully responsive portfolio website showcasing my work as a Computer Science Engineering student specializing in Full Stack Development and Machine Learning.

## Features

- **Responsive Design**: Mobile-first approach with seamless experience across all devices
- **Smooth Navigation**: Single-page application with smooth scrolling and active section highlighting
- **Interactive UI**: Engaging animations and hover effects throughout
- **Modern Tech Stack**: Built with React, TypeScript, Vite, and Tailwind CSS
- **Performance Optimized**: Fast loading times and optimized assets
- **Accessible**: Semantic HTML and proper ARIA labels for accessibility

## Sections

- **Hero**: Introduction with profile image and call-to-action buttons
- **About**: Overview of my professional approach and values
- **Skills**: Categorized display of technical and soft skills with visual indicators
- **Experience**: Timeline view of professional internships and projects
- **Projects**: Featured projects with detailed descriptions and GitHub links
- **Education**: Academic background and achievements
- **Certifications**: Professional certifications and training
- **Contact**: Multiple ways to connect with social links

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment Ready**: Production build optimized

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/PylaThrisha/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Build for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist` directory.

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Customization

To customize the portfolio for your own use:

1. Update personal information in `src/data/portfolioData.ts`
2. Replace the profile image at `public/trisha.jpg`
3. Update the resume file at `public/resume_pyla_thrisha.pdf`
4. Modify color schemes in Tailwind config if desired

## Project Structure

```
portfolio/
├── public/
│   ├── trisha.jpg              # Profile image
│   └── resume_pyla_thrisha.pdf # Resume PDF
├── src/
│   ├── components/             # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Education.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── portfolioData.ts    # All content data
│   ├── App.tsx                 # Main app component
│   ├── index.css               # Global styles
│   └── main.tsx                # App entry point
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Optimized images and assets
- Code splitting for optimal loading

## License

This project is open source and available under the MIT License.

## Contact

**Pyla Thrisha**
- Email: pylathrisha@gmail.com
- LinkedIn: [linkedin.com/in/pyla-thrisha](https://www.linkedin.com/in/pyla-thrisha/)
- GitHub: [github.com/PylaThrisha](https://github.com/PylaThrisha)

---

Built with passion using React, TypeScript, and Tailwind CSS
