<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated style="display: flex; justify-content: space-around;">
      <!-- <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar> -->
      <q-btn
      label="1T"
      to="#"
      
      />
      <q-btn
      label="О Мир 1Т"
      to="/"
      />
      <q-btn
      label="Курсы"
      to="/Courses"
      />
      <q-btn
      label="Редактор"
      to="/Editor"
      />
      <q-btn
      label="Игры"
      to="/Play"
      />

      <q-btn
      label="Регистрация"
      to="/Signup"
      />

      <q-btn
      label="Вход"
      to="/enter"
      />
        
      <router-link to="/Profile">
        <q-btn v-if="user">
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" size="xl">
          </q-avatar>
        </q-btn>
      </router-link>
    </q-header>
    
    <q-drawer
      v-model="leftDrawerOpen"
  
      bordered
    >
     
    </q-drawer>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <keep-alive :key="$route.fullPath">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'




export default defineComponent({
  name: 'MainLayout',

  components: {

  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
