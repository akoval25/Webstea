import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { LangProvider } from './scripts/LangContext.js';
import App from "./components/App.js";


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
    path: "/Webstea",
    element: <App />,
  }, 
  {
    path: "/Webstea/en",
    element: <App />,
  },
  {
    path: "/Webstea/ua",
    element: <App />,
  },
  {
    path: "/",
    element: <App />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
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

reportWebVitals();

