import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { register } from "../Redux/action";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  }
  handleRegisterValidation = (e) => {
    e.preventDefault();
    this.props.registerauth({ ...this.state });
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { firstName, lastName, email, password } = this.state;
    return (
      <div>
        <div>
          {this.props.isAuth && <Redirect to="/dashboard" />}
          <div className="container">
            <form onSubmit={this.handleRegisterValidation}>
              <div class="form-group">
                <label for="exampleInputEmail1">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  text-dark
                  aria-describedby="emailHelp"
                  onChange={this.handleChange}
                  value={firstName}
                  name="firstName"
                />
                <label for="exampleInputEmail1">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  text-dark
                  aria-describedby="emailHelp"
                  onChange={this.handleChange}
                  value={lastName}
                  name="lastName"
                />
                <label for="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  text-dark
                  aria-describedby="emailHelp"
                  onChange={this.handleChange}
                  value={email}
                  name="email"
                />
              </div>

              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={this.handleChange}
                  value={password}
                  name="password"
                />
              </div>
              <button type="submit" class="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.isAuth,
});

const mapDispatchToProps = (dispatch) => ({
  registerauth: (payload) => dispatch(register(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
