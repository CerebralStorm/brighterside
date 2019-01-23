import React from 'react'

class Blog extends React.Component {
  render() {
    return (
      <section className="alazea-blog-area section-padding-100-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading text-center">
                <h2>LATEST NEWS</h2>
                <p>The breaking news about Gardening &amp; House plants</p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-blog-post mb-100">
                <div className="post-thumbnail mb-30">
                  <a href="single-post.html"><img src="img/bg-img/6.jpg" alt="" /></a>
                </div>
                <div className="post-content">
                  <a href="single-post.html" className="post-title">
                    <h5>Garden designers across the country forecast ideas shaping the gardening world in 2018</h5>
                  </a>
                  <div className="post-meta">
                    <a href="#"><i className="fa fa-clock-o" aria-hidden="true"></i> 20 Jun 2018</a>
                    <a href="#"><i className="fa fa-user" aria-hidden="true"></i> Alan Jackson</a>
                  </div>
                  <p className="post-excerpt">Integer luctus diam ac scerisque consectetur. Vimus ottawas nec lacus sit amet. Aenean interdus mid vitae.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-blog-post mb-100">
                <div className="post-thumbnail mb-30">
                  <a href="single-post.html"><img src="img/bg-img/7.jpg" alt="" /></a>
                </div>
                <div className="post-content">
                  <a href="single-post.html" className="post-title">
                    <h5>2018 Midwest Tree and Shrub Conference: Resilient Plants for a Lasting Landscape</h5>
                  </a>
                  <div className="post-meta">
                    <a href="#"><i className="fa fa-clock-o" aria-hidden="true"></i> 20 Jun 2018</a>
                    <a href="#"><i className="fa fa-user" aria-hidden="true"></i> Christina Aguilera</a>
                  </div>
                  <p className="post-excerpt">Integer luctus diam ac scerisque consectetur. Vimus ottawas nec lacus sit amet. Aenean interdus mid vitae.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-blog-post mb-100">
                <div className="post-thumbnail mb-30">
                  <a href="single-post.html"><img src="img/bg-img/8.jpg" alt="" /></a>
                </div>
                <div className="post-content">
                  <a href="single-post.html" className="post-title">
                    <h5>The summer coming up, it’s time for both us and the flowers to soak up the sunshine</h5>
                  </a>
                  <div className="post-meta">
                    <a href="#"><i className="fa fa-clock-o" aria-hidden="true"></i> 19 Jun 2018</a>
                    <a href="#"><i className="fa fa-user" aria-hidden="true"></i> Mason Jenkins</a>
                  </div>
                  <p className="post-excerpt">Integer luctus diam ac scerisque consectetur. Vimus ottawas nec lacus sit amet. Aenean interdus mid vitae.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    );
  }
}

export default Blog;
