import axios from "axios";

export const acceptUser = async body => {
  try {
    return await axios.post(
      "https://slack-dashboard-backend.glitch.me/acceptUser",
      body
    );
  } catch (err) {
    console.log(err);
  }
};

export const rejectUser = async body => {
  try {
    return await axios.post(
      "https://slack-dashboard-backend.glitch.me/acceptUser",
      body
    );
  } catch (err) {
    console.log(err);
  }
};
