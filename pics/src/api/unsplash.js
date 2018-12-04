import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID bed8955b8de1f51e01273702771e4f27b6f867722cf9848355796b2df62fa394"
  }
});
