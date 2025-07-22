import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Index, NotFound } from '@/pages';

/// <reference types="vite/client" />

createRoot(document.getElementById("root")!).render(<App />);
