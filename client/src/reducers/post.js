import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT
} from "../actions/types"

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {}
}

export default function(state = initialState, action) {
  const { type, payload } = action;
  
  switch(type){
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false
      }
    case GET_POST:
      return {
        ...state,
        post: payload,
        loading: false
      }
    case ADD_POST:
      return {
        ...state,
        posts: [state.posts, payload],
        loading: false
      }

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== payload),
        loading: false
      }

    case UPDATE_LIKES:
      return {
        ...state,
        posts: state.posts.map(post => 
          // if the post we're iterating thru is the one that's just been liked/unliked, return that post with whatever # of likes it now has, otherwise just return the post as it is
          post._id === payload.postId ? {...post, likes: payload.likes} : post
        ),
        loading: false
      }

    case ADD_COMMENT:
      return {
        ...state,
        post: { ...state.post, comments: payload }, //returning the post and adding the comment
        loading: false
      }

    case REMOVE_COMMENT:
      return {
        ...state,
        post: { ...state.post,
          comments: state.post.comments.filter(comment => comment._id !== payload)
        },
        loading: false
      }

    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      }

    default:
      return state;
  }
}