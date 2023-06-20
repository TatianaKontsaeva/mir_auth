import axios from "axios";

const useRefreshToken = () => {
  const refresh = async () => {
    const response = await axios.get("/api/auth/refresh-token", {
      withCredentials: true,
    });

    console.log(JSON.stringify(response));
    console.log(response.data.accessToken);

    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
