import axios from "axios";
import swal from "sweetalert";

export const addClass = body => {
  try {
    return axios.post(
      "https://slack-dashboard-backend.glitch.me/addClass",
      body
    );
  } catch (err) {
    swal("Oops!", "Something went wrong please check your network!", "error");
  }
};

export const getAllClasses = options => {
  try {
    return axios.get(
      "https://slack-dashboard-backend.glitch.me/classes",
      options
    );
  } catch (err) {
    swal("Oops!", "Something went wrong please check your network!", "error");
  }
};
