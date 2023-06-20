import axios from "axios";

export const registration = async ({ email, password, user_name }) => {
  try {
    const response = await axios.post(`/api/auth/signup`, {
      email: email,
      password: password,
      login: user_name,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
