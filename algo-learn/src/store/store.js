import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import assessmentsReducer from './reducers/assessmentsReducer';

// Configure the store with the assessmentsReducer
const store = configureStore({
  reducer: {
    assessments: assessmentsReducer,
  },
});

export default store;