<template>
    <q-page class="q-pa-md flex-center" style="width: 60%;margin: 0 auto;">
      <div>
        <h5>Регистрация</h5>
        <q-form @submit="Submit()">
          <q-input
            outlined
            v-model="form.user_name"
            label="ФИО"
            type="text"
            lazy-rules
            :rules="[required]"
          >
          </q-input>
          <q-input
            outlined
            v-model="form.password"
            label="Введите ваш пароль"
            type="text"
            lazy-rules
            :rules="[required, passwordValid]"
          >
          </q-input>
          <q-input
            outlined
            v-model="form.confirmPassword"
            label="Повторите ваш пароль"
            type="text"
            lazy-rules
            :rules="[required, equal(form.password, form.confirmPassword)]"
          >
          </q-input>
          <q-input
            outlined
            v-model="form.email"
            label="Введите вашу почту"
            type="email"
            lazy-rules
            :rules="[required]"
          >
          </q-input>
          <q-input
            outlined
            v-model="form.phone"
            label="Номер телефона"
            type="tel"
            mask="+7-###-### ## ##"
            lazy-rules
           
          >
          </q-input>
      
          <div class="q-mt-md">
            <q-btn label="Отправить" type="submit" color="primary" />
            
          </div>
          <p class="q-pt-md">
            Уже есть аккаунт? <router-link to="/Login">Войдите</router-link>
          </p>
        </q-form>
      </div>
    </q-page>
  </template>
  
  <script setup>
  import { ref } from "vue"
  import useValidators from "src/use/formValidation"
  import { registration } from "src/sdk/registration"
  import { useRouter } from "vue-router";
 
  const { required } = useValidators();
  const { equal } = useValidators();
  const { passwordValid } = useValidators();
  const router = useRouter()
  
  const form = ref({
    email: '',
    user_name: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })
  
  const Submit = () => {
    registration(form.value)
    router.push("/login")
  }
  
  </script>