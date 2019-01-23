import React from 'react'

class Subscribe extends React.Component {
  render() {
    return (
      <section className="subscribe-newsletter-area">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 col-lg-5">
              <div className="section-heading mb-0">
                <h2>Join the Newsletter</h2>
                <p>Subscribe to our newsletter and get 10% off your first purchase</p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="subscribe-form">
                <form action="#" method="get">
                  <input type="email" name="subscribe-email" id="subscribeEmail" placeholder="Enter your email" />
                  <button type="submit" className="btn alazea-btn">SUBSCRIBE</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="subscribe-side-thumb wow fadeInUp" data-wow-delay="500ms">
          <img className="first-img" src="img/core-img/leaf.png" alt="" />
        </div>
      </section>
    );
  }
}

export default Subscribe;
