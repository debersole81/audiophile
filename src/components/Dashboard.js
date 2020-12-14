import React from "react";

function Dashboard (props) {
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