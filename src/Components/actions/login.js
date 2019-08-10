import axios from "axios";
import swal from "sweetalert";

//This function is used for the login component to confirm the user and send the confirmed user data in a token to stored in the local storage
export const login = async loginData => {
  try {
    return axios.get("https://slack-dashboard-backend.glitch.me/login", {
      params: loginData
    });
  } catch (error) {
    swal("Oops!", "Something went wrong please check your network!", "error");
  }
};
