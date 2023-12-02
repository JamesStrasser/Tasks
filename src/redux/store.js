// store.js
import { configureStore } from '@reduxjs/toolkit'
import prioritiesReducer from './reducers';

const store = configureStore(
    {reducer: prioritiesReducer}
);

export default store;