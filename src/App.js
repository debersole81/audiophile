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
    updateFormState(() => ({ ...formState, [e.target.name]: e.target.value}))
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
