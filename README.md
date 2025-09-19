
## Tech Stack

- **React 19** with TypeScript
- **Vite** for build tooling
- **React Router v7** for routing
- **AG Grid** for data visualization
- **TailwindCSS** for styling

## Getting Started

### Prerequisites

- Node.js 18+
- Yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   yarn install
   ```

3. Start the development server:
   ```bash
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint

## Project Structure

```
src/
├── @components/          # Reusable components
│   ├── ui/              # shadcn/ui components
│   └── common/          # Common shared components
├── @layouts/            # Page layouts
├── @types/              # TypeScript type definitions
├── @utils/              # Utility functions
├── @hooks/              # Custom React hooks
├── pages/               # Page components
├── routes/              # React Router configuration
└── features/            # Feature-specific code
```

This project is for assessment purposes.
