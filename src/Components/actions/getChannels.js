import axios from "axios";
import swal from "sweetalert";

export const getPublicChannels = async options => {
  try {
    return await axios.get(
      "https://slack-dashboard-backend.glitch.me/allPublicChannels",
      {
        params: options
      }
    );
  } catch (error) {
    swal("Oops!", "Something went wrong please check your network!", "error");
  }
};
