import { createSlice } from '@reduxjs/toolkit';

const postReducer = createSlice({
  name: 'posts',
  initialState: { posts: [] },
  reducers: {
    FETCH_POSTS(state, action) {
      return { posts: action.payload };
    },
    FETCH_POST(state, action) {
      return { post: action.payload };
    },
    ADD_POST(state, action) {
      const newPosts = [...state.posts, action.payload];
      return { posts: newPosts };
    },
    PATCH_POST(state, action) {
      const newPost = action.payload;
      return { post: newPost };
    },
    DELETE_POST(state, action) {
      const filteredPosts = state.posts.filter(
        (p) => p.id !== action.payload.id
      );
      return { posts: filteredPosts };
    },
  },
});

const baseUrl = 'http://localhost:9000/mentors/';

export const addPost = (post) => {
  return async (dispatch) => {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });
    const data = await response.json();
    console.log('Response from server', data);
    dispatch(ADD_POST(post));
  };
};

export const updatePost = (id, post) => {
  return async (dispatch) => {
    const response = await fetch(baseUrl + id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });
    const data = await response.json();
    console.log('Response from server', data);
    dispatch(PATCH_POST(post));
  };
};

export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await fetch(baseUrl);
    const data = await response.json();
    dispatch(FETCH_POSTS(data));
  };
};

export const fetchPost = (id) => {
  return async (dispatch) => {
    const response = await fetch(baseUrl + id);
    const data = await response.json();
    dispatch(FETCH_POST(data));
  };
};

export const deletePost = (id) => {
  return (dispatch) => {
    fetch(baseUrl + id, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        dispatch(DELETE_POST({ id }));
      })
      .catch((err) => console.log(err));
  };
};

export const { FETCH_POSTS, FETCH_POST, ADD_POST, DELETE_POST, PATCH_POST } =
  postReducer.actions;
export default postReducer.reducer;
