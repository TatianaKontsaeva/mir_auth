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
      label="Вход"
      color="grey"
      class="q-ml-sm btn_list"
      to="/Login"
      />
    <q-btn
      label="Регистрация"
      color="grey"
      class="q-ml-sm btn_list"
      to="/Signup"
      />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
<style>
  .btn_list {
  width: 400px;
}
</style>