import React from 'react'
import { Link } from 'react-router-dom'
import Hero from './index/hero'
import Service from './index/service'
import About from './index/about'
import Testimonial from './index/testimonial'
import Product from './index/product'
import Blog from './index/blog'
import Subscribe from './index/subscribe'
import Contact from './index/contact'
import { loadProducts } from '../actions/product'
import { connect } from 'react-redux'
import ProductTile from './products/product_tile'

class Index extends React.Component {

  render() {
    return (
      <div>
        <Hero />
        <Service />
        <About />
        <Product />
        <Testimonial />
        <Blog />
        <Subscribe />
        <Contact />
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

export default connect(mapStateToProps)(Index)
export { Index };