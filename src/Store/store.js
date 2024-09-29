import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Reducers/index'; 
// Using configureStore, it creates a store with counterReducer as the main reducer, 
//and then exports it for use in the app
// Configures the Redux store with the counter reducer
const store = configureStore({
  //reducer: counterReducer, 
  reducer: {
    counter: counterReducer, // Assign the counter reducer to a 'counter' key
  },
});

export default store;