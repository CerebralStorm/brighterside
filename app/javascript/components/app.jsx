import React from 'react'
import Header from './header'
import Footer from './footer'
import FlashMessage from './flash_message'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div id='main-content'>
          <FlashMessage />
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;