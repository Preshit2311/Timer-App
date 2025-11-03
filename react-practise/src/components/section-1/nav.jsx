import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [open, setOpen] = useState(false);

  function click() {
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }

  return (
    <div>
      <div className="nav-bar flex justify-between px-5 bg-gray-600 text-white ">
        <div className="logo w-20">
          <img
            src="https://1000logos.net/wp-content/uploads/2021/10/Batman-Logo.png"
            alt=""
          />
        </div>
        <div className="option lg:flex gap-4 p-3 text-lg hidden   ">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
          
        </div>

        <div onClick={click} className="visible lg:hidden p-3">
          <Menu />
        </div>

        {open ? (
          <div className="option-m gap-4 p-3 w-50 text-lg lg:hidden h-full  absolute top-1 bg-white   text-black flex  flex-col  ">
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Nav;
