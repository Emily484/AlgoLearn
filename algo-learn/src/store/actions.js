// This file contains the action creators for fetching assessments and updating user performance
import {
    FETCH_ASSESSMENTS_REQUEST,
    FETCH_ASSESSMENTS_SUCCESS,
    FETCH_ASSESSMENTS_FAILURE,
    UPDATE_USER_PERFORMANCE,
  } from './actionTypes';
  
  // Fetch assessments action creators
  export const fetchAssessmentsRequest = () => ({
    type: FETCH_ASSESSMENTS_REQUEST,
  });
  
  export const fetchAssessmentsSuccess = (assessments) => ({
    type: FETCH_ASSESSMENTS_SUCCESS,
    payload: assessments,
  });
  
  export const fetchAssessmentsFailure = (error) => ({
    type: FETCH_ASSESSMENTS_FAILURE,
    payload: error,
  });
  
  // Fetch assessments async action using redux-thunk
  export const fetchAssessments = () => {
    return (dispatch) => {
      dispatch(fetchAssessmentsRequest());
      // Replace this URL with your actual endpoint
      fetch('https://localhost:5099/api/assessments')
        .then((response) => response.json())
        .then((data) => dispatch(fetchAssessmentsSuccess(data)))
        .catch((error) => dispatch(fetchAssessmentsFailure(error.message)));
    };
  };
  
  // Update user performance action creator
  export const updateUserPerformance = (performanceData) => ({
    type: UPDATE_USER_PERFORMANCE,
    payload: performanceData,
  });