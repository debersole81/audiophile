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

  /*Login component state variables*/
  /*Login form state object*/
  const [loginInput, setLoginInput] = useState([{
    username: "",
    password: "",
  }]);

  /*User authentication state variable*/
  const [userAuth, setUserAuth] = useState(false);



  /**Callback functions*/

  /*Login component callback functions*/
  /*Handle login form input fields*/
  const loginHandleChange = (e) => {
    console.log(loginInput);
    setLoginInput({
      ...loginInput,
      [e.target.name]: e.target.value,
    });
  };

  /*Handle login form submit*/
  const loginSubmit = (e) => { 
    e.preventDefault();
    
    const loginUsername = loginInput.username;
    const loginPassword = loginInput.password; 
    
    let usernameValidation = -1;  
    let passwordValidation = false; 
    let databasePassword = null;
    
    //Verify username and password against the user database object
    userDatabase.forEach((value, index) => {  
      if(value.username === loginUsername) {
        usernameValidation = index;
          if(usernameValidation !== -1) { 
            databasePassword = userDatabase[usernameValidation].password;
            return;
          };  
      };
    });
    
    if(loginPassword === databasePassword) {
      passwordValidation = true;
    };

    //Set userAuth state variable
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
