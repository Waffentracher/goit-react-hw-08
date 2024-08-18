import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'; // Додаємо імпорт BrowserRouter
import { store } from './redux/store';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter> {/* Обгортаємо App в BrowserRouter */}
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
