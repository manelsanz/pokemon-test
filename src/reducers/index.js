import { SET_LOADING, SET_LIST, SET_DETAILS } from "../actions/index";

const initialState = {
  isLoading: false,
  list: [],
  details: null
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.status
      };
    case SET_LIST:
      return {
        ...state,
        list: action.list
      };
    case SET_DETAILS:
      return {
        ...state,
        details: action.details
      };
    default:
      return state;
  }
};

export default appReducer;
