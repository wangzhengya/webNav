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

export default (state, action) => {
  switch (action.type) {
    case GET_LINKS_SORT_BY_CATEGORY:
      return {
        ...state,
        linkgroups: action.payload,
        loading: false
      };
    case GET_LINKS:
      return {
        ...state,
        links: action.payload,
        loading: false
      };
    case ADD_LINK:
      return {
        ...state,
        loading: false,
        links: [...state.links, action.payload]
      };
    case CLEAR_LINKS:
      return {
        ...state,
        links: null,
        error: null,
        current: null,
        linkgroups: null
      };
    case DELETE_LINK:
      return {
        ...state,
        loading: false,
        links: state.links.filter(link => link._id !== action.payload)
      };
    case LINK_CLICKED:
      return {
        ...state,
        loading: false,
        linkgroups: state.linkgroups.map(linkgroup => {
          if (linkgroup.category.name === action.payload.category) {
            linkgroup.links.map(link => {
              if (link._id === action.payload.id) {
                link.views = link.views + 1;
              }
              return link;
            });
          }
          return linkgroup;
        })
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case UPDATE_LINK:
      return {
        ...state,
        loading: false,
        links: state.links.map(link =>
          link._id === action.payload._id ? action.payload : link
        )
      };
    case CHECK_URL:
      return {
        ...state,
        loading: false,
        url2link: action.payload
      };
    case CLEAR_URL:
      return {
        ...state,
        url2link: null
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case LINK_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
