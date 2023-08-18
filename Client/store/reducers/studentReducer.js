import {
  FETCH_STUDENTS_SUCCESS,
  POST_STUDENT_SUCCESS,
  UPDATE_STUDENT_SUCCESS,
} from "../actions/actionStudents";

const initialState = {
  data: [],
};

export default function studentReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_STUDENTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };

    case UPDATE_STUDENT_SUCCESS:
      return {
        ...state,
        data: state.data.map((student) =>
          student.id === action.payload.id ? action.payload : student
        ),
      };

    case POST_STUDENT_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    default:
      return state;
  }
}
