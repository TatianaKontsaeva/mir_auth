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
import useAxiosPrivate from "src/hooks/useAxiosPrivate";
export default {
  setup() {
    const router = useRouter();

    const logoutClick = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      console.log("token deleted");
      router.push("/");
    };

    return {
      logoutClick,
    };
  },

  async created() {
    const axiosPrivate = useAxiosPrivate();
    try {
      const response = await axiosPrivate.get("/api/profile");
      console.log("RESPONSE: ", response);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
