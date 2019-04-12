import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="headerStyle">
      <h1>Todo List</h1>
      <Link className="linkStyle" to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link className="linkStyle" to="/about">
        About
      </Link>
    </header>
  );
}

export default Header;
