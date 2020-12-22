import React, { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
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
  
  //react router hooks
  const history = useHistory();
  
  //managing user authentication
  //user login
  const [loginInput, setLoginInput] = useState([{ //login form state manager.
    username: "",
    password: "",
  }]);

  const [userAuth, setUserAuth] = useState(false); //user authentication state manager.

  const loginHandleChange = (e) => { //handles changes to login form fields based on user input
    setLoginInput({
      ...loginInput,
      [e.target.name]: [e.target.value],
    });
  };
  
  const loginSubmit = (e) => { //runs when submit button on login component is clicked.
    e.preventDefault(); //prevents login component from re-rendering on click

    // history.push("/dashboard");

    //username and password variables and arrays
    const loginUsername = loginInput.username; //retains the username input value from the login form
    const loginPassword = loginInput.password; //retains the password input value from the login form 
    const userUsername = userDatabase.map(username => username.username); //maps through userDatabase and returns an array containing the username property value in each element
    const userNameMatchValue = []; //empty array that will store the truthy value from the nested coniditonal statement in the userUsername.forEach method



    //username and password validation
    let usernameValidation = false; //username validation is false by default
    let passwordValidation = false; //password validation is false by default
    
    userUsername.forEach((value) => { //compares username input value from login form to each username in userDatabase. if equal, sets usernameValidation as true and pushes input value to a new array
      if(value == loginUsername) {
        usernameValidation = true;
        return(userNameMatchValue.push(value)); 
      };
    });
    
    const userNameValueString = userNameMatchValue.toString(); //converts the userNameMatchValue array to a string and assigns it to a new variable, userNameValueString

    let userId = userDatabase.find(item => item.username === userNameValueString); //searches userDatabase and returns an array object with a username attribute that matches the userNameValueString value. returns undefined if no match.
    
    if(userId === undefined) { //if userDatabase.find returns an undefined value for userId, sets userId to null. 
      userId = null;
    } else {
      userId = userId.id; //if userDatabase.find returns a matching object, sets userId equal to the object's id property.
    };

    let userPassword = userDatabase.find(item => item.id === userId); //searches userDatabase and returns an array object with an id attribute that matches the userId value. returns undefined if no match.
   
    if(userPassword === undefined) { //if userDatabase.find returns an undefined value for userPassword, sets userPassword to null.
      userPassword = null;
    } else {
      userPassword = userPassword.password; //if userDatabase.find returns a matching object, sets userPassword equal to the object's password property.
    };

    if(userPassword == loginPassword) { //compares password input value from login form to userPassword value. if equal, sets passwordValidation to true.
      passwordValidation = true;
    };



    //setting user authentication
    if(usernameValidation && passwordValidation === true) { //if userValidation and passwordValidation are both true, sets userAuth variable to true.
      setUserAuth(true);
      history.push("/dashboard"); //if userAuth is true, pushes user to the dashboard component.      
    };   
  };

  

  //user logout
  const logoutSubmit = (e) => { //runs when logout button on dashboard component is clicked.
    e.preventDefault(); //prevents dashboard component from re-rendering on click. 

    //removing user authentication
    setUserAuth(false); //sets UserAuth value to false
    setLoginInput([{ //clears username and password values from LoginInput state
      username: "",
      password: "",
    }]);
    history.push("/"); //redirects user back to the login form.
  };


  
  const passingToChildren = { //variable that holds state and props for passing to child components
    loginSubmit: loginSubmit,
    loginInput: loginInput,
    loginHandleChange: loginHandleChange,
    logoutSubmit: logoutSubmit,
    userAuth: userAuth,  
  };

  return (
    <div>
      <Switch>
        <Route exact path="/" render={(props) => <Login {...passingToChildren} />} />
        <Route exact path="/dashboard" render={(props) => <Dashboard logoutSubmit={logoutSubmit} />} /> 
        
      </Switch>
    </div>
  );
}


export default App;
