import axios from "axios";
import swal from "sweetalert";

//This function is used to make a get request to get all the students data
export const getAllStudents = options => {
  try {
    return axios.get(
      "https://slack-dashboard-backend.glitch.me/allClassStudents",
      { params: options }
    );
  } catch (err) {
    swal("Oops!", "Something went wrong please check your network!", "error");
  }
};
