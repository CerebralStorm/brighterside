import React from 'react'
import { Link } from 'react-router-dom'
import { UserApi } from '../api/user_api'
import { connect } from 'react-redux'
import { Redirect } from 'react-router';

class SignUp extends React.Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    UserApi.signUp(this.state).then(response => {
      this.setState({ redirectToConfirmation: true } )
    })
  }

  render() {
    if (this.state.redirectToConfirmation) {
      return <Redirect to="/confirm_user" />
    }
    return (
      <div className='container'>
        <form className="form-horizontal" role="form">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <h2>Register New User</h2>
              <hr />
            </div>
          </div>
            <div className="row">
              <div className="col-md-3 field-label-responsive">
                <label htmlFor="email">E-Mail Address</label>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                    <div className="input-group-addon"><i className="fa fa-at"></i></div>
                    <input type="email" name="email" className="form-control" id="email" placeholder="you@example.com" required autoFocus value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })}/>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-control-feedback">
                  <span className="text-danger align-middle">
                    Please enter a valid email address.
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 field-label-responsive">
                <label htmlFor="password">Password</label>
              </div>
              <div className="col-md-6">
                <div className="form-group has-danger">
                  <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                    <div className="input-group-addon"><i className="fa fa-key"></i></div>
                    <input type="password" name="password" className="form-control" id="password" placeholder="Password" required value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })}/>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-control-feedback">
                  <span className="text-danger align-middle">
                      <i className="fa fa-close"> Example Error Message</i>
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 field-label-responsive">
                <label htmlFor="password">Confirm Password</label>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                    <div className="input-group-addon">
                      <i className="fa fa-repeat"></i>
                    </div>
                    <input type="password" name="password-confirmation" className="form-control" id="password-confirm" placeholder="Password" required value={this.state.passwordConfirmation} onChange={(e) => this.setState({ passwordConfirmation: e.target.value })} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <button type="submit" className="btn btn-success" onClick={this.handleSubmit}><i className="fa fa-user-plus"></i> Register</button>
              </div>
            </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    products: state.products
  }
}

export default connect(mapStateToProps)(SignUp)
export { SignUp };