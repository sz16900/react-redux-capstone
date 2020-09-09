import {
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE,
} from './jobTypes';

const initialState = {
  loading: false,
  jobs: [],
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_JOBS_SUCCESS:
      return {
        loading: false,
        jobs: action.payload,
        error: '',
      };
    case FETCH_JOBS_FAILURE:
      return {
        loading: false,
        jobs: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
