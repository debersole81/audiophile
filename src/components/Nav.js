import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Nav() {

    return (
        <nav className="nav">
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link to="/dashboard"><li>Dashboard</li></Link>
                <Link to="/dashboard/collection"><li>Collection</li></Link>
                <li>Wish List</li>
                <li>Randomizer</li>
                <li>Search</li>
            </ul>
        </nav>
    );
};

export default Nav;