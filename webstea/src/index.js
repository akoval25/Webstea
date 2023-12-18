import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { LangProvider } from './scripts/LangContext.js';
import App from "./components/App.js";
import LandingApp from "./components/LandingApp.js";

import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';

const router = createHashRouter([
  {
    path: "/en",
    element: <App />,
  },
  {
    path: "/ua",
    element: <App />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/ua/landing-page",
    element: <LandingApp />
  },
  {
    path: "/en/landing-page",
    element: <LandingApp />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LangProvider>
    <RouterProvider router={router} />
    </LangProvider>
  </React.StrictMode>
);


reportWebVitals();

