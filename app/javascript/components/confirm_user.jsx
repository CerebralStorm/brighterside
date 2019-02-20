import React from 'react'

class ConfirmUser extends React.Component {
  render() {
    return (
      <div className="container section text-center">
        <div className="row">
          <div className="col-md-12">
            <div>
              <h1>Please Confirm</h1>
              <h2>Please check your email, you should recieve a confirmation link shortly</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ConfirmUser;