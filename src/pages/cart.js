import React from 'react'
import '../App.css'
import * as Cart from '../configuration/cart'

export default () => {

  return (
    <div className="jumbotron">
      <h1 className="display-3">Cart</h1>
      <p>Items: {Cart.cartDisp}</p>
    </div>
  )
}

