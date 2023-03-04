import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import "./styles/globals.css";

import RoutesApp from './routes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GeneralContextProvider } from './contexts/generalContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <BrowserRouter>
      <GeneralContextProvider>
        <RoutesApp />
      </GeneralContextProvider>
    </BrowserRouter>
    <ToastContainer />
  </>
);
