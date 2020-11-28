import axios from "axios";
import actionTypes from "./actionTypes/actionTypes";
import UNIQUE from "uniquechars";

export const getAllPosts = () => {
  return async function (dispatch) {
    dispatch(loader());
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        dispatch(postFetched(response.data));
      })
      .catch((err) => {
        dispatch(errorHandler(err.message));
      });
  };
};

const postFetched = (posts) => {
  let allPosts = posts.slice(0, 50);
  allPosts = allPosts.map((post) => {
    post.comments = ["Loren ipsum", "Loren ispum"];
    post.likes = 20;
    post.loves=12;
    post.comments = ["Lorem Ipsum", "Lorem Ipsum"];
    post.first_name = `User ${UNIQUE.UNIQUE_STRING()}`;
    post.post =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
    post.postMeta="Lorem ipsum";
    return post;
  });
  return async function (dispatch) {
    dispatch({ type: actionTypes.POSTS, payload: allPosts });
  };
};

const loader = () => {
  return async function (dispatch) {
    dispatch({ type: actionTypes.LOADING });
  };
};

const errorHandler = (err) => {
  return async function (dispatch) {
    dispatch({ type: actionTypes.ERROR, payload: err });
  };
};

export const morePosts = () => {
  return async function (dispatch) {
    dispatch({ type: actionTypes.MORE });
  };
};

export const lessPosts = () => {
  return async function (dispatch) {
    dispatch({ type: actionTypes.LESS });
  };
};

export const showFullPost = (post) => {
  return async function (dispatch) {
    dispatch({ type: actionTypes.SHOW_POST, payload: post?post:null });
  };
};


export const onLike=()=>{
  return async function (dispatch){
    dispatch({type:actionTypes.ON_LIKE});
  }
}

export const onLove=()=>{
  return async function(dispatch){
    dispatch({type:actionTypes.ON_LOVE});
  }
}


export const newComment=(comment)=>{
  return async function(dispatch){
    dispatch({type:actionTypes.NEW_COMMENT,payload:comment});
  }
}

export const handleNewPost=(post)=>{
  return async function(dispatch){
    dispatch({type:actionTypes.NEW_POST,payload:post})
  }
}

export const chatMessenger=()=>{
  return async function(dispatch){
    dispatch({type:actionTypes.CHAT_MESSENGER});
  }
}