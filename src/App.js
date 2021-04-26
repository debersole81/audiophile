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
  const [formState, updateFormState] = useState(initialFormState);
  const [user, updateUser] = useState(null);
  /* #endregion State Variables */

  /* #region Callback Functions */
  /** Change handler for all auth forms */
  function onFormChange(e) {
    updateFormState(() => ({ ...formState, [e.target.name]: e.target.value }))
  };
  /* #endregion Callback Functions */

  console.log(formState);

  return (
    <React.Fragment>
      {/* <SignIn onFormChange={onFormChange} /> */}
      {/* <SignUp onFormChange={onFormChange} /> */}
      {/* <ConfirmSignUp onFormChange={onFormChange} /> */}
      {/* <ResetPassword onFormChange={onFormChange} /> */}
      <ConfirmResetPassword onFormChange={onFormChange} />
      {/* <Route render={(props) => {
        return userAuth ? (<ProtectedComponents headerProps={headerProps} />) : (<Login loginProps={loginProps} />)
      }} /> */}
    </React.Fragment>
  );
};


export default App;
