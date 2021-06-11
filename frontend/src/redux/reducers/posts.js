import { START_LOADING, END_LOADING } from "../constants/loadingTypes";
import {
  FETCH_ALL, CREATE, UPDATE, DELETE,LIKE,
  FETCH_BY_SEARCH,
  FETCH_POST,
} from "../constants/postTypes";

const initialState = {
  posts: [],
  isLoading: true
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case DELETE:
      return {...state, posts: state.posts.filter((post) => post._id !== action.payload)};
    case UPDATE:
    case LIKE:
      return {...state, posts: state.posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      )};
      case FETCH_ALL:
        return {
          ...state,
          posts: action.payload.data,
          currentPage: action.payload.currentPage,
          numberOfPages: action.payload.numberOfPages,
          isLoading: false
        };
    case FETCH_BY_SEARCH:
      return {...state, posts: action.payload,  isLoading: false};
      case FETCH_POST:
        return { ...state,  post: action.payload.post};
    case CREATE:
      return { ...state, posts: [...state.posts, action.payload] };
    default:
      return state;
  }
};

export default postsReducer;
