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

  /* #region Form Error Validation Object */
  //Destructure formState
  const { username, password, email, authCode } = formState;
  //Construct error validations object
  const formErrorValidation = {
    username: 'Username cannot be blank!',
    password: 'Password cannot be blank!',
    passwordLength: 'Password must contain at least 8 characters!',
    passwordCharacters: 'Password must contain uppercase, lowercase, and numeric characters!',
    email: 'Email cannot be blank!',
    authCode: 'Code cannot be blank!',
    signIn: function () {
      //Construct errors object
      const errors = {};
      //Define conditionals
      if (!username || username === '') errors.username = this.username;
      if (!password || password === '') errors.password = this.password;
      else if (password.length < 8) errors.password = this.passwordLength;
      else if (!password.match(/[a-z]/) || !password.match(/[A-Z]/) || !password.match(/\d/)) errors.password = this.passwordCharacters;

      return errors
    },
    signUp: function () {
      //Construct errors object
      const errors = {};
      //Define conditionals
      if (!username || username === '') errors.username = this.username;
      if (!password || password === '') errors.password = this.password;
      else if (password.length < 8) errors.password = this.passwordLength;
      else if (!password.match(/[a-z]/) || !password.match(/[A-Z]/) || !password.match(/\d/)) errors.password = this.passwordCharacters;
      if (!email || email === '') errors.email = this.email;

      return errors
    },
    confirmSignUp: function () {
      //Construct errors object
      const errors = {};
      //Define conditionals
      if (!username || username === '') errors.username = this.username;
      if (!authCode || authCode === '') errors.authCode = this.authCode;

      return errors
    },
    resetPassword: function () {
      //Construct errors object
      const errors = {};
      //Define conditionals
      if (!username || username === '') errors.username = this.username;

      return errors
    },
    confirmResetPassword: function () {
      //Construct errors object
      const errors = {};
      //Define conditionals
      if (!authCode || authCode === '') errors.authCode = this.authCode;
      if (!password || password === '') errors.password = this.password;
      else if (password.length < 8) errors.password = this.passwordLength;
      else if (!password.match(/[a-z]/) || !password.match(/[A-Z]/) || !password.match(/\d/)) errors.password = this.passwordCharacters;

      return errors
    },
  };
  // /* #endregion Form Error Validation Object */

  /* #region Callback Functions */
  /** Change handler for all auth forms */
  function onFormChange(e) {
    //Add form field inputs to the formState object
    setFormState(() => ({ ...formState, [e.target.name]: e.target.value }))
    //If form errors exist, remove them from the formErrors object
    if (Object.keys(formErrors))
      setFormErrors(() => ({ ...formErrors, [e.target.name]: null }))
  };

  /** User Sign In */
  function signIn(e) {
    e.preventDefault();

    //Check form for errors
    const signInErrors = formErrorValidation.signIn();

    if (Object.keys(signInErrors).length > 0) {
      //Set formErrors
      setFormErrors(signInErrors);
    } else {
      //No errors, proceed with signin auth
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
  };

  /* #endregion Callback Functions */

  console.log(formState);
  console.log(formErrors);

  return (
    <React.Fragment>
      <SignIn onFormChange={onFormChange} formErrors={formErrors} signIn={signIn} />
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
