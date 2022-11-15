import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import { Contact } from "./App";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";

import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
