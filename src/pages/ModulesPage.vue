<template>
    <q-page class="flex flex-center column q-gutter-md">
      <h3>Мир 1Т Вход</h3>
      <q-btn
        label="Курсы"
        color="grey"
        class="q-ml-sm btn_list"
        to="/Courses"
        />
      <q-btn
        label="Редактор"
        color="grey"
        class="q-ml-sm btn_list"
        to="/Editor"
        />
      <q-btn
        label="Играть"
        color="grey"
        class="q-ml-sm btn_list"
        to="/Play"
        />
      <q-btn
        label="Выход"
        color="grey"
        class="q-ml-sm btn_list"
        @click="handleClick"
        />
    </q-page>
  </template>
<script setup>
 import { useRouter } from "vue-router";
  
 const router = useRouter();
 const handleClick = () => {
    localStorage.removeItem("token");
     console.log("token deleted");
      router.push("/");
    }

  </script>
  <style>
    .btn_list {
    width: 400px;
  }
  </style>