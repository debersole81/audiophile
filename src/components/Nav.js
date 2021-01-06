import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Nav() {

    return (
        <nav className="nav">
            <h3>Logo</h3>
            <ul className="nav-links">
                <li>Dashboard</li>
                <li>Collection</li>
                <li>Wish List</li>
                <li>Randomizer</li>
                <li>Search</li>
            </ul>
        </nav>
    );
};

export default Nav;