import React from "react";
import ReactDOM from "react-dom/client";
import Class from "./pages/class.jsx";
import SignIn from "./pages/Index.jsx"
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' Component={SignIn}></Route>
         <Route path='class' Component={Class} />
      </Routes>
    </Router>
  </React.StrictMode>
);
