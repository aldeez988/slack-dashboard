import axios from "axios";
import swal from "sweetalert";

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
