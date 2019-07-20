import axios from "axios";
import swal from "sweetalert";

export const login = async loginData => {
  try {
    return axios.get("https://slack-dashboard-backend.glitch.me/login", {
      params: loginData
    });
  } catch (error) {
    swal("Oops!", "Something went wrong please check your network!", "error");
  }
};
