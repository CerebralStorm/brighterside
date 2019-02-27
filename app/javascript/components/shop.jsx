import React from 'react'
import Product from './index/product'
import { loadProducts } from '../actions/product'
import { connect } from 'react-redux'
import ProductTile from './products/product_tile'

class Shop extends React.Component {

  render() {
    return (
      <div>
        <Product />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    products: state.products
  }
}

export default connect(mapStateToProps)(Shop)
export { Index };