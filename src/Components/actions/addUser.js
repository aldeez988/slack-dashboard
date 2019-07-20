import axios from "axios";

export const addUser = body => {
  try {
    return axios.post("https://slack-dashboard-backend.glitch.me/signup", body);
  } catch (err) {}
};
