import * as types from "./actionTypes";
import Axios from "axios";

const loginRequest = (payload) => {
  return {
    type: types.LOGIN_REQ,
    payload,
  };
};

const loginSuccess = (payload) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload,
  };
};

const loginFailure = (payload) => {
  return {
    type: types.LOGIN_FAILURE,
    payload,
  };
};

const login = (payload) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const data = await Axios.post("http://localhost:8000/login", {
      ...payload,
    }).then((res) => res.data);
    dispatch(loginSuccess(payload));
  } catch (error) {
    dispatch(loginFailure("Something went Wrong,try again"));
  }
};

const registerRequest = (payload) => {
  return {
    type: types.REGISTER_REQ,
    payload,
  };
};

const registerSuccess = (payload) => {
  return {
    type: types.REGISTER_SUCCESS,
    payload,
  };
};

const registerFailure = (payload) => {
  return {
    type: types.REGISTER_FAILURE,
    payload,
  };
};

const register = (payload) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const data = await Axios.post("http://localhost:8000/register", {
      ...payload,
    }).then((res) => res.data);
    dispatch(registerSuccess(payload));
  } catch (error) {
    dispatch(registerFailure("Something went Wrong,try again"));
  }
};

const allDataRequest = (payload) => {
  return {
    type: types.ALL_VEHICLE_DATA_REQ,
    payload,
  };
};

const alldataSuccess = (payload) => {
  return {
    type: types.ALL_VEHICLE_DATA_SUCCESS,
    payload,
  };
};

const alldataFailure = (payload) => {
  return {
    type: types.ALL_VEHICLE_DATA_FAILURE,
    payload,
  };
};

const dashBoardData = (payload) => async (dispatch) => {
  dispatch(allDataRequest());
  try {
    const data = await Axios.get(`http://localhost:8000/all/${payload.email}`, {
      params: {
        page: payload.page,
        limit: payload.limit,
      },
    }).then((res) => res.data);
    console.log(data);
    dispatch(alldataSuccess(data));
  } catch (error) {
    dispatch(alldataFailure("Something went Wrong,try again"));
  }
};

const searchReq = (payload) => {
  return {
    type: types.SEARCH_REQ,
    payload,
  };
};

const searchSuccess = (payload) => {
  return {
    type: types.SEARCH_SUCCESS,
    payload,
  };
};

const searchFailure = (payload) => {
  return {
    type: types.SEARCH_FAILURE,
    payload,
  };
};

const filterreq = (payload) => {
  return {
    type: types.FILTER_REQ,
    payload,
  };
};

const filterSuccess = (payload) => {
  return {
    type: types.FILTER_SUCCESS,
    payload,
  };
};

const filterFailure = (payload) => {
  return {
    type: types.FILTER_FAILURE,
    payload,
  };
};

const filterVehicle = (payload) => async (dispatch) => {
  dispatch(filterreq());
  try {
    const data = await Axios.get(
      `http://localhost:8000/type/${payload.email}`,
      {
        params: {
          vehicleType: payload.vehicleType,
        },
      }
    ).then((res) => res.data);
    console.log(data);
    dispatch(filterSuccess(data));
  } catch (error) {
    dispatch(filterFailure("Something went Wrong,try again"));
  }
};

const sortreq = (payload) => {
  return {
    type: types.SORT_REQ,
    payload,
  };
};

const sortSuccess = (payload) => {
  return {
    type: types.SORT_SUCCESS,
    payload,
  };
};

const sortFailure = (payload) => {
  return {
    type: types.SORT_FAILURE,
    payload,
  };
};

const sortVehicle = (payload) => async (dispatch) => {
  dispatch(sortreq());
  try {
    const data = await Axios.get(
      `http://localhost:8000/sort/${payload.email}`,
      {
        params: {
          order: payload.order,
        },
      }
    ).then((res) => res.data);
    console.log(data);
    dispatch(sortSuccess(data));
  } catch (error) {
    dispatch(sortFailure("Something went Wrong,try again"));
  }
};

const deletereq = (payload) => {
  return {
    type: types.DELETE_REQ,
    payload,
  };
};

const deleteSuccess = (payload) => {
  return {
    type: types.DELETE_SUCCESS,
    payload,
  };
};

const deleteFailure = (payload) => {
  return {
    type: types.DELETE_FAILURE,
    payload,
  };
};

const deleteaVehicle = (payload) => async (dispatch) => {
  console.log("hetting payload", payload);
  dispatch(deletereq());
  try {
    const data = await Axios.delete(
      `http://localhost:8000/delete/${payload.id}`
    ).then((res) => res.data);
    console.log(data);
    dispatch(deleteSuccess(data));
    dispatch(dashBoardData(payload));
  } catch (error) {
    dispatch(deleteFailure("Something went Wrong,try again"));
  }
};

const searchVehicle = (payload) => async (dispatch) => {
  dispatch(searchReq());
  try {
    const data = await Axios.get(`http://localhost:8000/vehicle/`, {
      params: {
        email: payload.email,
        id: payload.id,
      },
    }).then((res) => res.data);
    console.log(data);
    dispatch(searchSuccess(data));
  } catch (error) {
    dispatch(searchFailure("Something went Wrong,try again"));
  }
};

export {
  login,
  register,
  dashBoardData,
  searchVehicle,
  filterVehicle,
  sortVehicle,
  deleteaVehicle,
};
