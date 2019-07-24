import axios from "axios";
import swal from "sweetalert";

export const acceptUser = async body => {
  try {
    return await axios.post(
      "https://slack-dashboard-backend.glitch.me/acceptUser",
      body
    );
  } catch (err) {
    swal("Oops!", "Something went wrong please check your network!", "error");
  }
};

export const rejectUser = async body => {
  try {
    return await axios.post(
      "https://slack-dashboard-backend.glitch.me/acceptUser",
      body
    );
  } catch (err) {
    swal("Oops!", "Something went wrong please check your network!", "error");
  }
};
