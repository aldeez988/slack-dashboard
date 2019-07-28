import axios from "axios";
import swal from "sweetalert";
export const getStudentsCommunication = options => {
  try {
    return axios.get(
      "https://slack-dashboard-backend.glitch.me/sutdentsCommunication",
      { params: options }
    );
  } catch (err) {
    swal("Oops!", "Something went wrong please check your network!", "error");
  }
};
