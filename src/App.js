import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";


const App = () => {
  
  const handleChange = (e) => { //runs when submit button on login component is clicked
    console.log("clicked");
  };

  return (
    <BrowserRouter>
      <div>
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </BrowserRouter>
  );
}


export default App;
