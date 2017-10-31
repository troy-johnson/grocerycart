import React, { Component } from 'react'
import '../App.css';

import { graphql } from 'react-apollo'

import gql from 'graphql-tag'


class Products extends Component {
  render() {

    const { loading, allGroceries } = this.props.data

    return (
      <div className="jumbotron container-fluid">
        <h1 className="display-3">Product Listing</h1>
        <p className="lead">This is a complete listing of our fresh, locally grown produce and prime-choice meat we have in stock.</p>
        {!loading && allGroceries.map(grocery => (
          <div key={grocery.id} className="card">
            <div>
              <img className="card-img-top" src={grocery.image} alt={grocery.name} />
              <h4 className="card-title">{grocery.name}</h4>
              <p>Price: ${grocery.price} Stock: {grocery.inStock}</p>
              <a href="#" class="btn btn-primary">Add to cart</a>
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
    image
    inStock
    price
  }
}
`

export default graphql(QUERY)(Products)