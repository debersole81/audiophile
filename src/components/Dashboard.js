import React from "react";
import { useHistory } from "react-router-dom";

function Dashboard (props) {

//react router hooks    
const history = useHistory();

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