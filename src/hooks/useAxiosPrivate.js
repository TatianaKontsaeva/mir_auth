import { axiosPrivate } from "../api/axios";
import useRefreshToken from "./useRefreshToken";
import { onMounted } from "vue";



const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const accessToken = localStorage.getItem("token");

  onMounted(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        console.log(config);
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          console.log(response)
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );
  });
  console.log('onmounted returned');
  return axiosPrivate;
};

export default useAxiosPrivate;
