import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import ProtectedComponents from './components/ProtectedComponents'

function App() {

  console.log('Render: App Component');

  /**Notes*/
  //Build a sign up form
  //Build error handling for invalid username/password
  //Implement Bootstrap


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

  /**State variables*/
  /*Login component state variables*/
  /*Login form state object*/
  const [loginInput, setLoginInput] = useState([{
    username: "",
    password: "",
  }]);

  /*User authentication state variable*/
  const [userAuth, setUserAuth] = useState(true);

  /**Callback functions*/ 
  /*Login component callback functions*/
  /*Handle login form input fields*/
  const loginHandleChange = (e) => {
    setLoginInput({
      ...loginInput,
      [e.target.name]: e.target.value,
    });
  };

  /*Handle login form button click*/
  const loginSubmit = (e) => {
    e.preventDefault();

    const loginUsername = loginInput.username;
    const loginPassword = loginInput.password;

    let usernameValidation = -1;
    let passwordValidation = false;
    let databasePassword = null;

    //Verify username and password against the user database object
    userDatabase.forEach((value, index) => {
      if (value.username === loginUsername) {
        usernameValidation = index;
        if (usernameValidation !== -1) {
          databasePassword = userDatabase[usernameValidation].password;
          return;
        };
      };
    });

    if (loginPassword === databasePassword) {
      passwordValidation = true;
    };

    //Set userAuth state variable to true
    if (usernameValidation > -1 && passwordValidation === true) {
      setUserAuth(true);
    };
  };

  /*Handle logout button submit*/
  const logoutSubmit = (e) => {
    e.preventDefault();

    //Set userAuth state variable to false and clear loginInput state
    setUserAuth(false);
    setLoginInput([{
      username: '',
      password: '',
    }]);
  };

  /**Props objects*/
  /*Login component props*/
  const passingLoginProps = {
    loginSubmit: loginSubmit,
    loginInput: loginInput,
    loginHandleChange: loginHandleChange,
  };

  /*Header component props*/
  const passingHeaderProps = {
    logoutSubmit: logoutSubmit
  }

  return (
    <div>
      <Route render={(props) => {
        return userAuth ? (<ProtectedComponents {...passingHeaderProps} />) : (<Login {...passingLoginProps} />)
      }} />
    </div>
  );
}


export default App;
