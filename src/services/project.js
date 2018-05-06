const TODO_ENDPOINT = 'http://localhost:8080/api';

const AUTH = 'Bearer ' + 'eyJhbGciOiJSUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX0FQSV9VU0VSIl0sInVzZXJuYW1lIjoibWljaGFlbCIsImlhdCI6MTUyNTYxNTQ0MywiZXhwIjoxNTI2MjIwMjQzfQ.a5G3K2LdCPiNVxFqZKfmlg3JY4mqxnDUFE3oK25eO9edAjh4yXuPL0TY-qprV_qM7sIgrXp-Ed8p7JCpUyICU0lO0Qpi0HbS9k0smAJspVGNFfB-gIK4QvBjeEAwuPltqGpSjKWs9aiB1jMYXKrUb8WycUQ96r_ihBuzvAJmtKlQb4rX1Uf9gJnUsC_0bxPZsgZ7EPeHGDu174CqC9tCsuqcQJdqvaFPmDV9gbE1saR14JiYCdP5yIOJIcyK191stXHqVeKrR4FcVpwgAek2Ho8zOC6DRHBu2GDlGyZ3Qygx2es3Xexiwfy-3t28GqqVQEgsgJJvHh3GqG3afViKQRwziH8WWQi4J3s6lM5t4GfVVrNdYsjhKhp53jCUd7YuRoa7GbH_S5ouh6WcUG3c5sMvj2Vvt-A717ohQ5PsvkZRTtXPbE3-AO5e0TbZTL064TiNrkHrj2IHAJMniC3dto5gyw_v8Px8luFdOP_sJk3QkgD-6o59fV1WMe7ddl8nzMPXtCi4xMV7L0IIcgLblAC9qrDW7iTGxhpyfXVdqPMGAl9cFIetlpIQWtuiTRrMmkEK149Rh55dNVUOqc0-oscwMwOG5oacouP8W_vgZkli88W4DVxKhwsAFI_g6mHzGbrkG8X6YcthAkZg7E0nY5_KcBvBbWUv7yJD8jQWdC4'

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
  }
}


export default new ProjectService();
