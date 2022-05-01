import { createSlice } from '@reduxjs/toolkit';

const courseReducer = createSlice({
  name: 'course',
  initialState: { courses: [] },
  reducers: {
    FETCH_COURSES(state, action) {
      return { courses: action.payload };
    },
    FETCH_M_COURSES(state, action) {
      return { mCourses: action.payload };
    },
    ADD_COURSE(state, action) {
      let newCourses = [...state.courses, action.payload];
      return { courses: newCourses };
    },
    PATCH_COURSE(state, action) {
      let newCourses = [...state.courses, action.payload];
      return { courses: newCourses };
    },
    DELETE_COURSE(state, action) {
      let filteredCourses = state.courses.filter(
        (c) => c.id !== action.payload.id
      );
      return { courses: filteredCourses };
    },
  },
});

const baseUrl = 'http://localhost:9000/courses/';

export const addCourse = (course) => {
  return async (dispatch) => {
    let response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(course),
    });
    let data = await response.json();
    console.log('Response from server', data);
    dispatch(ADD_COURSE(course));
  };
};

export const updateCourse = (id, course) => {
  return async (dispatch) => {
    let response = await fetch(baseUrl + id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(course),
    });
    let data = await response.json();
    console.log('Response from server', data);
    dispatch(PATCH_COURSE(course));
  };
};

export const fetchCourses = () => {
  return async (dispatch) => {
    let response = await fetch(baseUrl);
    let data = await response.json();
    dispatch(FETCH_COURSES(data));
  };
};

export const fetchMCourses = (id) => {
  return async (dispatch) => {
    let response = await fetch(baseUrl + id);
    let data = await response.json();
    dispatch(FETCH_M_COURSES(data));
  };
};

export const deleteCourse = (id) => {
  // http communication
  console.log(`delete id`, id);
  return (dispatch) => {
    fetch(baseUrl + id, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch(DELETE_COURSE({ id }));
      })
      .catch((err) => console.log(err));
  };
  // return {type: DELETE_COURSE, payload: {id}}
};

// export actions and reducer
export const {
  FETCH_COURSES,
  FETCH_M_COURSES,
  ADD_COURSE,
  DELETE_COURSE,
  PATCH_COURSE,
} = courseReducer.actions;
export default courseReducer.reducer;
