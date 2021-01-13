import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Nav(props) {

    const handleDashClickTrue = () => { //sets viewDash in Dashboard component to true
        console.log(props);
        props.onChangeTrue();
    };

    const handleDashClickFalse = () => { //sets vieDash in Dashboard component to false
        console.log("setting false");
        props.onChangeFalse();
    };

    return (
        <nav className="nav">
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link to="/dashboard" onClick={handleDashClickTrue}><li>Dashboard</li></Link>
                <Link to="/dashboard/collection" onClick={handleDashClickFalse}><li>Collection</li></Link>
                <Link to="/dashboard/wishlist" onClick={handleDashClickFalse}><li>Wish List</li></Link>
                <Link to="/dashboard/randomizer" onClick={handleDashClickFalse}><li>Randomizer</li></Link>
                <Link to="/dashboard/search" onClick={handleDashClickFalse}><li>Search</li></Link>
            </ul>
        </nav>
    );
};

export default Nav;