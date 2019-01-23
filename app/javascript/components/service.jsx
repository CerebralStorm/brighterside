import React from 'react'

class Service extends React.Component {
  render() {
    return (
      <section className="our-services-area bg-gray section-padding-100-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading text-center">
                <h2>OUR SERVICES</h2>
                <p>We provide the perfect service for you.</p>
              </div>
            </div>
          </div>

          <div className="row justify-content-between">
            <div className="col-12 col-lg-5">
              <div className="alazea-service-area mb-100">


                <div className="single-service-area d-flex align-items-center wow fadeInUp" data-wow-delay="100ms">

                  <div className="service-icon mr-30">
                    <img src="img/core-img/s1.png" alt="" />
                  </div>

                  <div className="service-content">
                    <h5>Plants Care</h5>
                    <p>In Aenean purus, pretium sito amet sapien denim moste consectet sedoni urna placerat sodales.service its.</p>
                  </div>
                </div>


                <div className="single-service-area d-flex align-items-center wow fadeInUp" data-wow-delay="300ms">

                  <div className="service-icon mr-30">
                    <img src="img/core-img/s2.png" alt="" />
                  </div>

                  <div className="service-content">
                    <h5>Pressure Washing</h5>
                    <p>In Aenean purus, pretium sito amet sapien denim moste consectet sedoni urna placerat sodales.service its.</p>
                  </div>
                </div>


                <div className="single-service-area d-flex align-items-center wow fadeInUp" data-wow-delay="500ms">

                  <div className="service-icon mr-30">
                    <img src="img/core-img/s3.png" alt="" />
                  </div>

                  <div className="service-content">
                    <h5>Tree Service &amp; Trimming</h5>
                    <p>In Aenean purus, pretium sito amet sapien denim moste consectet sedoni urna placerat sodales.service its.</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="alazea-video-area bg-overlay mb-100">
                <img src="img/bg-img/23.jpg" alt="" />
                <a href="http://www.youtube.com/watch?v=7HKoqNJtMTQ" className="video-icon">
                  <i className="fa fa-play" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Service;
