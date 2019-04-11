import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { registerUser } from '../../actions';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    // Destructure from state
    const { name, email, password, password2 } = this.state;
    // Assign variables to new User
    const newUser = { name, email, password, password2 };

    this.props.registerUser(newUser);

    // Post with axios
    // axios // No need for localhost:5000 because of proxy value in package.json
    //   .post('api/users/register', newUser)
    //   .then(res => console.log(res.data))
    //   .catch(err => this.setState({ errors: err.response.data }));
  };

  render() {
    const { errors } = this.state;

    const { user } = this.props.auth;

    return (
      <div className="register">
        {user ? user.name : null}
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">
                Create your DevConnector account
              </p>
              <form onSubmit={this.onSubmit} noValidate>
                <div className="form-group">
                  <input
                    type="text"
                    className={
                      errors.name
                        ? 'form-control form-control-lg is-invalid'
                        : 'form-control form-control-lg'
                    }
                    placeholder="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className={
                      errors.email
                        ? 'form-control form-control-lg is-invalid'
                        : 'form-control form-control-lg'
                    }
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                  <small className="form-text text-muted">
                    This site uses Gravatar so if you want a profile image, use
                    a Gravatar email
                  </small>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={
                      errors.password
                        ? 'form-control form-control-lg is-invalid'
                        : 'form-control form-control-lg'
                    }
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={
                      errors.password2
                        ? 'form-control form-control-lg is-invalid'
                        : 'form-control form-control-lg'
                    }
                    placeholder="Confirm Password"
                    name="password2"
                    value={this.state.password2}
                    onChange={this.onChange}
                  />
                  {errors.password2 && (
                    <div className="invalid-feedback">{errors.password2}</div>
                  )}
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
