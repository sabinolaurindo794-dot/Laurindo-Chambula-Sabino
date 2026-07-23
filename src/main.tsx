import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { AuthProvider } from './context/AuthContext.tsx';
import { OnlineProvider } from './context/OnlineContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OnlineProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </OnlineProvider>
  </StrictMode>,
);
