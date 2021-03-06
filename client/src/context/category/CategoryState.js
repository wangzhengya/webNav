import React, { useReducer } from 'react';
import axios from 'axios';
import CategoryContext from './CategoryContext';
import categoryReducer from './CategoryReducer';
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

const CategoryState = props => {
  const initialState = {
    categories: null,
    current: null,
    error: null
  };
  const [state, dispatch] = useReducer(categoryReducer, initialState);
  //get categories
  const getCategories = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.get('/api/categories', config);
      dispatch({ type: GET_CATEGORIES, payload: res.data });
    } catch (err) {
      dispatch({ type: CATEGORY_ERROR, payload: err.response.msg });
    }
  };
  // //clear categories
  const clearCategories = () => {
    dispatch({ type: CLEAR_CATEGORIES });
  };
  //Add Category
  const addCategory = async category => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.post('/api/categories', category, config);
      dispatch({ type: ADD_CATEGORY, payload: res.data });
    } catch (err) {
      dispatch({ type: CATEGORY_ERROR, payload: err.response.msg });
    }
  };
  //Delete Category
  const deleteCategory = async id => {
    try {
      await axios.delete(`/api/categories/${id}`);
      dispatch({
        type: DELETE_CATEGORY,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: CATEGORY_ERROR,
        payload: err.response.msg
      });
    }
  };
  //set current category
  const setCurrent = category => {
    dispatch({ type: SET_CURRENT, payload: category });
  };
  //clear current category
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  //update category
  const updateCategory = async category => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.put(
        `/api/categories/${category._id}`,
        category,
        config
      );
      dispatch({
        type: UPDATE_CATEGORY,
        payload: res.data
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: CATEGORY_ERROR,
        payload: err.response.msg
      });
    }
  };
  return (
    <CategoryContext.Provider
      value={{
        categories: state.categories,
        current: state.current,
        error: state.error,
        addCategory,
        deleteCategory,
        setCurrent,
        clearCurrent,
        updateCategory,

        getCategories,
        clearCategories
      }}
    >
      {props.children}
    </CategoryContext.Provider>
  );
};

export default CategoryState;
