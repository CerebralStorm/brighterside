import React from 'react'
import logo from '../assets/images/1.png'
import { loadCart } from '../actions/cart'
import { signOut } from '../actions/user'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { currentUser } from '../actions/user'
import Cookies from 'js-cookie';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.cartCount = this.cartCount.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(currentUser())
    this.props.dispatch(loadCart())
  }

  cartCount() {
    let quantity = 0;
    if(this.props.cart && Object.keys(this.props.cart).length > 0){
      Object.values(this.props.cart).forEach((item) => {
        quantity += item.quantity
      })
    }
    return quantity;
  }

  render() {
    console.log('access-token:', Cookies.get('access-token'))
    console.log('uid:', Cookies.get('uid'))
    console.log('client:', Cookies.get('client'))
    console.log('expiry:', Cookies.get('expiry'))
    console.log(this.props.cart)

    return (
      <header>
        <nav id='main-navbar' className="navbar fixed-top navbar-expand-lg justify-content-between navbar-light bg-light">
          <div id='main-contact-info' className='container'>
            <ul className="navbar-nav mr-auto mt-2">
              <li className="nav-item">
                <a className="nav-link" href="#" data-toggle="tooltip" data-placement="bottom" title="info@shopbrighterside.com"><i className="fa fa-envelope-o" aria-hidden="true"></i> <span>Email: info@shopbrighterside.com</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" data-toggle="tooltip" data-placement="bottom" title="+1 801 123 1234"><i className="fa fa-phone" aria-hidden="true"></i> <span>Call Us: +1 801 123 1234</span></a>
              </li>
            </ul>
            <ul className='navbar-nav ml-auto mt-2'>
              {this.props.currentUser.id &&
                <li className="nav-item">
                  <a href='#' className="nav-link" onClick={(e) => { this.props.dispatch(signOut()) }} >Sign out</a>
                </li>
              }
              <li className="nav-item">
                <Link to={'/sign_up'} className="nav-link">Sign Up</Link>
              </li>
              <li className="nav-item">
                <Link to={'/login'} className="nav-link">Login</Link>
              </li>
              <li className="nav-item">
                <Link to={'/cart'} className="nav-link">Cart ({this.cartCount()})</Link>
              </li>
            </ul>
          </div>
          <hr />
          <div className='container'>
            <Link to={'/'} id='main-logo-brand' className="navbar-brand"><img id='navbar-logo' src={logo} /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar-links">
              <ul className="navbar-nav ml-auto ml-auto">
                <li className="nav-item mr-4">
                  <a className="nav-link" href="#">Products</a>
                </li>
                <li className="nav-item mr-4">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item mr-4">
                  <a className="nav-link" href="#">Blog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Header)
export { Header };

