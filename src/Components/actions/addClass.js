import axios from "axios";

export const addClass = body => {
  try {
    return axios.post(
      "https://slack-dashboard-backend.glitch.me/addClass",
      body
    );
  } catch (err) {
    console.log(err);
  }
};

export const getAllClasses = options => {
  try {
    return axios.get(
      "https://slack-dashboard-backend.glitch.me/classes",
      options
    );
  } catch (err) {
    console.log(err);
  }
};
