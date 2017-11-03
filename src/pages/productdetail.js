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
          <div>
          {!loading && allGroceries.map(grocery => (
            <div key={grocery.id} className='card'>
              <div>
                <img className='card-img-top' src={grocery.image} alt={grocery.name} />
                <h4 className='card-title'>{grocery.name}</h4>
                <p className="lead">ID:{this.props.match.params.url}</p>
                <p>Price: ${grocery.price} Stock: {grocery.inStock}</p>
                <p>{grocery.description}</p>
                <div className='row justify-content-around'>
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

  // const QUERY = gql`
  // query {
  //   allGroceries {
  //     id
  //     foodType
  //     name
  //     image
  //     inStock
  //     price
  //   }
  // }
  // `
  const QUERY = gql`
  query {
    allGroceries {
      id
      foodType
      name
      image
      description
      inStock
      price
    }
  }
  `

export default graphql(QUERY, {
  options: props => ({
    variables: {
      id: props.match.params.url
    }
  })
})(ProductDetail)