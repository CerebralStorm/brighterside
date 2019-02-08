import React from 'react'
import Header from './header'
import Footer from './footer'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div id='main-content'>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;