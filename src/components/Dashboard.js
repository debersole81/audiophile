import React, {useState} from "react";
import { Link, Route, Switch} from "react-router-dom";
import Search from "./Search";
import Collection from "./Collection";
import WishList from "./WishList";
import Randomizer from "./Randomizer";
import Header from "./Header";

function Dashboard (props) {

    // //react router hooks    
    // const history = useHistory(); //history points to the useHistory hook

    // if(props.userAuth === false) { //prevents user from accessing dashboard without authenticating 
    //     history.push("/"); //if userAuth is false, redirects to login
    // }

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
                <Header viewDashTrue={handleViewDashTrue} viewDashFalse={handleViewDashFalse} />
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
                <br />            
                <button onClick={props.logoutSubmit}>
                    Logout
                </button>
            </div>
        );
    
    }

    return( //if viewDash is false, remove links to each component on dashboard path
        <div>
            <Header viewDashTrue={handleViewDashTrue} viewDashFalse={handleViewDashFalse} />
            <Switch>
                <Route exact path="/dashboard/collection" component={Collection} />
                <Route exact path="/dashboard/wishlist" component={WishList} />
                <Route exact path="/dashboard/randomizer" component={Randomizer} />
                <Route exact path="/dashboard/search" component={Search} />
            </Switch>
            <br />            
            <button onClick={props.logoutSubmit}>
                Logout
            </button>
        </div>
    );
};

export default Dashboard;