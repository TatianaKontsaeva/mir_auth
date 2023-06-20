<template>
  <q-page class="q-pa-md flex-center justify-between">
    <div class="q-pa-md flex justify-between items-center">
    <div>
      <q-btn>
        <router-link to="/">На Главную</router-link>
      </q-btn>
    </div>
    <div class="q-pa-md">
      <q-btn
        label="Выход"
        color="grey"
        class="q-ml-sm btn_list"
        @click="logoutClick"
      />
    </div>
  </div>
    <p>welcome</p>
  </q-page>
</template>

<script>
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  setup() {
    const router = useRouter();

    const logoutClick = () => {
      localStorage.removeItem("token");
      console.log("token deleted");
      router.push("/");
    };

    return {
      logoutClick,
    };
  },

  async created() {
    const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`, // Добавление токена в заголовок Authorization
    };
    const options = {
      headers,
    };
    try {
      const response = await axios.get(`api/profile`, options);
      console.log(response);
    } catch {
      console.log("error");
    }
  },

//  async refreshToken(token) {
//     return axios('api/auth/refresh-token', {
//         method: 'POST',
//         credentials: 'include',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             token,
//         }),
//     })
//         .then((res) => {
//             if (res.status === 200) {
//                 const tokenData = res.json();
//                 saveToken(JSON.stringify(tokenData)); 
//                 return Promise.resolve();
//             }
//             return Promise.reject();
//         });
// }
};
</script>
