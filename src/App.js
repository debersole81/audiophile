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
  newPassword: '',
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
  const { username, password, newPassword, email, authCode } = formState;
  //Construct error validations object
  const formErrorValidation = {
    username: 'Username is required!',
    password: 'Password is required!',
    passwordLength: 'Password must contain at least 8 characters!',
    passwordCharacters: 'Password must contain uppercase, lowercase, and numeric characters!',
    newPassword: 'Password is required!',
    newPasswordLength: 'Password must contain at least 8 characters!',
    newPasswordCharacters: 'Password must contain uppercase, lowercase, and numeric characters!',
    email: 'Email is required!',
    authCode: 'Code is required!',
    signIn: function () {
      //Construct errors object
      const errors = {};
      //Define conditionals
      if (!username || username === '') errors.username = this.username;
      if (!password || password === '') errors.password = this.password;

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
      if (!newPassword || newPassword === '') errors.newPassword = this.newPassword;
      else if (newPassword.length < 8) errors.newPassword = this.newPasswordLength;
      else if (!newPassword.match(/[a-z]/) || !newPassword.match(/[A-Z]/) || !newPassword.match(/\d/)) errors.newPassword = this.newPasswordCharacters;

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
      //No errors, proceed with sign in auth
      //Destructure formState
      const { username, password } = formState;
      //Call AWS Amplify Auth.signIn method
      Auth.signIn(username, password)
        .then(
          setFormState(() => ({ ...formState, formType: 'signedIn' }))
        )
        .catch(error => {
          console.log(error);
        })
    };
  };

  /** User Sign Up */
  function signUp(e) {
    e.preventDefault();

    //Check form for errors
    const signUpErrors = formErrorValidation.signUp();

    if (Object.keys(signUpErrors).length > 0) {
      //Set formErrors
      setFormErrors(signUpErrors);
    } else {
      //No errors, proceed with sign up auth
      //Destructure formState
      const { username, password, email } = formState;
      //Call AWS Amplify Auth.signUp method
      Auth.signUp({ username, password, attributes: { email } })
        .then(
          setFormState(() => ({ ...formState, formType: 'confirmSignUp' }))
        )
        .catch(error => {
          console.log(error);
        })
    };
  }

  /** Confirm User Sign Up */
  function confirmSignUp(e) {
    e.preventDefault();

    //Check form for errors
    const confirmSignUpErrors = formErrorValidation.confirmSignUp();

    if (Object.keys(confirmSignUpErrors).length > 0) {
      //Set formErrors
      setFormErrors(confirmSignUpErrors);
    } else {
      //No errors, proceed with confirming sign up auth
      //Destructure formState
      const { username, authCode } = formState;
      //Call AWS Amplify Auth.confirmSignUp method
      Auth.confirmSignUp(username, authCode)
        .then(
          setFormState(() => ({ ...formState, formType: 'signIn' }))
        )
        .catch(error => {
          console.log(error);
        })
    };
  }

  /** Reset User Password */
  function resetPassword(e) {
    e.preventDefault();

    //Check form for errors
    const resetPasswordErrors = formErrorValidation.resetPassword();

    if (Object.keys(resetPasswordErrors).length > 0) {
      //Set formErrors
      setFormErrors(resetPasswordErrors);
    } else {
      //No errors, proceed with resetting user password
      //Destructure formState
      const { username } = formState;
      //Call AWS Amplify Auth.forgotPassword method
      Auth.forgotPassword(username)
        .then(
          setFormState(() => ({
            ...formState,
            authCode: '',
            formType: 'confirmResetPassword'
          }))
        )
        .catch(error => {
          console.log(error);
        })
    };
  }

  /** Confirm Reset User Password */
  function confirmResetPassword(e) {
    e.preventDefault();

    //Check form for errors
    const confirmResetPasswordErrors = formErrorValidation.confirmResetPassword()

    if (Object.keys(confirmResetPasswordErrors).length > 0) {
      //Set formErrors
      setFormErrors(confirmResetPasswordErrors);
    } else {
      //No errors, proceed with resetting user password
      //Destructure formState
      const { username, authCode, newPassword } = formState;
      //Call AWS Amplify Auth.forgotPasswordSubmit method
      Auth.forgotPasswordSubmit(username, authCode, newPassword)
        .then(
          setFormState(() => ({ ...formState, formType: 'signIn' }))
        )
        .catch(error => {
          console.log(error);
        })
    };
  };

  /**Form Link Callback Functions */
  /** Sign Up Link */
  function signUpLink(e) {
    e.preventDefault();

    //Set formState and render the SignUp component
    setFormState(() => ({
      ...formState,
      username: '',
      password: '',
      email: '',
      formType: 'signUp',
    }))
  };

  /** Resend Sign Up Confirmation Code Link */
  function resendSignUpCodeLink(e) {
    e.preventDefault();

    //Destructure formState
    const { username } = formState;
    //Call AWS Amplify resendSignUp method
    Auth.resendSignUp(username)
      .then(console.log('Code resent successfully'))
      .catch(error => {
        console.log('Error resending code:', error);
      })
  };

  /** Sign In Link */
  function signInLink(e) {
    e.preventDefault();

    //Set formState and render the SignIn component
    setFormState(() => ({
      ...formState,
      username: '',
      password: '',
      formType: 'signIn',
    }))
  };

  /** Reset Password Link */
  function resetPasswordLink(e) {
    e.preventDefault();

    //Set formState and render the ResetPassword component
    setFormState(() => ({
      ...formState,
      username: '',
      formType: 'resetPassword',
    }))
  };

  /** Resend Password Reset Confirmation Code Link */
  function resendPasswordCodeLink(e) {
    e.preventDefault();

    //Destrucutre formState
    const { username } = formState;
    //Call AWS Amplify forgotPassword method
    Auth.forgotPassword(username)
      .catch(error => {
        console.log(error)
      })
  }
  /* #endregion Callback Functions */

  /* #region Props Objects */
  /** SignIn Component Props */
  const signInProps = { onFormChange, formErrors, signIn, signUpLink, resetPasswordLink };

  /** SignUp Component Props */
  const signUpProps = { onFormChange, formErrors, signUp, signInLink };

  /** Confirm SignUp Component Props */
  const confirmSignUpProps = { onFormChange, formState, formErrors, confirmSignUp, signInLink, resendSignUpCodeLink };

  /** Reset Password Component Props */
  const resetPasswordProps = { onFormChange, formErrors, resetPassword, signInLink };
  /* #emdregion Props Objects */



  console.log(formState);
  console.log(formErrors);

  return (
    <React.Fragment>
      {/* <SignIn signInProps={signInProps} /> */}
      {/* <SignUp signUpProps={signUpProps} /> */}
      {/* <ConfirmSignUp confirmSignUpProps={confirmSignUpProps} /> */}
      <ResetPassword resetPasswordProps={resetPasswordProps} />
      {/* <ConfirmResetPassword onFormChange={onFormChange} formErrors={formErrors} confirmResetPassword={confirmResetPassword} /> */}
      {/* <Route render={(props) => {
        return userAuth ? (<ProtectedComponents headerProps={headerProps} />) : (<Login loginProps={loginProps} />)
      }} /> */}
    </React.Fragment>
  );
};


export default App;
