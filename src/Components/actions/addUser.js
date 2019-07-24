import axios from "axios";
import swal from "sweetalert";

export const addUser = body => {
  try {
    return axios.post("https://slack-dashboard-backend.glitch.me/signup", body);
  } catch (err) {
    swal("Oops!", "Something went wrong please check your network!", "error");
  }
};
