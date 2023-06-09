<template>
    <q-page class="q-pa-md flex flex-center">
      <div>
        <h5>Вход</h5>
        <q-form @submit="Submit()">
          <q-input
            rounded
            v-model="form.email"
            label="Введите вашу почту"
            type="email"
            lazy-rules
            :rules="[required]"
          >
          </q-input>
          <q-input
            rounded
            v-model="form.password"
            label="Введите ваш пароль"
            type="password"
            lazy-rules
            :rules="[required]"
          >
          </q-input>
          <!-- <p class="error" v-if="error">{{ error }}</p> -->
          <div class="q-mt-md">
            <q-btn label="Отправить" type="submit" color="primary" />
            <q-btn
              label="Сбросить"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
            />
          </div>
          <p class="q-pt-md">
            Не зарегистрированы?
            <router-link to="/Signup">Зарегистрируйтесь</router-link>
          </p>
        </q-form>
      </div>
    </q-page>
  </template>
  
  <script setup>
  import { ref } from "vue"
  import useValidators from "src/use/formValidation"
  import { authentication } from "src/sdk/authentication";
  
  const { required } = useValidators();
  
  const form = ref({
    email: '',
    password: ''
  })

  const Submit = () => {
    authentication(form.value)

  }

  </script>