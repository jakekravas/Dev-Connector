import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES
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

    case UPDATE_LIKES:
      console.log(payload);
      return {
        ...state,
        posts: state.posts.map(post => 
          // if the post we're iterating thru is the one that's just been liked/unliked, return that post with whatever # of likes it now has, otherwise just return the post as it is
          post._id === payload.postId ? {...post, likes: payload.likes} : post
        ),
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