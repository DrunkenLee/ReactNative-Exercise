import axios from "axios";
export const studentUrl = " https://4256-103-195-58-37.ngrok-free.app/students";
// Action Types
export const FETCH_STUDENTS_SUCCESS = "FETCH_STUDENTS_SUCCESS";
export const FETCH_STUDENTS_FAILURE = "FETCH_STUDENTS_FAILURE";

export const UPDATE_STUDENT_SUCCESS = "UPDATE_STUDENT_SUCCESS";
export const UPDATE_STUDENT_FAILURE = "UPDATE_STUDENT_FAILURE";

export const POST_STUDENT_SUCCESS = "POST_STUDENT_SUCCESS";
export const POST_STUDENT_FAILURE = "POST_STUDENT_FAILURE";

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

export const updateStudentSuccess = (payload) => {
  return {
    type: UPDATE_STUDENT_SUCCESS,
    payload,
  };
};

export const updateStudentFailure = (error) => {
  return {
    type: UPDATE_STUDENT_FAILURE,
    error,
  };
};

export const postStudentSuccess = (payload) => {
  return {
    type: POST_STUDENT_SUCCESS,
    payload,
  };
};

export const postStudentFailure = (error) => {
  return {
    type: POST_STUDENT_FAILURE,
    error,
  };
};

export const getStudents = () => {
  return async (dispatch) => {
    try {
      let { data } = await axios.get(studentUrl);

      dispatch(fetchStudentsSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(fetchStudentsFailure(error.message));
    }
  };
};

export const updateStudent = (studentData) => {
  return async (dispatch) => {
    try {
      const { id, ...updatedData } = studentData;

      const response = await axios.put(`${studentUrl}/${id}`, updatedData);

      dispatch(updateStudentSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(updateStudentFailure(error.message));
    }
  };
};

export const postStudent = (studentData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${studentUrl}`, studentData);

      dispatch(postStudentSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(postStudentFailure(error.message));
    }
  };
};
