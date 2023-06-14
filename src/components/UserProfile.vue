<template>
    <q-page class="q-pa-md flex-center">
      <q-btn
        label="Выход"
        color="grey"
        class="q-ml-sm btn_list"
        @click="logoutClick"
      
        />
     <p>welcome</p>
    </q-page>
  </template>

<script setup>
 import { useRouter } from "vue-router";

  
const router = useRouter();

 const logoutClick = () => {
    localStorage.removeItem("token");
     console.log("token deleted");
      router.push("/");
    }

</script>

