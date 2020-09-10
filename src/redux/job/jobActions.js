import axios from 'axios';
import {
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE,
} from './jobTypes';

// Instead of returning an action, we return a function
// It doesnt have to be pure, async api calls

export const fetchJobs = () => {
  // receive dispatch as an argument
  return (dispatch) => {
    dispatch(fetchJobsRequest());
    axios
      .get('https://api.punkapi.com/v2/beers?per_page=80')
      .then((response) => {
        // response.data is the JOBS
        const jobs = response.data;
        console.log(response.data.length);
        dispatch(fetchJobsSuccess(jobs));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchJobsFailure(error.message));
      });
  };
};

export const fetchJobsRequest = () => {
  return {
    type: FETCH_JOBS_REQUEST,
  };
};

export const fetchJobsSuccess = (jobs) => {
  return {
    type: FETCH_JOBS_SUCCESS,
    payload: jobs,
  };
};

export const fetchJobsFailure = (error) => {
  return {
    type: FETCH_JOBS_FAILURE,
    payload: error,
  };
};
