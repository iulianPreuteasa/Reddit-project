import React from "react";
import logo from "../../Images/logo.png";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="nav">
      <logo className="logoNav">
        <img src={logo} className="logoImg" />
        <h4 className="titleNav">Reddit Iulian</h4>
      </logo>
      <searchbar className="search">
        <input
          type="search"
          className="searchBar"
          id="searchBar"
          placeholder="Find an article"
        />
        <button className="searchButton"> Search</button>
      </searchbar>
      <sideMenu className="sideMenu">
        <h2>title 1</h2>
        <h2>title 2</h2>
        <h2>title 3</h2>
        <h2>title 4</h2>
        <h2>title 5</h2>
        <h2>title 6</h2>
        <h2>title 7</h2>
      </sideMenu>
    </div>
  );
};

export default NavBar;
