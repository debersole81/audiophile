import React, { useState } from 'react';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header'
import Dashboard from "./components/Dashboard";
import Collection from './components/Collection';
import WishList from './components/WishList';
import Randomizer from './components/Randomizer';

function App () {
  
  /**User database object*/
  const userDatabase = [
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
  
  /**Global variables*/
  const history = useHistory();
  
  /**State variables*/

  /**Login component state variables */
  /**Login form state object*/
  const [loginInput, setLoginInput] = useState([{
    username: "",
    password: "",
  }]);

  /**User authentication state variable*/
  const [userAuth, setUserAuth] = useState(false);






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
    

    //verifying username and password
    userDatabase.forEach((value, index) => {  
      if(value.username === loginUsername) { //compares the username value that the user enters into the login form against each object in the user database.
        usernameValidation = index; //sets the value of usernameValidation to the index number of the matching object from the user database.
          if(usernameValidation !== -1) { //if usernameValidation has a valid index number from the user database 
            databasePassword = userDatabase[usernameValidation].password; //break the forEach loop and return the databasePassword variable from the object with the index number stored in usernameValidation.
            return;
          };  
      };
    });
    
    if(loginPassword === databasePassword) { //if password entered by the user equals the password stored in the databse for that user, set passwordValidation to true
      passwordValidation = true;
    };


    //setting user authentication
    if(usernameValidation > -1 && passwordValidation === true) { //if userValidation is a valid index number and passwordValidation is true, set the userAuth variable to true.
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
        <Route path="/dashboard" render={(props) => <Dashboard {...passingToChildren} />} /> 
      </Switch>
    </div>
  );
}


export default App;
