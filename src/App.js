import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Auth, Hub, Logger } from 'aws-amplify';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ConfirmSignUp from './components/ConfirmSignUp';
import ResetPassword from './components/ResetPassword';
import ConfirmResetPassword from './components/ConfirmResetPassword';
import ProtectedComponents from './components/ProtectedComponents';

/* #region Initial form state object */
const initialFormState = {
  username: '',
  password: '',
  email: '',
  authCode: '',
  formType: 'signIn'
};
/* #endregion Initial form state object */

function App() {

  console.log('Render: App Component');

  /* #region State Variables */
  const [formState, setFormState] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState({});
  const [user, setUser] = useState(null);
  /* #endregion State Variables */

  /* #region Form error handling */
  function checkForErrors() {
    //Destructure formState
    const { username, password, email, authCode } = formState;
    //Construct an errors object
    const formErrors = {}
    //Username errors
    if (!username || username === '') formErrors.username = 'Username cannot be blank.'
    //Password errors
    if (!password || password === '') formErrors.password = 'Password cannot be blank.'
    else if (!password.match(/[a-z]/) && !password.match(/[A-Z]/) && !password.match(/\d/)) formErrors.password = 'Password must contain one uppercase, lowercase, and numeric value.'
    //Email errors
    if (!email || email === '') formErrors.email = 'Email cannot be blank.'
    //Authcode errors
    if (!authCode || authCode == '') formErrors.authCode = 'Code cannot be blank.'

    return formErrors;
  };

  /* #endregion Form error handling */


  /* #region Callback Functions */
  /** Change handler for all auth forms */
  function onFormChange(e) {
    setFormState(() => ({ ...formState, [e.target.name]: e.target.value }))
  };

  /** User Sign In */
  function signIn(e) {
    e.preventDefault();
    //Destructure formState
    const { username, password } = formState;
    //call AWS amplify Auth.signIn method
    Auth.signIn(username, password)
      .then(
        setFormState(() => ({ ...formState, formType: 'signedIn' }))
      )
      .catch(error => {
        console.log(error);
      })
  };

  /* #endregion Callback Functions */

  console.log(formState);

  return (
    <React.Fragment>
      <SignIn onFormChange={onFormChange} signIn={signIn} />
      {/* <SignUp onFormChange={onFormChange} /> */}
      {/* <ConfirmSignUp onFormChange={onFormChange} /> */}
      {/* <ResetPassword onFormChange={onFormChange} /> */}
      {/* <ConfirmResetPassword onFormChange={onFormChange} /> */}
      {/* <Route render={(props) => {
        return userAuth ? (<ProtectedComponents headerProps={headerProps} />) : (<Login loginProps={loginProps} />)
      }} /> */}
    </React.Fragment>
  );
};


export default App;
