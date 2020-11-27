import * as types from "./actionTypes";

const initstate = {
  vehicle: [],
  isAuth: false,
  userEmail: "",
  searchedVehicle: {},
  totalCount: 0,
};

const reducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case types.LOGIN_REQ:
      return {
        ...state,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        userEmail: payload.email,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
      };
    case types.REGISTER_REQ:
      return {
        ...state,
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        isAuth: true,
        userEmail: payload.email,
      };
    case types.REGISTER_FAILURE:
      return {
        ...state,
      };
    case types.ALL_VEHICLE_DATA_REQ:
      return {
        ...state,
      };
    case types.ALL_VEHICLE_DATA_SUCCESS:
      console.log(payload);
      return {
        ...state,
        vehicle: payload.item,
        totalCount: payload.totalCount,
      };
    case types.ALL_VEHICLE_DATA_FAILURE:
      return {
        ...state,
      };
    case types.SEARCH_REQ:
      return {
        ...state,
      };
    case types.SEARCH_SUCCESS:
      return {
        ...state,
        searchedVehicle: payload,
      };
    case types.SEARCH_FAILURE:
      return {
        ...state,
      };
    case types.FILTER_REQ:
      return {
        ...state,
      };
    case types.FILTER_SUCCESS:
      console.log(payload);
      return {
        ...state,
        vehicle: payload,
      };
    case types.FILTER_FAILURE:
      return {
        ...state,
      };
    case types.SORT_REQ:
      return {
        ...state,
      };
    case types.SORT_SUCCESS:
      console.log(payload);
      return {
        ...state,
        vehicle: payload,
      };
    case types.SORT_FAILURE:
      return {
        ...state,
      };
    case types.DELETE_REQ:
      return {
        ...state,
      };
    case types.DELETE_SUCCESS:
      console.log(payload);
      return {
        ...state,
        vehicle: payload,
      };
    case types.DELETE_FAILURE:
      return {
        ...state,
      };

    default:
      return state;
  }
};
export default reducer;
