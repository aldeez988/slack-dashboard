import axios from "axios";
import swal from "sweetalert";

export const getStudentMessages = async options => {
  try {
    return await axios.get(
      "https://slack-dashboard-backend.glitch.me/student/messages",
      {
        params: options
      }
    );
  } catch (error) {
    swal("Oops!", "Something went wrong please check your network!", "error");
  }
};

export const allCallsAndMessages = async options => {
  try {
    return await axios.get(
      "https://slack-dashboard-backend.glitch.me/allCallsAndMessages",
      {
        params: options
      }
    );
  } catch (error) {
    swal("Oops!", "Something went wrong please check your network!", "error");
  }
};
