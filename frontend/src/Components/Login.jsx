import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../Redux/action";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleLoginValidation = (e) => {
    e.preventDefault();
    this.props.loginauth({ ...this.state });
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div
        style={{
          padding: "7px",
          fontFamily: "esti",
          overflowX: "hidden",
        }}
      >
        <div className="row">
          <div className="col-6">
          </div>
          <div className="col-4">
            {this.props.isAuth && <Redirect to="/dashboard" />}
            <div> 
              <h3 style={{fontSize:"-webkit-xxx-large"}} className="mt-5">OPERATOR VEHICLE MANAGEMENT</h3>
              <div
                className="container"
                style={{ width: "400px", marginTop: "200px",marginLeft:"600px", background:"grey", padding:"100px", borderRadius:"10px" }}
              >
                <form onSubmit={this.handleLoginValidation}>
                  <div class="form-group">
                    <label
                      for="exampleInputEmail1"
                      style={{ fontSize: "30px" }}
                    >
                      Email
                    </label>
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
                    <label
                      for="exampleInputPassword1"
                      style={{ fontSize: "30px" }}
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      onChange={this.handleChange}
                      value={password}
                      name="password"
                    />
                  </div>
                  <button
                    type="submit"
                    style={{ fontSize: "25px", padding:"10px", margin:"10px" }}
                    class="btn col-12 "
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
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
  loginauth: (payload) => dispatch(login(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);