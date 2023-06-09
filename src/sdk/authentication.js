import axios from "axios";



export const authentication = async ({ email, password }) => {
  try {
    const response = await axios.post(
      `/api/auth/signin`,

      {
        email: email,
        password: password,
      }
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};