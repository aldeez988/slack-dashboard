import axios from "axios";
import swal from "sweetalert";

//This function is used to get all the slack messages and calls for specific class students  for specific target
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
