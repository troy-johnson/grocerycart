import React, { Component } from 'react'
import '../App.css'

import { graphql } from 'react-apollo'

import gql from 'graphql-tag'

class ProductDetail extends Component {
    render() {
  
      const { loading, allGroceries } = this.props.data
  
      return (
        <div className="jumbotron container-fluid">
          <h1 className="display-3">Product Detail</h1>
          <p className="lead">test:</p>
          <div>
          {!loading && allGroceries.map(grocery => (
            <div key={grocery.id} className='card'>
              <div>
                <a href={'/products/' + grocery.id}><img className='card-img-top' src={grocery.image} alt={grocery.name} /></a>
                <h4 className='card-title'>{grocery.name}</h4>
                <p>Price: ${grocery.price} Stock: {grocery.inStock}</p>
                <div className='row justify-content-around'>
                  <div className='col'>
                    <a href={'/products/' + grocery.id} className='btn btn-info'>More Information</a>
                  </div>
                  <div className='col'>
                    <a href='#' className='btn btn-primary'>Add to cart</a>
                  </div>
                </div>  
              </div>
            </div>   
        ))}
          </div>
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
export default graphql(QUERY)(ProductDetail)