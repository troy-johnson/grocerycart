import React from 'react'
import '../App.css';

import { graphql } from 'react-apollo'

import gql from 'graphql-tag'


export default () => {
  return (
    <div className="jumbotron">
      <h1 className="display-3">Product Listing</h1>
      <p className="lead">This is a complete listing of all of the fresh, locally grown produce and prime-choice meat we have in stock.</p>
      <p>Product listing (graphcool query) here...</p>
    </div>
  )
}