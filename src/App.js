import React, { useEffect } from "react";
import "./App.css";

import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import topNavigationBar from "../src/components/TopNavigationBar";
import { fetchAllUsers } from "./store/users/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  });
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Switch>
            <Route exact path="/" component={topNavigationBar} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
