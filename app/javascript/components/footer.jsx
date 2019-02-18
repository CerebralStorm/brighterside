import React from 'react'
// import Disclaimer from './disclaimer'
import { Link } from 'react-router-dom'

class Footer extends React.Component {
  render() {
    return (

      <footer className="footer-area bg-img">

        <div className="main-footer-area">
          <div className="container">
            <div className="row">


              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget">
                  <div className="footer-logo mb-30">
                    <a href="#"><img src="img/core-img/logo.png" alt="" /></a>
                  </div>
                  <p>Lorem ipsum dolor sit samet, consectetur adipiscing elit. India situs atione mantor</p>
                  <div className="social-info">
                    <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                  </div>
                </div>
              </div>


              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget">
                  <div className="widget-title">
                    <h5>QUICK LINK</h5>
                  </div>
                  <nav className="widget-nav">
                    <ul>
                      <li><a href="#">Purchase</a></li>
                      <li><a href="#">FAQs</a></li>
                      <li><a href="#">Payment</a></li>
                      <li><a href="#">News</a></li>
                      <li><a href="#">Return</a></li>
                      <li><a href="#">Advertise</a></li>
                      <li><a href="#">Shipping</a></li>
                      <li><a href="#">Career</a></li>
                      <li><a href="#">Orders</a></li>
                      <li><a href="#">Policities</a></li>
                    </ul>
                  </nav>
                </div>
              </div>


              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget">
                  <div className="widget-title">
                    <h5>BEST SELLER</h5>
                  </div>


                  <div className="single-best-seller-product d-flex align-items-center">
                    <div className="product-thumbnail">
                      <a href="shop-details.html"><img src="img/bg-img/4.jpg" alt="" /></a>
                    </div>
                    <div className="product-info">
                      <a href="shop-details.html">Cactus Flower</a>
                      <p>$10.99</p>
                    </div>
                  </div>


                  <div className="single-best-seller-product d-flex align-items-center">
                    <div className="product-thumbnail">
                      <a href="shop-details.html"><img src="img/bg-img/5.jpg" alt="" /></a>
                    </div>
                    <div className="product-info">
                      <a href="shop-details.html">Tulip Flower</a>
                      <p>$11.99</p>
                    </div>
                  </div>
                </div>
              </div>


              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget">
                  <div className="widget-title">
                    <h5>CONTACT</h5>
                  </div>

                  <div className="contact-information">
                    <p><span>Address:</span> 505 Silk Rd, New York</p>
                    <p><span>Phone:</span> +1 234 122 122</p>
                    <p><span>Email:</span> info.deercreative@gmail.com</p>
                    <p><span>Open hours:</span> Mon - Sun: 8 AM to 9 PM</p>
                    <p><span>Happy hours:</span> Sat: 2 PM to 4 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="footer-bottom-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="border-line"></div>
              </div>

              <div className="col-12 col-md-6">
                <div className="copywrite-text">
                  <p>&copy; Copyright 2019 | All rights reserved</p>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <ul className="nav justify-content-center">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">Active</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export { Footer };
export default Footer;