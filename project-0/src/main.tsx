import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

// Use createRoot instead of ReactDOM.createRoot
createRoot(rootElement as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
