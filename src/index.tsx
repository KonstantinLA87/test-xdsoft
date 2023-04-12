import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { setupStore } from './app/store/store';

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <Suspense fallback='...loading'>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </Provider>
);