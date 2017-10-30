import React, { Component } from 'react'
import '../App.css';

import { graphql } from 'react-apollo'

import gql from 'graphql-tag'


class Products extends Component {
  render() {

    const { loading, allGroceries } = this.props.data

    return (
      <div className="jumbotron">
        <h1 className="display-3">Product Listing</h1>
        <p className="lead">This is a complete listing of our fresh, locally grown produce and prime-choice meat we have in stock.</p>
        {!loading && allGroceries.map(grocery => (
          <div key={grocery.id}>
            <div><ul>
              <li>Item: {grocery.name}</li>
              <li>Price: {grocery.price}</li> 
              <li>Stock: {grocery.inStock}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

const QUERY = gql`
query {
  allGroceries {
    id
    foodType
    name
    inStock
    price
  }
}
`

export default graphql(QUERY)(Products)