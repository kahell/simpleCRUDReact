import React, { Component } from 'react';
import {Switch, Link, Route} from 'react-router-dom';
import Home from "./home";
import About from "./about";
import Category from "./category/index";
import Error404 from "./error404";

export default class Header extends Component {
    render() {
        return (
            <div>

              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <Link className={ location.pathname === "/"? "nav-link active": "nav-link"} to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className={ location.pathname === "/about"? "nav-link active": "nav-link"}  to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                      <Link className={ location.pathname === "/category"? "nav-link active": "nav-link"} to="/category">Category</Link>
                    </li>

                  </ul>
                  <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  </form>
                </div>
              </nav>
              <div className="row">
                <div className="col-md-12">
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/category" component={Category} />
                    <Route exact path="/category/add" component={Category} />
                    <Route exact path="/category/edit/:id" component={Category} />
                    <Route exact path="/*" component={Error404} />
                  </Switch>
                </div>
              </div>

            </div>
        );
    }
}
