import React, { Component } from 'react'
import '../App.css';

import { graphql } from 'react-apollo'

import gql from 'graphql-tag'


class Products extends Component {
  render() {

    const { loading, allGroceries } = this.props.data

    return (
      <div className='jumbotron container-fluid'>
        <div>
            <h1 className='display-3'>Product Listing</h1>
            <p className='lead'>This is a complete listing of our fresh, locally grown produce and prime-choice meat we have in stock.</p>
        </div>
        <div className='row justify-content-center'>
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
                    <a href='/cart' className='btn btn-primary'>Add to cart</a>
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

export default graphql(QUERY)(Products)