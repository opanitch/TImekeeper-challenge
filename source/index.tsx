import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/es/integration/react';

// Styles First!
import 'ASSETS/styles/app.css';

import { persistor, store } from 'API/data/store';

import App from './app';

const renderAnchor = document.getElementById('timekeeper');

renderAnchor &&
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <React.StrictMode>
          <Router>
            <App />
          </Router>
        </React.StrictMode>
      </PersistGate>
    </Provider>,
    renderAnchor
  );
