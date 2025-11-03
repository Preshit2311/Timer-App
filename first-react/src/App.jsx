import React from "react";
import {  Route ,Routes } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Nav from "./components/pages/nav";
import Mens from "./components/pages/mens";
import Women from "./components/pages/women";

const App = () => {
  return (
    <div>
<Nav/>
  <Routes>
  <Route path="/" element={<Home />}>
    <Route path="men" element={<Mens />} />
    <Route path="women" element={<Women />} />
  </Route>

  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>

    </div>
  );
};

export default App;
