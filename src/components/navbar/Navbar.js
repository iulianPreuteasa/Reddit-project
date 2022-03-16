import React from "react";
import logo from "../../Images/logo.png";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="nav">
      <logo>
        <img src={logo} />
        <h3>Reddit Iulian</h3>
      </logo>
      <searchbar className="search">
        <input type="search" id="searchBar" />
        <button> Search</button>
      </searchbar>
      <dropdown className="dropdown"></dropdown>
    </div>
  );
};

export default NavBar;
