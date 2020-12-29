import React from "react";
import { useHistory, Link, Route, Switch } from "react-router-dom";

function Dashboard (props) {

    // //react router hooks    
    // const history = useHistory(); //history points to the useHistory hook

    // if(props.userAuth === false) { //prevents user from accessing dashboard without authenticating 
    //     history.push("/"); //if userAuth is false, redirects to login
    // }

    return(
        <div>
            <h1>This is the dashboard</h1>       
            <ul>
                <li>Collection</li>
                <li>Wish List</li>
                <li>Randomizer</li>
                <li>Search</li>
            </ul>
            <button onClick={props.logoutSubmit}>
                Logout
            </button>
        </div>
    );
};

export default Dashboard;