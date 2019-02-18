import React from 'react'
import logo from '../assets/images/1.png'
// import { loadCart } from '../actions/cart'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.cartCount = this.cartCount.bind(this)
  }

  componentDidMount() {
    // this.props.dispatch(loadCart())
  }

  cartCount() {
    // let quantity = 0;
    // if(this.props.cart && Object.keys(this.props.cart).length > 0){
    //   Object.values(this.props.cart).forEach((item) => {
    //     quantity += item.quantity
    //   })
    // }
    return 1;
  }

  render() {
    return (
      <header>
        <nav id='main-navbar' className="navbar fixed-top navbar-expand-lg justify-content-between navbar-light bg-light">
          <div id='main-contact-info' className='container'>
            <ul className="navbar-nav mr-auto mt-2">
              <li className="nav-item">
                <a className="nav-link" href="#" data-toggle="tooltip" data-placement="bottom" title="infodeercreative@gmail.com"><i className="fa fa-envelope-o" aria-hidden="true"></i> <span>Email: infodeercreative@gmail.com</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" data-toggle="tooltip" data-placement="bottom" title="+1 234 122 122"><i className="fa fa-phone" aria-hidden="true"></i> <span>Call Us: +1 234 122 122</span></a>
              </li>
            </ul>
            <ul className='navbar-nav ml-auto mt-2'>
              <li className="nav-item">
                <a className="nav-link" href="#">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Cart</a>
              </li>
            </ul>
          </div>
          <hr />
          <div className='container'>
            <a id='main-logo-brand' className="navbar-brand" href="#"><img id='navbar-logo' src={logo} /></a>
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

