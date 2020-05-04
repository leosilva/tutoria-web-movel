import axios from "axios";

const api = axios.create({
  baseURL: "https://s0wph.sse.codesandbox.io"
});

export default api;
