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
                <Link to="/dashboard/wishlist"><li>Wish List</li></Link>
                <Link to="/dashboard/randomizer"><li>Randomizer</li></Link>
                <Link to="/dashboard/search"><li>Search</li></Link>
            </ul>
        </nav>
    );
};

export default Nav;