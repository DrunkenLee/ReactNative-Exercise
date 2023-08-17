import { FETCH_STUDENTS_SUCCESS } from "../actions/actionStudents";

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

    default:
      return state;
  }
}
