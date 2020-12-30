import React from "react";
import { useHistory, Link, Route, Switch } from "react-router-dom";
import Search from "./Search";
import Collection from "./Collection";
import WishList from "./WishList";
import Randomizer from "./Randomizer";

function Dashboard (props) {

    // //react router hooks    
    // const history = useHistory(); //history points to the useHistory hook

    // if(props.userAuth === false) { //prevents user from accessing dashboard without authenticating 
    //     history.push("/"); //if userAuth is false, redirects to login
    // }

    return(
        <div>
            <Switch>
                <Route exact path="/dashboard/collection" component={Collection} />
                <Route exact path="/dashboard/wishlist" component={WishList} />
                <Route exact path="/randomizer" />
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