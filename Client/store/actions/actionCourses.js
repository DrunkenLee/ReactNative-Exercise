import axios from "axios";
export const coursesUrl = " https://4256-103-195-58-37.ngrok-free.app/courses";
// Action Types
export const FETCH_COURSES_SUCCESS = "FETCH_COURSES_SUCCESS";
export const FETCH_COURSES_FAILURE = "FETCH_COURSES_FAILURE";

export const UPDATE_COURSES_SUCCESS = "UPDATE_COURSES_SUCCESS";
export const UPDATE_COURSES_FAILURE = "UPDATE_COURSES_FAILURE";

export const POST_COURSES_SUCCESS = "POST_COURSES_SUCCESS";
export const POST_COURSES_FAILURE = "POST_COURSES_FAILURE";

// Action Creators
export const fetchCoursesSuccess = (payload) => {
  return {
    type: FETCH_COURSES_SUCCESS,
    payload,
  };
};

export const fetchCoursesFailure = (error) => {
  return {
    type: FETCH_COURSES_SUCCESS,
    error,
  };
};

export const updateCoursesSuccess = (payload) => {
  return {
    type: UPDATE_COURSES_SUCCESS,
    payload,
  };
};

export const updateCoursesFailure = (error) => {
  return {
    type: UPDATE_COURSES_FAILURE,
    error,
  };
};

export const postCoursesSuccess = (payload) => {
  return {
    type: POST_COURSES_SUCCESS,
    payload,
  };
};

export const postCoursesFailure = (error) => {
  return {
    type: POST_COURSES_FAILURE,
    error,
  };
};

export const getCourses = () => {
  return async (dispatch) => {
    try {
      let { data } = await axios.get(coursesUrl);

      dispatch(fetchCoursesSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(fetchCoursesFailure(error.message));
    }
  };
};

export const updateCourses = (coursesData) => {
  return async (dispatch) => {
    try {
      const { id, ...updatedData } = coursesData;

      const response = await axios.put(`${coursesUrl}/${id}`, updatedData);

      dispatch(updateCoursesSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(updateCoursesFailure(error.message));
    }
  };
};

export const postCourses = (coursesData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${coursesUrl}`, coursesData);

      dispatch(postCoursesSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(postCoursesFailure(error.message));
    }
  };
};
