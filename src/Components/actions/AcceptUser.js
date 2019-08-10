import axios from "axios";
import swal from "sweetalert";

//This function is used for the admin page to accept new users
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

//This function is used for the admin page to reject new users
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
