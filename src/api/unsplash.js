import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 3hbaWziGcABCfXHurv3hhXGYrNPLrKs5yP7h_tbWvtA",
  },
});
