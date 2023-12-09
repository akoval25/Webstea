import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { LangProvider } from './scripts/LangContext.js';
import App from "./components/App.js";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/Webstea" element={<App />}>
      <Route path="/Webstea/en" element={<App />} />
      <Route path="/Webstea/ua" element={<App />} />
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LangProvider>
    <RouterProvider router={router} />
    </LangProvider>
  </React.StrictMode>
);




// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
// <React.StrictMode>
//   <LangProvider>
  
//     <App/>

//     <RouterProvider router={router} />
//     {/* <Router>
//       <Routes>
//         <Route path="/Webstea/en" element={<App />} />
//         <Route path="/Webstea/ua" element={<App />} />
//       </Routes>
//       </Router>   */}
//   </LangProvider>
//   </React.StrictMode>
//   // <React.StrictMode>

//   //   <LangProvider>
//   //   <div>
//   //     <App/>

//   //   </div>
//   //   </LangProvider>

//   // </React.StrictMode>
// );

// reportWebVitals();

