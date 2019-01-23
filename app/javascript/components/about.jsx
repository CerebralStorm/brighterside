import React from 'react'

class About extends React.Component {
  render() {
    return (
      <section className="about-us-area section-padding-100-0">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-lg-5">
              <div className="section-heading">
                <h2>ABOUT US</h2>
                <p>We are leading in the plants service fields.</p>
              </div>
              <p>Quisque orci quam, vulputate non commodo finibus, molestie ac ante. Duis in sceleri quesem. Nulla sit amet varius nunc. Maecenas dui, tempeu ullam corper in.</p>

              <div className="alazea-progress-bar mb-50">

                <div className="single_progress_bar">
                  <p>Office plants</p>
                  <div id="bar1" className="barfiller">
                    <div className="tipWrap">
                      <span className="tip"></span>
                    </div>
                    <span className="fill" data-percentage="80"></span>
                  </div>
                </div>


                <div className="single_progress_bar">
                  <p>Field manager</p>
                  <div id="bar2" className="barfiller">
                    <div className="tipWrap">
                      <span className="tip"></span>
                    </div>
                    <span className="fill" data-percentage="70"></span>
                  </div>
                </div>


                <div className="single_progress_bar">
                  <p>Landscape design</p>
                  <div id="bar3" className="barfiller">
                    <div className="tipWrap">
                      <span className="tip"></span>
                    </div>
                    <span className="fill" data-percentage="85"></span>
                  </div>
                </div>
                <div className="single_progress_bar">
                  <p>Garden Care</p>
                  <div id="bar4" className="barfiller">
                    <div className="tipWrap">
                      <span className="tip"></span>
                    </div>
                    <span className="fill" data-percentage="65"></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="alazea-benefits-area">
                <div className="row">

                  <div className="col-12 col-sm-6">
                    <div className="single-benefits-area">
                      <img src="img/core-img/b1.png" alt="" />
                      <h5>Quality Products</h5>
                      <p>Intiam eu sagittis est, at commodo lacini libero. Praesent dignissim sed odio vel aliquam manta lagorn.</p>
                    </div>
                  </div>


                  <div className="col-12 col-sm-6">
                    <div className="single-benefits-area">
                      <img src="img/core-img/b2.png" alt="" />
                      <h5>Perfect Service</h5>
                      <p>Intiam eu sagittis est, at commodo lacini libero. Praesent dignissim sed odio vel aliquam manta lagorn.</p>
                    </div>
                  </div>


                  <div className="col-12 col-sm-6">
                    <div className="single-benefits-area">
                      <img src="img/core-img/b3.png" alt="" />
                      <h5>100% Natural</h5>
                      <p>Intiam eu sagittis est, at commodo lacini libero. Praesent dignissim sed odio vel aliquam manta lagorn.</p>
                    </div>
                  </div>


                  <div className="col-12 col-sm-6">
                    <div className="single-benefits-area">
                      <img src="img/core-img/b4.png" alt="" />
                      <h5>Environmentally friendly</h5>
                      <p>Intiam eu sagittis est, at commodo lacini libero. Praesent dignissim sed odio vel aliquam manta lagorn.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="border-line"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
