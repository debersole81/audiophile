import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";


function App () {
  
  
  
  const loginSubmit = (e) => { //runs when submit button on login component is clicked
    e.preventDefault();
    console.log("clicked");
  };

  return (
    <BrowserRouter>
      <div>
        <Route path="/login" />
          <Login loginSubmit={loginSubmit} /> 
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </BrowserRouter>
  );
}


export default App;
