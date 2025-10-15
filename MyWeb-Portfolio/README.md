# Suttanop Chanah Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite.

## Features

- **Responsive Design** - Works on all devices
- **Interactive Contact Form** - Powered by EmailJS
- **3D Effects** - Interactive UI components
- **Dark Theme** - Modern dark design
- **Performance Optimized** - Fast loading with Vite

## Setup Instructions

### 1. Clone and Install
```bash
git clone https://github.com/RookieJoel/MyWeb-Portfolio.git
cd MyWeb-Portfolio/MyWeb-Portfolio
npm install
```

### 2. Environment Variables
Copy the example environment file and configure your settings:
```bash
cp .env.example .env
```

Edit `.env` with your actual values:
```bash
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id  
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Contact Information
VITE_MY_EMAIL=your-email@example.com

# Social Media Links
VITE_GITHUB_URL=https://github.com/yourusername
VITE_LINKEDIN_URL=https://linkedin.com/in/yourusername
```

### 3. EmailJS Setup
1. Go to [EmailJS](https://www.emailjs.com/)
2. Create an account and service
3. Create an email template using the provided template in `EMAILJS_SETUP.md`
4. Get your Service ID, Template ID, and Public Key
5. Add them to your `.env` file

### 4. Run Development Server
```bash
npm run dev
```

### 5. Build for Production
```bash
npm run build
```

## Tech Stack

- **React 19** - UI Framework  
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **EmailJS** - Contact Form
- **Lucide React** - Icons

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
