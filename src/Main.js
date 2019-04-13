import React, { Component } from "react";

import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch,
    Redirect,
    HashRouter
  } from "react-router-dom";
  import Home from "../src/Home";
  import News from "../src/News";
  import Contact from "../src/Contact";
  import Newsdetails from "../src/newsdetails";

  class Main extends Component {
    render() {
      return (
        <Router>
          <div>
            <h1>SDL Tridion sites 9 PCA(GraphQL) & React</h1>
            <ul className="header">
                
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/News">News and Article</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div className="content">
              <Route path="/" component={Home}/>
              <Route path="/News" component={News}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/newsdetails" component={Newsdetails}/>
            </div>
          </div>
        </Router>
      );
    }
  }
 
export default Main;