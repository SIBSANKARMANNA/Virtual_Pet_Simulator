import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:5000/api/pets",
  baseURL: "https://virtual-pet-simulator.onrender.com/api/pets",
});

export const getPets = () => API.get("/");
export const getPet = (id) => API.get(`/${id}`);
export const createPet = (data) => API.post("/", data);
export const feedPet = (id) => API.patch(`/${id}/feed`);
export const playPet = (id) => API.patch(`/${id}/play`);
export const sleepPet = (id) => API.patch(`/${id}/sleep`);
export const deletePet = (id) => API.delete(`/${id}`);
