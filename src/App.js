import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ConfirmSignUp from './components/ConfirmSignUp';
import ResetPassword from './components/ResetPassword';
import ConfirmResetPassword from './components/ConfirmResetPassword';
import ProtectedComponents from './components/ProtectedComponents';

function App() {

  console.log('Render: App Component');

  /** Notes 
   * Build a sign up form
   * Build error handling for invalid username/password
   * Implement bootstrap
  */

  /* #region User Database Object */
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
  /* #endregion User Database Object */

  /* #region State Variables */
  /** Login component state variables */
  const [loginInput, setLoginInput] = useState([{
    username: "",
    password: "",
  }]);

  const [userAuth, setUserAuth] = useState(false);
  /* #endregion State Variables */

  /* #region Callback Functions */
  /** Login component callback functions */
  /* Handle login form input fields */
  const loginHandleChange = (e) => {
    setLoginInput({
      ...loginInput,
      [e.target.name]: e.target.value,
    });
  };

  /* Handle login form button click */
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

  /* Handle logout button submit */
  const logoutSubmit = (e) => {
    e.preventDefault();

    //Set userAuth state variable to false and clear loginInput state
    setUserAuth(false);
    setLoginInput([{
      username: '',
      password: '',
    }]);
  };
  /* #endregion Callback Functions */

  /* #region Props Objects */
  /** Login component props */
  const loginProps = {
    loginSubmit,
    loginInput,
    loginHandleChange,
  };

  /** Header component props */
  const headerProps = { logoutSubmit };
  /* #endregion Props Objects */

  return (
    <div>
      <SignIn />
      {/* <SignUp /> */}
      {/* <ConfirmSignUp /> */}
      {/* <ResetPassword /> */}
      {/* <ConfirmResetPassword /> */}
      {/* <Route render={(props) => {
        return userAuth ? (<ProtectedComponents headerProps={headerProps} />) : (<Login loginProps={loginProps} />)
      }} /> */}
    </div>
  );
};


export default App;
