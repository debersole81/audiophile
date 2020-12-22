import React from "react";
import { useHistory } from "react-router-dom";

function Dashboard (props) {

    //react router hooks    
    const history = useHistory();

    if(props.userAuth === false) { //prevents user from accessing dashboard without authenticating 
        history.push("/"); //if userAuth is false, redirects to login
    }

    return(
        <div>
            <h1>This is the dashboard</h1>       
            <button onClick={props.logoutSubmit}>
                Logout
            </button>
        </div>
    );
};

export default Dashboard;