import React from 'react'
import { Link } from 'react-router-dom'
import Hero from './hero'
import Service from './service'
import About from './about'
import Portfolio from './portfolio'
import Testimonial from './testimonial'
import Product from './product'
import Blog from './blog'
import Subscribe from './subscribe'
import Contact from './contact'
// import { loadProducts } from '../actions/product'
import { connect } from 'react-redux'
// import ProductTile from './products/product_tile'
import { EmailSignUpForm, EmailSignInForm } from "redux-auth/bootstrap-theme";

class Index extends React.Component {
  componentDidMount() {
    // this.props.dispatch(loadProducts())
  }

  render() {
    return (
      <div>
        <EmailSignUpForm />
        <EmailSignInForm />
        <Hero />
        <Service />
        <About />
        <Portfolio />
        <Testimonial />
        <Product />
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