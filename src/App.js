import React, { Component } from 'react'
import './App.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import home from './pages/home'
import products from './pages/products'
import cart from './pages/cart'
import notfound from './pages/notfound'
import productdetail from './pages/productdetail'

class App extends Component {
  render() {
    return (
      <div>
      <header>
        <nav id="top" className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
          <a className="navbar-brand" href="/">MT Grociers</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/cart">Cart</a>
              </li>
            </ul>
            <form className="form-inline mt-2 mt-md-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-light my-2 my-sm-0" type="submit" disabled>Search</button>
            </form>
          </div>
        </nav>
      </header>
      <div>
        <Router>
            <Switch>
              <Route exact path='/' component={home} />
              <Route exact path='/products' component={products} />
              <Route path='/products/:url' component={productdetail} />
              <Route path='/cart' component={cart} />
              <Route component={notfound} />
            </Switch>
        </Router>
        <footer className="container">
          <p>&copy; 2017 MT Grociers, Inc.</p>
        </footer>
      </div>
    </div>
    );
  }
}

export default App;
