import {
  GET_CATEGORIES,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CATEGORY,
  CATEGORY_ERROR
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        loading: false
      };
    case ADD_CATEGORY:
      return {
        ...state,
        loading: false,
        categories: [...state.categories, action.payload]
      };
    case CATEGORY_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
