import React from "react";
import Album from './Album';
import Collection from './Collection';
import Dashboard from './Dashboard';
import Header from './Header';
import Randomizer from './Randomizer';
import Search from './Search';
import WishList from './WishList';


function ProtectedComponents (props) {
   
    return(
        
        <h1>This is a protected route</h1>
    );
};

export default ProtectedComponents;