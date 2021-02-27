import React, { useState } from 'react';
import { Link, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header'
import Dashboard from "./components/Dashboard";
import Collection from './components/Collection';
import Randomizer from './components/Randomizer';
import Search from './components/Search';
import WishList from './components/WishList';
import ProtectedRoute from './components/ProtectedRoute'

function App() {

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

  /*Handle login form button submit*/
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

  const passingToChildren = { //variable that holds state and props for passing to child components
    loginSubmit: loginSubmit,
    loginInput: loginInput,
    loginHandleChange: loginHandleChange,
    logoutSubmit: logoutSubmit,
    userAuth: userAuth,
  };

//can I render all of the components inside of the truthy statement?

  return (
    <div>
        
        <Route render={(props) => {
          return userAuth ? 
          (<ProtectedRoute />) : (<Login />)}} />
        
        
      //   {/* <Route exact path='/' render={(props) => {
      //     return (
      //       userAuth === true ?
      //       <Redirect to='/dashboard' /> : <Login />
      //       )
      //     }} />
      //   <Header />
      //   <Switch>
      //   <Route exact path='/dashboard' render={(props) => <Dashboard {...passingToChildren} />} />
      //   <Route exact path='/collection' component={Collection} />
      //   <Route exact path='/wishlist' component={WishList} />
      //   <Route exact path='/randomizer' component={Randomizer} />
      //   <Route exact path='/search' component={Search} />
      // </Switch> */}
    </div>
  );
}


export default App;
