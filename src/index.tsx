import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
// import { Provider } from 'react-redux';
// import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <Provider store={store}>
  <Suspense fallback='...loading'>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>
  // </Provider>
);