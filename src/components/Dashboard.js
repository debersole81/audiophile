import React from "react";

function Dashboard (props, state) {

// const stateTest= () => {
//     console.log (loginState.loggedIn);

// };
console.log(state.loginState);

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