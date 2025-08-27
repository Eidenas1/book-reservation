import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { BooksContextProvider } from './contexts/BooksContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <BooksContextProvider>
        <App />
      </BooksContextProvider>
    </BrowserRouter>
  </StrictMode>
);
