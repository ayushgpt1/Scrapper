import React from "react";
import { Link } from "react-router-dom";
import SendEmergencyMessage from "./SendEmergencyMessage";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/detection">Detection</Link>
        </li>
        <li>
          <Link to="/prevention">Prevention</Link>
        </li>
        <li>
          <Link to="/support">Support</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
