import React from "react";
import { Route, Switch } from 'react-router-dom';
import Album from './Album';
import Collection from './Collection';
import Dashboard from './Dashboard';
import Header from './Header';
import Randomizer from './Randomizer';
import Search from './Search';
import WishList from './WishList';


function ProtectedComponents(props) {

    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={Dashboard} />
            </Switch>
        </div>
    );
};

export default ProtectedComponents;