import axios from "axios";
import swal from "sweetalert";

export const getUserMessageNumber = async data => {
  try {
    return axios.get(
      "https://slack-dashboard-backend.glitch.me//student/messages",
      {
        params: data
      }
    );
  } catch (error) {
    swal("Oops!", "Something went wrong please check your network!", "error");
  }
};
