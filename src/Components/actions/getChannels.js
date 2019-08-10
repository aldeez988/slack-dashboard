import axios from "axios";
import swal from "sweetalert";

//This function is used to get all cyf slack workspace  public channels to display in the Set Target component
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
