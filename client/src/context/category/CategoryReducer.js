import {
  GET_CATEGORIES,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CATEGORY,
  CATEGORY_ERROR,
  CLEAR_CATEGORIES
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
    case CLEAR_CATEGORIES:
      return {
        ...state,
        categories: null,
        error: null,
        current: null
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        loading: false,
        categories: state.categories.filter(
          category => category._id !== action.payload
        )
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case UPDATE_CATEGORY:
      return {
        ...state,
        loading: false,
        categories: state.categories.map(category =>
          category._id === action.payload._id ? action.payload : category
        )
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
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
