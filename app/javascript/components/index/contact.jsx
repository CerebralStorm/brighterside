import React from 'react'
import { connect } from 'react-redux'
import MessageApi from '../../api/message_api'
import { showFlashMessage } from '../../actions/flash'

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitMessage = this.submitMessage.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  }

  handleChange(event) {
    let state = this.state
    state[event.target.name] = event.target.value
    this.setState(state)
  }

  submitMessage(event) {
    event.preventDefault()
    MessageApi.createMessage({message: this.state}).then(() => {
      this.props.dispatch(showFlashMessage('Thank you for your message', 'success'))
      this.setState({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      window.scrollTo(0, 0)
    })
  }

  render() {
    return (
      <section id='contact' className="contact-area m-4 section-padding-100-0">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 col-lg-5">
              <div className="section-heading">
                <h2>GET IN TOUCH</h2>
                <p>Send us a message, we will call back later</p>
              </div>
              <div className="contact-form-area mb-100">
                <form action="#" method="post">
                  <div className="row">
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <input name="name" type="text" onChange={this.handleChange} value={this.state.name} className="form-control" id="contact-name" placeholder="Your Name" />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <input name="email" type="email" onChange={this.handleChange} value={this.state.email} className="form-control" id="contact-email" placeholder="Your Email" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input name="subject" type="text" onChange={this.handleChange} value={this.state.subject} className="form-control" id="contact-subject" placeholder="Subject" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <textarea name="message" onChange={this.handleChange} value={this.state.message} className="form-control" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" onClick={this.submitMessage} className="btn btn-primary mt-15">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="map-area mb-100">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22236.40558254599!2d-118.25292394686001!3d34.057682914027104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2z4Kay4Ka4IOCmj-CmnuCnjeCmnOCnh-CmsuCnh-CmuCwg4KaV4KeN4Kav4Ka-4Kay4Ka_4Kar4KeL4Kaw4KeN4Kao4Ka_4Kav4Ka84Ka-LCDgpq7gpr7gprDgp43gppXgpr_gpqgg4Kav4KeB4KaV4KeN4Kak4Kaw4Ka-4Ka34KeN4Kaf4KeN4Kaw!5e0!3m2!1sbn!2sbd!4v1532328708137" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    flash: state.flash
  }
}

export default connect(mapStateToProps)(Contact)
