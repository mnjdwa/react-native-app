import * as types from "../actions/types";
import { AstroidSearch } from "../../types/types";

const initialState = {
  astroid: {
    name: "",
    nasa_jpl_url: "",
    is_potentially_hazardous_asteroid: "",
  },
};

export default (state = initialState, action: AstroidSearch) => {
  switch (action.type) {
    case types.START_SEARCH_ASTROID:
      return {
        ...state,
        astroid: action.payload,
      };

    default:
      return state;
  }
};
