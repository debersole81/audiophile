import React, { useState } from 'react';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header'
import Dashboard from "./components/Dashboard";
import Collection from './components/Collection';
import Randomizer from './components/Randomizer';
import Search from './components/Search';
import WishList from './components/WishList';

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

    //Set userAuth state variable, render the dashboard component
    if (usernameValidation > -1 && passwordValidation === true) {
      setUserAuth(true);
      history.push('/dashboard');
    };
  };

  /*Handle logout button submit*/
  const logoutSubmit = (e) => {
    e.preventDefault();

    //Set userAuth state variable, render the login component
    setUserAuth(false);
    setLoginInput([{
      username: '',
      password: '',
    }]);
    history.push('/');
  };

  const passingToChildren = { //variable that holds state and props for passing to child components
    loginSubmit: loginSubmit,
    loginInput: loginInput,
    loginHandleChange: loginHandleChange,
    logoutSubmit: logoutSubmit,
    userAuth: userAuth,
  };


  if (userAuth === false) {
    return (
      <div>
        <Route exact path='/' render={(props) => <Login {...passingToChildren} />} />
      </div>
    );
  };

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/dashboard' render={(props) => <Dashboard {...passingToChildren} />} />
        <Route exact path='/collection' component={Collection} />
        <Route exact path='/wishlist' component={WishList} />
        <Route exact path='/randomizer' component={Randomizer} />
        <Route exact path='/search' component={Search} />
      </Switch>
    </div>
  );
}


export default App;
