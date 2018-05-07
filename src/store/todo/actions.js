import * as types from './actionTypes';
import projectService from '../../services/project';

export function fetchProjectsAction() {
  return async(dispatch, getState) => {
    try {
      const projectsFromApi = await projectService.getProjects();
      dispatch({ type: types.PROJECTS_FETCHED, projectsFromApi });
    } catch (error) {
      console.error(error);
    }
  };
};

export function removeProjectByIdAction(projectId) {
  return async(dispatch, getState) => {
    try {
      const isDeleted = await projectService.removeProjectById(projectId);
      if (isDeleted) {
        dispatch({ type: types.PROJECTS_REMOVED, projectId });
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export function createProjectAction(projectName) {
  return async(dispatch, getState) => {
    try {
      const project = await projectService.createProject(projectName);
      dispatch({ type: types.PROJECTS_CREATED, project });
    } catch (error) {
      console.error(error);
    }
  };
};
