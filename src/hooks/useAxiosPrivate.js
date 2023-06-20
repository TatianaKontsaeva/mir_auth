import { axiosPrivate } from "../api/axios";
import useRefreshToken from "./useRefreshToken";

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const accessToken = localStorage.getItem("token");
  console.log("Access Token: ", accessToken);

  const requestIntercept = axiosPrivate.interceptors.request.use(
    (config) => {
      if (!config.headers["Authorization"]) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }
      console.log("requestIntercept config: ", config);
      return config;
    },
    (error) => Promise.reject(error)
  );

  const responseIntercept = axiosPrivate.interceptors.response.use(
    (response) => response,
    async (error) => {
      const prevRequest = error?.config;
      if (error?.response?.status === 401 && !prevRequest?.sent) {
        prevRequest.sent = true;
        const newAccessToken = await refresh();
        prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        console.log("responseIntercept newAccessToken: ", newAccessToken);
        return axiosPrivate(prevRequest);
      }
      return Promise.reject(error);
    }
  );

  // axiosPrivate.interceptors.request.eject(requestIntercept);
  // axiosPrivate.interceptors.response.eject(responseIntercept);
  console.log("onmounted returned");
  return axiosPrivate;
};

export default useAxiosPrivate;
