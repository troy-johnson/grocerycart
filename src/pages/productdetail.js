import React, { Component } from 'react'
import '../App.css'
import * as Cart from '../configuration/cart'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class ProductDetail extends Component {

    renderGrocery = () => {

      const { loading, Grocery } = this.props.data
      return !loading && (
        <div className='card'>  
        <div>
          <img className='card-img-top' src={Grocery.image} alt={Grocery.name} />
          <h4 className='card-title'>{Grocery.name}</h4>
          <p className="lead">ID:{this.props.match.params.url}</p>
          <p>Price: ${Grocery.price} Stock: {Grocery.inStock}</p>
          <p>{Grocery.description}</p>
          <div className='row justify-content-around'>
            <div className='col'>
              <button type="button" class="btn btn-primary" onClick={() =>{Cart.addCart(Grocery.name,[Grocery.price,'quantity'])}}>Add to cart</button>
            </div>
          </div>  
        </div>
      </div>  
      )
    }


    render() {
  
      const { loading, Grocery } = this.props.data
      
console.log(this.props.data)

      return (
        <div className="jumbotron container-fluid">
          <h1 className="display-3">Product Detail</h1>
          <div>
            {this.renderGrocery()}        
          </div>
        </div>
      )
    }
  }

  const QUERY = gql`
  query ($id: ID!) {
    Grocery (id: $id) {
      id
      image
      description
      foodType
      name
      inStock
      price
    }
  }
  `

export default graphql(QUERY, {
  options: (props) => ({
    variables: {
      id: props.match.params.url
    }
  })
})(ProductDetail)