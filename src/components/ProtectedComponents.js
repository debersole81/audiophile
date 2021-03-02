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

    console.log('Render: Protected Components');

    return (
        <div>
            <Header logoutSubmit={props.logoutSubmit}/>
            <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route exact path='/collection' component={Collection} />
                <Route exact path='/wishlist' component={WishList} />
                <Route exact path='/randomizer' component={Randomizer} />
                <Route exact path='/search' component={Search} />
                <Route exact path='/album' component={Album} />
            </Switch>
        </div>
    );
};

export default ProtectedComponents;