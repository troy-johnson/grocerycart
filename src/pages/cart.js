import React from 'react'
import '../App.css'
import * as Cart from '../configuration/cart'

export default () => {

  return (
    
    <div className="jumbotron">
      <h1 className="display-3">Cart</h1>
      <button type="button" className="btn btn-danger" onClick={() => Cart.clear()}>Clear Cart</button>
      <div className="cart-contents">
        {Cart.cartDisp()}
        <br />
      </div>
    </div>
  )
}

