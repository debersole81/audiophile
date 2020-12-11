import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";


function App () {
  
  const userDatabase = [ //user test database
    {
      id: 1,
      username: "Testuser",
      password: "TestPassword",
    },          
  ];
  
  const [loginState, setLoginState] = useState([{ //login form state manager. returns an array of user input
    username: "",
    password: "",
  }]);

  const loginHandleChange = (e) => { //handles changes to login form fields based on user input
    setLoginState({
      ...loginState,
      [e.target.name]: [e.target.value],
    });
  };
  
  const loginSubmit = (e) => { //runs when submit button on login component is clicked.
    e.preventDefault();

    //username and password variables and arrays
    const loginUsername = loginState.username; //retains the username input value from the login form
    const loginPassword = loginState.password; //retains the password input value from the login form 
    
    console.log([loginUsername, loginPassword]);
    
  };

  const loginVariables = { //holds state and props variables for passing to child components
    loginSubmit: loginSubmit,
    loginState: loginState,
    loginHandleChange: loginHandleChange
  };

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/login" />
            <Login {...loginVariables} />
            <Dashboard /> 
          <Route />
        </Switch>
      </div>
    </BrowserRouter>
  );
}


export default App;
