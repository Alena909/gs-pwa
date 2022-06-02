import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/newsletter">Newsletter</Link>
      <Link to="/calendar">Calendar</Link>
      <Link to="/activities">Activities</Link>
    </nav>
  );
};

export default Navbar;
