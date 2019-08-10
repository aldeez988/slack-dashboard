import axios from "axios";
import swal from "sweetalert";

//This function is called in the admin page  to enable admins to add classes for cyf
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

//This function is called to get all the classes we have
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
