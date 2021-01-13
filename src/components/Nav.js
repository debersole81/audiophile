import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Nav(props) {

    const handleViewDashTrue = () => { //sets viewDash in Dashboard component to true
        props.viewDashTrue();
    };

    const handleViewDashFalse = () => { //sets viewDash in Dashboard component to false
        props.viewDashFalse();
    };

    return (
        <nav className="nav">
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link to="/dashboard" onClick={handleViewDashTrue}><li>Dashboard</li></Link>
                <Link to="/dashboard/collection" onClick={handleViewDashFalse}><li>Collection</li></Link>
                <Link to="/dashboard/wishlist" onClick={handleViewDashFalse}><li>Wish List</li></Link>
                <Link to="/dashboard/randomizer" onClick={handleViewDashFalse}><li>Randomizer</li></Link>
                <Link to="/dashboard/search" onClick={handleViewDashFalse}><li>Search</li></Link>
            </ul>
        </nav>
    );
};

export default Nav;