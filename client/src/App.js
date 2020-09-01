import React from "react";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import Jobs from "./components/Jobs/Jobs";


import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
//import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
//import Banner from "./components/Banner/Banner"
import About from "./components/About/About";
import Page from "./components/Page/Page";
//import JobPannel from "./components/JobPannel/JobPannel"
import Sidebar from "./components/Sidebar/Sidebar";

const store = configureStore();

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/about">
            <Header />
            <About />
          </Route>
          <Route path="/home">
            <Header />
            <Sidebar />
            <Provider store={store}>
              <Jobs />
            </Provider>
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Page />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
