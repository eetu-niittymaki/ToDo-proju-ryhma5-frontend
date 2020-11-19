import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>TODO LIST</h1>
      <div className="headerLink">
        <Link /* style={linkStyle} */ to="/">Home</Link> |{" "}
        <Link /* style={linkStyle}*/ to="/about">About</Link>
      </div>
    </header>
  );
}

const headerStyle = {
  color: "#fff",
  textAlign: "center",
  padding: "20px",
};

/* const linkStyle = {
  color: "#fff",
  textDecoration: "none",
}; */

export default Header;
