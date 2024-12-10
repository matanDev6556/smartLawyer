import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ErrorBoundary } from './components/ErrorBoundary';
import './index.css';
import { AccessibilityProvider } from './context/AccessibilityContext.tsx';

createRoot(document.getElementById('root')!).render(
  <AccessibilityProvider>
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>
  </AccessibilityProvider>
);
