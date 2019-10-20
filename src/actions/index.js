import axios from "axios";

export const GET_LIST = "GET_LIST";
export const GET_DETAILS = "GET_DETAILS";
export const SET_LIST = "SET_LIST";
export const SET_DETAILS = "SET_DETAILS";
export const SET_LOADING = "SET_LOADING";

export function getList() {
  return async (dispatch, getState) => {
    dispatch(setLoading(true));
    if (getState().details != null) {
      dispatch(setDetails(null));
    }
    try {
      const result = await axios("https://pokeapi.co/api/v2/pokemon?limit=151");
      dispatch(setList(result.data.results));
      dispatch(setLoading(false));
    } catch (error) {
      console.error(error.message);
      return false;
    }
  };
}

export function getDetails(name) {
  return async (dispatch, getState) => {
    dispatch(setLoading(true));
    try {
      const result = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`);
      dispatch(setDetails(result.data));
      dispatch(setLoading(false));
    } catch (error) {
      console.error(error.message);
      return false;
    }
  };
}

export function setList(list) {
  return {
    type: SET_LIST,
    list
  };
}

export function setDetails(details) {
  return {
    type: SET_DETAILS,
    details
  };
}

export function setLoading(status) {
  return {
    type: SET_LOADING,
    status
  };
}
