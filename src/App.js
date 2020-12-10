import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";


function App () {
  
  const userData = [ //user test data
    {
      id: 1,
      username: "Testuser",
      password: "TestPassword",
    },
  ];
  
  console.log(userData);

  const [loginState, setLoginState] = useState([{ //login form state manager
    username: "",
    password: "",
  }]);

  console.log(loginState);

  const loginHandleChange = (e) => { //handles changes to login form fields based on user-submitted data
    setLoginState({
      ...loginState,
      [e.target.name]: [e.target.value],
    });
  };
  
  const loginSubmit = (e) => { //runs when submit button on login component is clicked.
    e.preventDefault();

    
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
