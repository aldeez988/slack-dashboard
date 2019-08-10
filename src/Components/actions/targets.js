import axios from "axios";
import swal from "sweetalert";

//This function is used to set new target for a specific class in a specific period of time
export const addTarget = async body => {
  try {
    return await axios.post(
      "https://slack-dashboard-backend.glitch.me/targets",
      body
    );
  } catch (error) {
    swal("Oops!", "Something went wrong please check your network!", "error");
  }
};

export const getTargets = async options => {
  try {
    return await axios.get(
      "https://slack-dashboard-backend.glitch.me/targets",
      {
        params: options
      }
    );
  } catch (error) {
    swal("Oops!", "Something went wrong please check your network!", "error");
  }
};

//This function is used to get all the target for a specific class
export const getTargetsForClass = async options => {
  try {
    return await axios.get(
      "https://slack-dashboard-backend.glitch.me/targetsForClass",
      {
        params: options
      }
    );
  } catch (error) {
    swal("Oops!", "Something went wrong please check your network!", "error");
  }
};
