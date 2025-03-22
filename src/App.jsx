import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  { useState } from "react";

import OrderPizza from "./components/OrderPizza";
import Success from "./components/Success";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import './App.css'



function App (){


 return (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/siparis-olustur">
        <OrderPizza onSubmit={handleData} />
      </Route>
      <Route path="/siparis-alindi">
        <Success  />
      </Route>
    </Switch>
  </Router>

);
}
 
export default App;