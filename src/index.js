import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './Store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
//To connect your React app to Redux, you need to wrap the main component (App) with the Provider from react-redux.
// The Provider component makes the Redux store available to the rest of your app.
root.render(
  <Provider store={store}>  {/* Wrap the App with Provider */}
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
