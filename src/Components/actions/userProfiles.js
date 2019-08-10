import axios from "axios";
import swal from "sweetalert";

//This function is used to get all registered who waiting for the admin to accept/reject the joining application for cyf slack dashboard
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

export const getStudentsNumber = async options => {
  try {
    return await axios.get(
      "https://slack-dashboard-backend.glitch.me/numberOfStudents",
      {
        params: options
      }
    );
  } catch (error) {
    swal("Oops!", "Something went wrong please check your network!", "error");
  }
};
