// import { createStore } from 'redux'
// import rootReducer from './reducer'

// const store = createStore(rootReducer)

// export default store

import { configureStore } from "@reduxjs/toolkit";
import goalsReducer from "./components/Goals/GoalsSlice";
import userReducer from "./components/User/UserSlice";

export default configureStore({
  reducer: {
    goals: goalsReducer,
    user: userReducer,
  },
});