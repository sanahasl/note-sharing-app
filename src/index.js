import React from "react";
<<<<<<< HEAD
import ReactDOM from "react-dom/client";
import Class from "./pages/class.jsx";
import SignIn from "./pages/Index.jsx"
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
=======
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import SignIn from "./pages/Index"
>>>>>>> parent of ab2658a (Revert "added signin page")

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path='/' Component={SignIn}></Route>
         <Route path='class' Component={Class} />
      </Routes>
=======
        <Route path="app" Component={App} />
        <Route path="/" Component={SignIn}/>
        </Routes>
>>>>>>> parent of ab2658a (Revert "added signin page")
    </Router>
  </React.StrictMode>
);
