import React from 'react';
import firebase from '../firebase';


class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.firebase = firebase;
    this.state = {
      password: 'abcdefg',
      username: 'abcdefg',
      email: 'yongdoree@gmail.com',
    }
  }

  componentDidMount() {

  }

  handleSignUp = () => {
    console.log('sign up request');

    const {
      email,
      password,
    } = this.state;

    this.firebase.auth().createUserWithEmailAndPassword(
      email,
      password
    ).catch((error) => {
      console.log(error.code);
      console.log(error.message);
    })
  }

  render() {
    return (
      <div className="middle-box text-center loginscreen animated fadeInDown">
        <div>
          <div>
            <h1 className="logo-name">
              IN+
            </h1>
          </div>
          <h3>Register to Zenith</h3>
          <p>Create account to see it in action</p>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
            />
          </div>
          <button
            className="btn btn-primary block full-width m-b"
            onClick={this.handleSignUp}
          >
            Register
          </button>
          <p className="text-muted text-center">
            Already have an account?
          </p>
          <a className="btn btn-sm btn-white btn-block">
            Login
          </a>
        </div>
      </div>
    );
  }
}

export default RegisterPage;
