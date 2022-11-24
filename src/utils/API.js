import axios from "axios";

const API = {
  // Gets all projects
  getProjects: function () {
    return fetch("/api/projects", {
      headers: {
        token: localStorage.getItem("token"),
      },
    }).then((res) => res.json());
  },
  // Gets the project with the given id
  getProject: function (id, abortController) {
    let signal = null;
    if (abortController) signal = abortController.signal;

    return axios.get("/api/projects/" + id, {
      signal,
      headers: {
        token: localStorage.getItem("token"),
      },
    });
  },
  getProjectUsers: function (projectId, abortController) {
    let signal = null;
    if (abortController) signal = abortController.signal;

    return fetch(`/api/userProjects/${projectId}`, {
      signal,
      headers: {
        token: localStorage.getItem("token"),
      },
    }).then((res) => res.json());
  },
  getProjectTickets: function (projectId, abortController) {
    let signal = null;
    if (abortController) signal = abortController.signal;

    return fetch("/api/tickets/" + projectId, { signal }).then((res) =>
      res.json()
    );
  },
  createProject: function (projectData) {
    return fetch("/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify(projectData),
    }).then((res) => res.json());
  },
  updateProject: function (projectId, projectData) {
    return fetch(`/api/projects/${projectId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify(projectData),
    });
  },
  saveUser: function (userData) {
    return axios.post("/api/users", userData);
  },
  removeUser: function (userId) {
    return fetch(`/api/users/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    });
  },
  addContact: function (id, data) {
    return axios.put("/api/users/" + id, data);
  },
  getTicket: function (projectId, ticketId, abortController) {
    let signal = null;
    if (abortController) signal = abortController.signal;

    return fetch(`/api/tickets/${projectId}/${ticketId}`, { signal }).then(
      (res) => res.json()
    );
  },
  getTicketComments: function (ticketId, abortController) {
    let signal = null;
    if (abortController) signal = abortController.signal;

    return fetch(`/api/comments/${ticketId}`, {
      signal,
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    }).then((res) => res.json());
  },
  getDevAssignments: function (ticketId, abortController) {
    let signal = null;
    if (abortController) signal = abortController.signal;

    return fetch(`/api/devassignments/${ticketId}`, { signal }).then((res) =>
      res.json()
    );
  },
  createTicket: function (projectId, payload) {
    return fetch(`/api/tickets/${projectId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify(payload),
    }).then((res) => res.json());
  },
  updateTicket: function (projectId, ticketId, payload) {
    return fetch(`/api/tickets/${projectId}/${ticketId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify(payload),
    }).then((res) => res.json());
  },
  deleteTicket: function (projectId, ticketId) {
    return fetch(`/api/tickets/${projectId}/${ticketId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    });
  },
  createDevAssignment: function (ticketId, devId) {
    return fetch(`/api/devassignments/${ticketId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify(devId),
    }).then((res) => res.json());
  },
  removeAllDevAssignments: function (ticketId) {
    return fetch(`/api/devassignments/${ticketId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    });
  },
  login: async function (userInfo) {
    return await fetch("/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo)
    });
  },
  getAvailableUsers: function (projectId, abortController) {
    let signal = null;
    if (abortController) signal = abortController.signal;

    return fetch("/api/availableUsers/" + projectId, { signal }).then((res) =>
      res.json()
    );
  },
  addTeamMember: function (projectId, userId) {
    return fetch("/api/userprojects/" + projectId, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify(userId),
    });
  },
  removeTeamMember: function (projectId, userId) {
    return fetch(`/api/userprojects/${projectId}/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    });
  },
  removeAllTeamMembers: function (projectId) {
    return fetch(`/api/userprojects/${projectId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    });
  },
  getUsers: function (abortController) {
    let signal = null;
    if (abortController) signal = abortController.signal;

    return fetch("/api/users", { signal }).then((res) => res.json());
  },
  lookupUserByEmail: function (email) {
    return fetch(`/api/auth/user/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    }).then((res) => res.json());
  },
  deleteProject: function (projectId) {
    return fetch(`/api/projects/${projectId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    });
  },
  addUser: function (userData) {
    console.log(userData)
    return fetch(`/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
  },
  getUserTickets: function (abortController) {
    let signal = null;
    if (abortController) signal = abortController.signal;

    return fetch("/api/tickets", {
      signal,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    });
  },
  createComment: function (ticketId, comment) {
    return fetch(`/api/comments/${ticketId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify(comment),
    });
  },
  deleteComment: function (ticketId, commentId) {
    return fetch(`/api/comments/${ticketId}/${commentId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    });
  },
  updateUser: function (userId, payload) {
    return fetch(`/api/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify(payload),
    }).then((res) => res.json());
  },
};

export default API;
