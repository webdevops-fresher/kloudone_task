import actionTypes from "./actionTypes/actionTypes";

const initialState = {
  allPosts: [],
  posts: [],
  loading: true,
  error: "",
  moreOrLess: false,
  showFullPost: false,
  showPost: {},
  messenger:false
};

const rootReducer = (state = initialState, action) => {
  const tmp = [...state.allPosts];
  switch (action.type) {
    case actionTypes.POSTS:
      return {
        ...state,
        allPosts: action.payload,
        posts: action.payload.splice(0, 5),
        loading: false,
      };
    case actionTypes.LOADING:
      return { ...state, loading: true };
    case actionTypes.ERROR:
      return { ...state, error: action.payload, loading: false };
    case actionTypes.MORE:
      return { ...state, moreOrLess: true, posts: state.allPosts };
    case actionTypes.LESS:
      return { ...state, moreOrLess: false, posts: tmp.slice(0, 5) };
    case actionTypes.SHOW_POST:
      if (action.payload)
        return { ...state, showFullPost: true, showPost: action.payload };
      return { ...state, showFullPost: false };
    case actionTypes.ON_LIKE:
      const post = Object.assign({}, state.showPost);
      post.likes = post.likes + 1;
      return { ...state, showPost: post };
    case actionTypes.ON_LOVE:
      const newPost = Object.assign({}, state.showPost);
      newPost.loves = newPost.loves + 1;
      return { ...state, showPost: newPost };
    case actionTypes.NEW_COMMENT:
      const newPostComment = Object.assign({}, state.showPost);
      newPostComment.comments.push(action.payload);
      return { ...state, showPost: newPostComment };
    case actionTypes.NEW_POST:
      const newFeed = {
        albumId: 1,
        comments: [],
        first_name: "User BJ@X30Y})MAQ{%)(",
        id: state.allPosts.length + 1,
        likes: 0,
        loves: 0,
        post: action.payload,
        postMeta: "Lorem Ipsum",
        thumbnailUrl: "https://via.placeholder.com/150/771796",
        url: "https://via.placeholder.com/600/771796",
      };
      return {...state,allPosts:[...state.allPosts,newFeed],posts:[...state.posts,newFeed]}
    case actionTypes.CHAT_MESSENGER:
      return {...state,messenger:!state.messenger}
    default:
      return { ...state };
  }
};

export default rootReducer;
