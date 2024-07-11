// Desc: Reducer for assessments
import {
    FETCH_ASSESSMENTS_REQUEST,
    FETCH_ASSESSMENTS_SUCCESS,
    FETCH_ASSESSMENTS_FAILURE,
    UPDATE_USER_PERFORMANCE,
  } from '../actionTypes';
  
  const initialState = {
    loading: false,
    assessments: [],
    error: '',
    userPerformance: {},
  };
  
  const assessmentsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ASSESSMENTS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_ASSESSMENTS_SUCCESS:
        return {
          ...state,
          loading: false,
          assessments: action.payload,
          error: '',
        };
      case FETCH_ASSESSMENTS_FAILURE:
        return {
          ...state,
          loading: false,
          assessments: [],
          error: action.payload,
        };
      case UPDATE_USER_PERFORMANCE:
        return {
          ...state,
          userPerformance: { ...state.userPerformance, ...action.payload },
        };
      default:
        return state;
    }
  };
  
  export default assessmentsReducer;