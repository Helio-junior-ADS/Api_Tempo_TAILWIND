import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/card"}>card</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
