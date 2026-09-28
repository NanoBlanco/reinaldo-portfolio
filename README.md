# React Standard

Standard template for React + TypeScript + Vite projects.

## Requirements

- Node.js 24+
- npm

## Project setup

Install dependencies:

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

## Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Quality

Run ESLint:

```bash
npm run lint
```

Check formatting:

```bash
npm run format:check
```

Apply formatting:

```bash
npm run format
```

## Structure

```text
react-standard/
├── public/
├── src/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Dependencies

Application dependencies should be added to the project only when required.

Development tools such as ESLint and Prettier are installed as local development dependencies.

This template does not include application-level libraries such as React Router, Axios, MUI, TanStack Query, or Zustand. Add them only when required by the project.
