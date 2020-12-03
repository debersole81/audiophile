import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/login" component={Login} />
        <Dashboard />
      </div>
    </BrowserRouter>
  );
}

export default App;
