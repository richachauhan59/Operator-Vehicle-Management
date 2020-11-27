import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { dashBoardData, deleteaVehicle } from "../Redux/action";
import Nav from "./Nav";
import { Pagination } from "@material-ui/lab";

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
  }
  componentDidMount() {
    this.props.getData({ email: this.props.email });
  }

  handleDelete = (e, id) => {
    //console.log("this is ", this.props, this.props._id);
    let payload = { id: id, email: this.props.email, page: this.state.page };
    this.props.deleteData(payload);
  };
  handlePageChange = (e, value) => {
    this.setState({
      page: value,
    });
    this.props.getData({ email: this.props.email, page: value });
  };

  render() {
    return (
      <div
        style={{
          padding: "7px",
          fontFamily: "esti",
          color: "black",
          fontWeight: "bolder",
          background: "whitesmoke",
        }}
      >
        <Nav />
        {!this.props.isAuth && <Redirect to="/" />}
        <div className="container">
          <div className="row" style={{display:"flex"}}>
            {this.props.vehicleData &&
              this.props.vehicleData.map((item) => (
                <div className="col-3 mb-2 mt-4" style={{background:"green", margin:"50px"}} key={item._id}>
                  <div style={{background:"grey"}} class="card shadow">
                    <img
                      class="card-img-top"
                      src={item.vehicleImage}
                      alt="Card"
                    />
                    <div class="card-body">
                      <h5 class="card-title">{item.vehicleName}</h5>
                      <h6 class="card-title">Type: {item.vehicleType}</h6>
                      <h6 class="card-title">
                        Capacity: {item.vehicleCapacity}
                      </h6>
                      <h6 class="card-title">Reg No: {item.RegistrationNo}</h6>
                      <Link
                        to={{
                          pathname: "/single",
                          state: {
                            item: item,
                          },
                        }}
                      >
                        <button className="rounded bg-secondary text-white">
                          SEE MORE
                        </button>
                      </Link>

                      <button
                        className="rounded bg-secondary text-white"
                        onClick={(e) => this.handleDelete(e, item._id)}
                      >
                        DELETE
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <Pagination
          count={Math.ceil(this.props.totalCount / 8)}
          variant="outlined"
          page={this.state.page}
          onChange={this.handlePageChange}
          style={{ width: "290px", margin: "0 auto", marginTop: "5px" }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  vehicleData: state.vehicle,
  email: state.userEmail,
  isAuth: state.isAuth,
  totalCount: state.totalCount,
});

const mapDispatchToProps = (dispatch) => ({
  getData: (payload) => dispatch(dashBoardData(payload)),
  deleteData: (payload) => dispatch(deleteaVehicle(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);