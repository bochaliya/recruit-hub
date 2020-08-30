import { combineReducers } from '@reduxjs/toolkit';
import jobsReducer from './jobs';
import projectsReducer from './projects';
import usersReducer from './users';

export default combineReducers({
  jobs: jobsReducer,
  projects: projectsReducer,
  users: usersReducer,
});
