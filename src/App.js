import React, { Component } from 'react'
import './App.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import home from './pages/home'
import products from './pages/products'
import cart from './pages/cart'
import notfound from './pages/notfound'

class App extends Component {
  render() {
    return (
      <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a className="navbar-brand" href="#">M + T Grociers</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/cart">Cart</a>
              </li>
            </ul>
            <form className="form-inline mt-2 mt-md-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </header>
      <div>
        <Router>
            <Switch>
              <Route exact path='/' component={home} />
              <Route path='/products' component={products} />
              <Route path='/cart' component={cart} />
              <Route component={notfound} />
            </Switch>
        </Router>
      </div>
    </div>
    );
  }
}

export default App;
