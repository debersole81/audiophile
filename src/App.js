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
    console.log(loginInput);
    setLoginInput({
      ...loginInput,
      [e.target.name]: e.target.value, //logs a string value from user input fields on login form
    });
  };
  
  const loginSubmit = (e) => { //runs when submit button on login component is clicked.
    e.preventDefault(); //prevents login component from re-rendering on click


    //username and password variables
    const loginUsername = loginInput.username; //retains the username input value from the login form
    const loginPassword = loginInput.password; //retains the password input value from the login form 
    let usernameValidation = -1; //username validation is referencing the index number of the userDatabase object and is set to -1 by default
    let passwordValidation = false; //password validation is false by default
    let databasePassword = null; //placeholder for the password value that is stored in the userDatabase. will be updated by the userDatabase.some method
    let userAuth = false; //variable that will hold the result of user authentication. if true, user is authenticated and will login into the app. if false, user is not authenticated.
    


    //verifying username and password
    userDatabase.some((value, index) => { //compares the username value that the user enters into the login form against each object in the user database. 
      if(value.username === loginUsername) {
        console.log(index + ": " + value.username + ", " + value.password);
        usernameValidation = index; //sets the value of usernameValidation to the index number of the matching object from the user database.
          if(usernameValidation !== -1) { //if usernameValidation has a valid index number from the user database 
            return(databasePassword = userDatabase[usernameValidation].password); //break the userDatabse.some loop and return the databasePassword variable equal to the password element value for the index number that usernameValidation is equal to.
          };  
      };
    });

    console.log(usernameValidation);
    console.log(databasePassword);
    
    if(loginPassword === databasePassword) { //if password entered by the user equals the password stored in the databse for that user, set passwordValidation to true
      passwordValidation = true;
    };

    console.log(passwordValidation);


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
        <Route exact path="/dashboard" render={(props) => <Dashboard {...passingToChildren} />} /> 
        
      </Switch>
    </div>
  );
}


export default App;
