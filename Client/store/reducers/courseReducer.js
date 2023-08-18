import {
  FETCH_COURSES_SUCCESS,
  POST_COURSES_SUCCESS,
  UPDATE_COURSES_SUCCESS,
} from "../actions/actionCourses";

const initialState = {
  data: [],
};

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSES_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };

    case UPDATE_COURSES_SUCCESS:
      return {
        ...state,
        data: state.data.map((course) =>
          course.id === action.payload.id ? action.payload : course
        ),
      };

    case POST_COURSES_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    default:
      return state;
  }
}
