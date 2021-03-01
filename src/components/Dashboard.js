import React from "react";
import { Link, Route, Switch} from "react-router-dom";
import Search from "./Search";
import Collection from "./Collection";
import WishList from "./WishList";
import Randomizer from "./Randomizer";
import Header from "./Header";

function Dashboard (props) {


    const [viewDash, setViewDash] = useState(true); //dashboard state manager

    const handleViewDashTrue = () => { //sets viewDash to true
        setViewDash(true);
    };

    const handleViewDashFalse = () => { //sets viewDash to false
        setViewDash(false);
    };

    if(viewDash) { //if viewDash is true, render links to each component on dashboard path.
        return(
            <div>
                <Header viewDashTrue={handleViewDashTrue} viewDashFalse={handleViewDashFalse} logoutSubmit={props.logoutSubmit} />
                <Link to="/dashboard/collection" onClick={handleViewDashFalse}> Collection </Link> <br />
                <Link to="/dashboard/wishlist" onClick={handleViewDashFalse}> Wish List </Link> <br />
                <Link to="/dashboard/randomizer" onClick={handleViewDashFalse}> Randomizer </Link> <br />
                <Link to="/dashboard/search" onClick={handleViewDashFalse}> Search </Link>
                <Switch>
                    <Route exact path="/dashboard/collection" component={Collection} />
                    <Route exact path="/dashboard/wishlist" component={WishList} />
                    <Route exact path="/dashboard/randomizer" component={Randomizer} />
                    <Route exact path="/dashboard/search" component={Search} />
                </Switch>
            </div>
        );
    
    }

    return( //if viewDash is false, remove links to each component on dashboard path
        <div>
            <Header viewDashTrue={handleViewDashTrue} viewDashFalse={handleViewDashFalse} logoutSubmit={props.logoutSubmit} />
            <Switch>
                <Route exact path="/dashboard/collection" component={Collection} />
                <Route exact path="/dashboard/wishlist" component={WishList} />
                <Route exact path="/dashboard/randomizer" component={Randomizer} />
                <Route exact path="/dashboard/search" component={Search} />
            </Switch>
            <br />            
        </div>
    );
};

export default Dashboard;