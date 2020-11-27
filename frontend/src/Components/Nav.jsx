import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchVehicle, filterVehicle, sortVehicle } from "../Redux/action";

function Nav(props) {
  const email = useSelector((state) => state.userEmail);
  const vehicle = useSelector((state) => state.searchedVehicle);
  const lengthId = useSelector((state) => state.vehicle);
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const handleSearch = () => {
    dispatch(searchVehicle({ email, id }));
    console.log(vehicle);
  };

  const filterData = (e) => {
    console.log(e.target.value);
    dispatch(filterVehicle({ email, vehicleType: e.target.value }));
  };

  const sortData = (e) => {
    dispatch(sortVehicle({ email, order: e.target.value }));
  };

  const handleAdd = (e) => {};
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-lg-12 col-sm-12 col-md-12 bg-dark "
            style={{
              padding: "10px",
              fontFamily: "Fredericka the Great, cursive",
              fontWeight: "bold",
            }}
          >
            <h2
              style={{ fontSize: "30px",textAlign: "center" }}
            >
            Operating Vehicle Management
            </h2>

             <input
              type="text"
              placeholder="SEARCH VEHICLE BY ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="text-white bg-dark ml-1"
              style={{ borderRadius: "2px" }}
            >
              SEARCH
            </button>
            <div className="container">
              <div className="row">
                <div className="col-4 text-left text-white">
                  <label for="cars" className="mr-2">
                    FILTER BY
                  </label>

                  <select name="vehicle" id="vehicles" onChange={filterData}>
                    <option value="Car">CAR</option>
                    <option value="Bus">BUS</option>
                    <option value="Van">VAN</option>
                  </select>
                </div>
                <div className="col-4 text-right text-white">
                  <label for="cars" className="mr-2">
                    CAPACITY
                  </label>
                  <select name="sort" id="sort" onChange={sortData}>
                    <option value="asc">ASC</option>
                    <option value="desc">DESC</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        {vehicle && vehicle.vehicleImage && (
          <div className="row">
            <div className="col-4 mx-auto">
              <div class="card">
                <img
                  class="card-img-top  border-none"
                  src={vehicle.vehicleImage}
                  alt="card"
                  style={{ height: "350px" }}
                />
                <div class="card-body">
                  <h5 class="card-title">{vehicle.vehicleName}</h5>
                  <h6 class="card-title">Type: {vehicle.vehicleType}</h6>
                  <h6 class="card-title">
                    Capacity: {vehicle.vehicleCapacity}
                  </h6>
                  <h6 class="card-title">Reg No: {vehicle.RegistrationNo}</h6>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;