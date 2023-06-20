import axios from "axios";

const useRefreshToken = () => {
  const refresh = async () => {
    const response = await axios.post("/api/auth/refresh-token", {
      refreshToken: localStorage.getItem("refreshToken"),
    });

    console.log("useRefreshToken");
    console.log(response);

    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
