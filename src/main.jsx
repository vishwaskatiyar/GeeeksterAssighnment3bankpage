import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./component/header.jsx";
import MainContent from "./component/maincontent.jsx";
import Footer from "./component/fotter.jsx";
import "./index.css";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <MainContent />
    <Footer />
  </React.StrictMode>
);
