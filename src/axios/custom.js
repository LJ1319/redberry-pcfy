import axios from "axios";

const fetch = axios.create({
  baseURL: "https://pcfy.redberryinternship.ge/api",
  header: {
    Accept: "application.json"
  }
});

export default fetch;