<template>
    <q-page class="flex flex-center q-pa-lg">
        <div v-if="!userAuth">
        <p>Вы не вошли в систему</p>
        <q-btn
            label="Вход"
            to="/login"
            />
    </div>
    <div v-if="userAuth">
        Играть в Супер Шутер
    </div>
    </q-page>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Play',
 
  
  computed: {
    userAuth() {
      const token = localStorage.getItem('token')
      return Boolean(token)
    }
},

 
  
})
</script>

