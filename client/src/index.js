import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { reducers } from './reducers';
// for authentication
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./authConfig";

const msalInstance = new PublicClientApplication(msalConfig);

const store = configureStore({
  reducer: reducers
});

ReactDOM.render(
  <Provider store={store}>
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
  </Provider>,
  document.getElementById("root")
);