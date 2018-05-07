const TODO_ENDPOINT = 'http://localhost:8080/api';

const AUTH = 'Bearer ' + 'eyJhbGciOiJSUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX0FQSV9VU0VSIl0sInVzZXJuYW1lIjoibWljaGFlbCIsImlhdCI6MTUyNTY3OTQyNCwiZXhwIjoxNTI2Mjg0MjI0fQ.iyQgWHF-Nig0kW-swWetzWefxEeSy-RAB-4MCzY8fw-0E-CwFpHPtjlvsqOlgEWi4TqMIrpDoY-VVwcwNHBO92UK6lg-JjLlbzeCw7MbtA_h10TIF_ek-UmD_WAdMzxSvye4Lqk4zQ0MA8fQjDItxdD7LGcrqaCkQa1yMva1RlXO3bPLVasAFYgNirCVMPJBFk5KsGPbSxx0IjKeyq-kneeCccNC572jbjCP-63eH-N2FbStkU35YfIr9ORyrQJ_rrsRx4LdzTHZVp7VieX3IxOA1TPlm2LVtyzUT3LVkGOr9VQwbPdeeCJjvxnUmhaaCRqPotf0CrtNOqdQIBIZWc8NdfxffhD1z8ADey29wT8YK5aO7ssLqzvBIx2iaO_3OF1jRVD6XTeMqCFMVpAoXFPqwAOV_w7LcZ_OqMh66739wmC41a3xYeq2YXn7Se_lPu-FiFse1QH2gRrG3TnoFrfYw6rqgmZtjI_qaoTUP2KHESGl9PZcgWgdJ9aQvNydwdFOs-TVdeS0pRUqnCYaezzw0yM4gGuMm5ba7024jSspMO-qa7ltzxB9RIngFOvgntd8xKrJU_gY9FQb-JuoFTUCmrZtuDdn3heNn5CKGkZZdIkUm2xSI5G_TQVn5dTsB_PeYy_x2DbiaS01r2AlXLF3mru4C4Ed1igFRRqBZL4'

class ProjectService {

  async getProjects() {
    const url = `${TODO_ENDPOINT}/projects.json`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: AUTH
      }
    });
    if (!response.ok) {
      throw new Error(`ProjectService getProjects failed, HTTP status ${response.status}`);
    }
    const projects = await response.json();
    if (!projects) {
      throw new Error(`ProjectService getProjects failed, projects not returned`);
    }

    return projects;
  }

  async removeProjectById(projectId) {
    const url = `${TODO_ENDPOINT}/projects/`+ projectId;
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        Authorization: AUTH
      }
    });

    if (!response.ok) {
      throw new Error(`ProjectService removeProjectById failed, HTTP status ${response.status}`);
    }
    var isDeleted = response.status === 204;
    if (isDeleted) {
      return true;
    }
    return false;
  }

  async createProject(projectName) {
    console.log('API:CREATE_PROJECT: ' + projectName);
    const url = `${TODO_ENDPOINT}/projects`;
    const response = await fetch(url, {
      method: 'POST',
      headers: new Headers({
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": AUTH
      }),
      body: JSON.stringify({
        "name": projectName
      })
    });

    if (!response.ok) {
      throw new Error(`ProjectService createProject failed, HTTP status ${response.status}`);
    }
    const project = await response.json();

    return project;
  }
}


export default new ProjectService();
