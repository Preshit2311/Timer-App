import React from "react";
import Home from "./components/section-1/home";
import About from "./components/section-1/pages/About";
import Contact from "./components/section-1/pages/Contact";
import Inva from "./components/section-1/pages/Inva";
import Nav from "./components/section-1/nav";
import Navbar2 from "./components/section-1/pages/Navbar2";
import Men from "./components/section-1/pages/men";
import Women from "./components/section-1/pages/Women";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Nav />
      <Navbar2/>
      <Routes>
        <Route  path="/" element={<Home /> }/>

<Route path="/About" element={<About />}>
    <Route path="/About/Men" element={<Men/>} />
    <Route path="/About/Women" element={<Women/>} />
  </Route>

        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Inva />} />
      </Routes>
    </div>
  );
};

export default App;
