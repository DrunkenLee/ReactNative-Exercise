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
      const updatedIndex = state.data.findIndex(
        (student) => student.id === action.payload.id
      );
      if (updatedIndex !== -1) {
        const updatedData = [...state.data];
        updatedData[updatedIndex] = action.payload;
        return {
          ...state,
          data: updatedData,
        };
      }
      return state;

    case POST_STUDENT_SUCCESS:
      const newIndex = state.data.findIndex(
        (student) => student.id === action.payload.id
      );
      if (updatedIndex !== -1) {
        const updatedData = [...state.data];
        updatedData[updatedIndex] = action.payload;
        return {
          ...state,
          data: updatedData,
        };
      }
      return state;

    default:
      return state;
  }
}
