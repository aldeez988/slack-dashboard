import axios from "axios";
import swal from "sweetalert";

//This function is used to send the new registered data to the backend to complete the registration
export const addUser = body => {
  try {
    return axios.post("https://slack-dashboard-backend.glitch.me/signup", body);
  } catch (err) {
    swal("Oops!", "Something went wrong please check your network!", "error");
  }
};
