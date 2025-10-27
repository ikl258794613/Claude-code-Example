# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React + Vite application using React 19.1.1 with Fast Refresh via @vitejs/plugin-react (Babel-based). Uses **rolldown-vite** (version 7.1.14) as the bundler instead of standard Vite.

## Development Commands

```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## Code Architecture

### Entry Point
- `index.html` - Root HTML with script tag pointing to `/src/main.jsx`
- `src/main.jsx` - Application entry, renders `<App />` in StrictMode

### Component Structure
- `src/App.jsx` - Root component
- `src/assets/` - Static assets (SVGs, images)
- CSS files are colocated with components (`App.css`, `index.css`)

### Build Configuration
- **Vite Config** (`vite.config.js`): Minimal config with React plugin only
- **ESLint Config** (`eslint.config.js`): Uses new flat config format with:
  - React Hooks recommended rules
  - React Refresh plugin for Vite
  - Custom rule: `no-unused-vars` allows uppercase/underscore prefixed variables
  - Ignores `dist/` directory

## Important Notes

- Uses **rolldown-vite** bundler (npm alias in package.json) instead of standard Vite
- React Compiler is NOT enabled (intentionally for performance reasons)
- ESLint uses the modern flat config format (not legacy `.eslintrc`)
- All source files use `.jsx` extension (not `.js` for components)
