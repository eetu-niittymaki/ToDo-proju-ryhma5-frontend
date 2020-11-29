import React from "react";
import { Link } from "react-router-dom";
import "../../App.sass";

function Header() {
  return (
    <header style={headerStyle}>
      <h1 className="title">Todo List</h1>
      <div className="headerLink">
      <Link to="/">Home</Link> |&nbsp;<Link to="/TodoCalendar">Calendar</Link>{" "}
        | <Link to="/about">About</Link>
      </div>
    </header>
  );
}

const headerStyle = {
  color: "#fff",
  textAlign: "center",
  padding: "20px",
};

export default Header;
