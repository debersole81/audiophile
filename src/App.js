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
  
  console.log(userData[0].username);

  const [state, setState] = useState({ //login form state manager
    username: "",
    password: "",
  });

  const loginSubmit = (e) => { //runs when submit button on login component is clicked
    e.preventDefault();
    console.log("clicked");
  };

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/login" />
            <Login loginSubmit={loginSubmit} />
            <Dashboard /> 
          <Route />
        </Switch>
      </div>
    </BrowserRouter>
  );
}


export default App;
