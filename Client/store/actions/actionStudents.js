import axios from "axios";

// Action Types
export const FETCH_STUDENTS_SUCCESS = "FETCH_STUDENTS_SUCCESS";
export const FETCH_STUDENTS_FAILURE = "FETCH_STUDENTS_FAILURE";

// Action Creators
export const fetchStudentsSuccess = (payload) => {
  return {
    type: FETCH_STUDENTS_SUCCESS,
    payload,
  };
};

export const fetchStudentsFailure = (error) => {
  return {
    type: FETCH_STUDENTS_FAILURE,
    error,
  };
};

export const getStudents = () => {
  return async (dispatch) => {
    try {
      let { data } = await axios.get(
        "https://e36f-103-195-58-37.ngrok-free.app/Students"
      );

      dispatch(fetchStudentsSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(fetchStudentsFailure(error.message)); // Dispatch an error action
    }
  };
};
