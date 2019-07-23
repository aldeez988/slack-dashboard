import axios from "axios";
import swal from "sweetalert";

export const getUserProfiles = async options => {
  try {
    return await axios.get(
      "https://slack-dashboard-backend.glitch.me/userProfiles",
      {
        params: options
      }
    );
  } catch (error) {
    swal("Oops!", "Something went wrong please check your network!", "error");
  }
};
