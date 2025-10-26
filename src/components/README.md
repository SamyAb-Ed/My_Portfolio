# Components Folder

This folder contains reusable React components for the portfolio project.

## Structure

```
components/
├── Layout/          # Layout components (Header, Footer, etc.)
├── UI/             # UI components (Button, Card, etc.)
├── Forms/          # Form components
└── Common/         # Common shared components
```

## Usage

Import components in your pages:

```jsx
import Button from "../components/UI/Button";
import Header from "../components/Layout/Header";
```

## Component Guidelines

- Use functional components with hooks
- Include PropTypes for type checking
- Follow consistent naming conventions
- Include CSS modules for styling
- Export as default
