import React, { useReducer } from 'react';
import axios from 'axios';
import LinkContext from './LinkContext';
import linkReducer from './LinkReducer';
import {
  GET_LINKS_SORT_BY_CATEGORY,
  GET_LINKS,
  ADD_LINK,
  DELETE_LINK,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LINK,
  LINK_ERROR,
  CLEAR_LINKS,
  LINK_CLICKED,
  CHECK_URL,
  CLEAR_URL
} from '../types';

const LinkState = props => {
  const initialState = {
    linkgroups: null,
    links: null,
    current: null,
    error: null,
    url2link: null
  };
  const [state, dispatch] = useReducer(linkReducer, initialState);
  //get links sort by category
  const getLinksSortByCategory = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.get('/api/links/all', config);
      dispatch({ type: GET_LINKS_SORT_BY_CATEGORY, payload: res.data });
    } catch (err) {
      dispatch({ type: LINK_ERROR, payload: err.response.msg });
    }
  };
  //get links
  const getLinks = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.get('/api/links', config);
      dispatch({ type: GET_LINKS, payload: res.data });
    } catch (err) {
      dispatch({ type: LINK_ERROR, payload: err.response.msg });
    }
  };
  //link clicked
  const linkClicked = async link => {
    try {
      await axios.get(`/api/links/${link._id}`);
      dispatch({
        type: LINK_CLICKED,
        payload: link
      });
    } catch (err) {
      dispatch({
        type: LINK_ERROR,
        payload: err.response.msg
      });
    }
  };
  // //clear links
  const clearLinks = () => {
    dispatch({ type: CLEAR_LINKS });
  };
  //Add Link
  const addLink = async link => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.post('/api/links', link, config);
      dispatch({ type: ADD_LINK, payload: res.data });
    } catch (err) {
      console.log(err);
      dispatch({ type: LINK_ERROR, payload: err.response.msg });
    }
  };
  //Delete Link
  const deleteLink = async id => {
    try {
      await axios.delete(`/api/links/${id}`);
      dispatch({
        type: DELETE_LINK,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: LINK_ERROR,
        payload: err.response.msg
      });
    }
  };

  //set current link
  const setCurrent = link => {
    dispatch({ type: SET_CURRENT, payload: link });
  };

  //clear current link
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //update link
  const updateLink = async link => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.put(`/api/links/${link._id}`, link, config);
      dispatch({
        type: UPDATE_LINK,
        payload: res.data
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: LINK_ERROR,
        payload: err.response.msg
      });
    }
  };

  //url地址解析
  const checkUrl = async url => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.post(`/api/url`, { urlString: url }, config);

      dispatch({
        type: CHECK_URL,
        payload: res.data
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: LINK_ERROR,
        payload: err.response.msg
      });
    }
  };

  //url地址解析清空
  const clearUrl = async url => {
    dispatch({ type: CLEAR_URL });
  };

  return (
    <LinkContext.Provider
      value={{
        linkgroups: state.linkgroups,
        links: state.links,
        current: state.current,
        error: state.error,
        url2link: state.url2link,
        addLink,
        deleteLink,
        setCurrent,
        clearCurrent,
        updateLink,
        getLinksSortByCategory,
        getLinks,
        clearLinks,
        linkClicked,
        checkUrl,
        clearUrl
      }}
    >
      {props.children}
    </LinkContext.Provider>
  );
};

export default LinkState;
