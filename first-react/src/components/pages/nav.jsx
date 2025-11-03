import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    < div className="nav  flex  justify-between px-5 py-5 bg-blue-600 m-5 text-white ">
      <div className="logo text-3xl font-bold">Preshit</div>
      <div className="option flex gap-5 text-2xl font-semibold  ">
        <Link to="/">Home</Link>
        <Link to="About">About</Link>
        <Link to="Contact">Contact</Link>
      </div>
    </div>
  );
};

export default Nav;
