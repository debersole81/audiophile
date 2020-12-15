import React, { useState } from "react";
import { BrowserRouter, Switch, Route,  } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";


function App () {
  
  const userDatabase = [ //user test database
    {
      id: 1,
      username: "Testuser",
      password: "TestPassword",
    },
    {
      id: 2,
      username: "Testuser2",
      password: "TestPassword2",
    },          
  ];
  
  //managing user authentication
  //user login
  const [loginState, setLoginState] = useState([{ //login form state manager. returns an array of user input
    username: "",
    password: "",
    loggedIn: false,
  }]);

  const loginHandleChange = (e) => { //handles changes to login form fields based on user input
    setLoginState({
      ...loginState,
      [e.target.name]: [e.target.value],
    });
  };
  
  const loginSubmit = (e) => { //runs when submit button on login component is clicked.
    e.preventDefault(); //prevents login component from re-rendering on click

    //username and password variables and arrays
    const loginUsername = loginState.username; //retains the username input value from the login form
    const loginPassword = loginState.password; //retains the password input value from the login form 
    const userUsername = userDatabase.map(username => username.username); //maps through userDatabase and returns an array containing the username key value in each element
    const userId = userDatabase.map(id => id.id); //maps through userDatabase and returns an array containing the id key value in each element
    
    console.log(userId);

    //username and password validation
    let usernameValidation = false; //username validation is false by default
    let passwordValidation = false; //password validation is false by default
    
    userUsername.forEach((value) => { //compares username input value from login form to each username in userDatabase. if equal, returns usernameValidation as true
      if(value == loginUsername) {
        usernameValidation = true;
      };
    });
    
    userPassword.forEach((value) => { //compares password input value from login form to each password in userDatabase. if equal, returns passwordValidation as false
      if(value == loginPassword) {
        passwordValidation = true;
      };
    });
    
    if(usernameValidation && passwordValidation === true) { //compares userValidation and passwordValidation. if both are true, sets login element in loginState to true
      setLoginState({
        ...loginState,
        loggedIn: true,
      });
    };

    // console.log(loginState.loggedIn);

  };

  //user logout
  const logoutSubmit = (e) => { //runs when logout button on dashboard component is clicked.
    e.preventDefault(); //prevents dashboard component from re-rendering on click. 

    setLoginState({ //sets login element in loginState to false.
      ...loginState,
      loggedIn: false,
    });
    
    console.log(loginState.loggedIn);
    console.log("clicked");
  };

  //set user authentication state for conditional component routing/rendering

  
  const loginVariables = { //variable that holds state and props for passing to child components
    loginSubmit: loginSubmit,
    loginState: loginState,
    loginHandleChange: loginHandleChange,
    logoutSubmit: logoutSubmit,  
  };

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" render={(props) => <Login {...loginVariables} />} />
          <Route exact path="/dashboard" render={loginState.loggedIn ? (props) => <Dashboard logoutSubmit={logoutSubmit} /> : () => <Login />} /> 
          <Route />
        </Switch>
      </div>
    </BrowserRouter>
  );
}


export default App;
