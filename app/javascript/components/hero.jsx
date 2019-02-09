import React from 'react'

class Hero extends React.Component {
  render() {
    return (
      <section className="container">
        <div className="jumbotron mr-auto ml-auto">
          <h1 className="display-4 text-center">Welcome to The Brighter Side</h1>
          <p className="lead text-center">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-4" />
          <p className='text-center'>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead text-center">
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </p>
        </div>
      </section>
    );
  }
}

export default Hero;
