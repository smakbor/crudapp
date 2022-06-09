import axios from "axios";

const baseURL = axios.create({
  baseURL: "https://6293baad7aa3e6af1a1022c3.mockapi.io/crud/api/",
});

export default baseURL;
