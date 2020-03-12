import React, { useEffect } from "react";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";

import login from "../src/components/login/Login";
import cart from "../src/components/cart/Cart";
import home from "../src/components/Home";
import about from "../src/components/about/About";
import productstore from "./components/productsMenu/Store";
import business from "./components/productsMenu/Business";
import custom from "./components/productsMenu/Custom";
import checkout from "./components/cart/Checkout";
import adminDashboard from "./components/adminDashboard/Dashboard";
import { fetchAllProducts } from "./store/products/actions";
import { fetchAllTransactions } from "./store/transactions/actions";
import { fetchAllImages } from "./store/images/actions";

function App() {
  const dispatch = useDispatch();
  const loggedInUser = useSelector(state => state.users.loggedInUser);

  useEffect(() => {
    dispatch(fetchAllProducts());
    dispatch(fetchAllTransactions());
    dispatch(fetchAllImages());
  });
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Switch>
            <Route exact path="/login" component={withRouter(login)} />
            <Route exact path="/home" component={withRouter(home)} />
            <Route exact path="/about" component={withRouter(about)} />
            <Route exact path="/business" component={withRouter(business)} />
            <Route exact path="/store" component={withRouter(productstore)} />
            <Route exact path="/custom" component={withRouter(custom)} />
            <Route exact path="/" component={withRouter(home)} />
            <Route exact path="/checkout" component={withRouter(checkout)} />
            {loggedInUser.id === 0 ? (
              <Route exact path="/dashboard" component={withRouter(login)} />
            ) : (
              <Route
                exact
                path="/dashboard"
                component={withRouter(adminDashboard)}
              />
            )}

            <Route exact path="/cart" component={withRouter(cart)} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
