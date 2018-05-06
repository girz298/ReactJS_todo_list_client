// reducers hold the store's state (the initialState object defines it)
// reducers also handle plain object actions and modify their state (immutably) accordingly
// this is the only way to change the store's state
// the other exports in this file are selectors, which is business logic that digests parts of the store's state
// for easier consumption by views
import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  projectsFromApi: undefined
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.PROJECTS_FETCHED:
      return state.merge({
        projectsFromApi: action.projectsFromApi
      });
    default:
      return state;
  }
}

export function getProjects(state) {
  return state.projects.projectsFromApi;
}
