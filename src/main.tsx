import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import { OrdersProvider } from './contexts/ordersContext.tsx';





createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OrdersProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </OrdersProvider>
  </StrictMode>,
)
