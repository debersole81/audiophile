import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";


const App = () => {
  return (
    <div>
      <Login />
      <Dashboard />
    </div>
  );
}

export default App;
