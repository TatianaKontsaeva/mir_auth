<template>
    <q-page class="flex flex-center column q-gutter-md">
      <h3>Мир 1Т Вход</h3>
      <q-btn
        label="Курсы"
        color="grey"
        class="q-ml-sm btn_list"
        />
      <q-btn
        label="Редактор"
        color="grey"
        class="q-ml-sm btn_list"
        />
      <q-btn
        label="Играть"
        color="grey"
        class="q-ml-sm btn_list"
        />
      <q-btn
        label="Выход"
        color="grey"
        class="q-ml-sm btn_list"
        to="/Logout"
        />
    </q-page>
  </template>
<script>
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'ModulesPage',
  
  })
  </script>
  <style>
    .btn_list {
    width: 400px;
  }
  </style>