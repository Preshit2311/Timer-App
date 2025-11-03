import React from "react";
import { Link, Outlet } from "react-router-dom"; // ✅ important import

const Home = () => {
  return (
    <div className="">
      <h1 className="text-2xl mb-4">Welcome to Home Page</h1>

      <nav className="flex gap-4">
        <Link to="men" className="hover:underline">Men...</Link>
        <Link to="women" className="hover:underline">Women</Link>
      </nav>

      {/* 🔥 This is where nested routes (Men/Women) will appear */}
      <Outlet /> 
    </div>
  );
};

export default Home;
