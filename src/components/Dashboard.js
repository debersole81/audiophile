import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Search from './Search';
import Collection from './Collection';
import WishList from './WishList';
import Randomizer from './Randomizer';
import Header from './Header';

function Dashboard(props) {

    return (
        <div>
            <Link to='/collection'> Collection </Link> <br />
            <Link to='/wishlist'> Wish List </Link> <br />
            <Link to='/randomizer'> Randomizer </Link> <br />
            <Link to='/search'> Search </Link>
            <Switch>
                <Route exact path="/dashboard/collection" component={Collection} />
                <Route exact path="/dashboard/wishlist" component={WishList} />
                <Route exact path="/dashboard/randomizer" component={Randomizer} />
                <Route exact path="/dashboard/search" component={Search} />
            </Switch>
        </div>
    );

};

export default Dashboard;