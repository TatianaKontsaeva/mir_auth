<template>
  <q-page class="flex flex-center q-pa-md">
    <h3>О Мир 1Т</h3>
    <q-btn @click="send">Send</q-btn>
    <p class="q-pa-md">
      Метавселенная 1Т представляет собой виртуальную среду для игры и
      разработки с разнообразными мирами, играми, внутренней экономикой,
      социальным элементом и наполнением. Социальность играет важную роль в
      концепции Метавселенной и заключается в совместных направленных и
      регулярной деятельности пользователей для поддержания жизнеспособности
      игрового мира. Создание космических колоний, городов, добыча и обмен
      ресурсами и торговля.
    </p>
    <p class="q-pa-md">
      Часть из этих игровых элементов будет иметь коммерческую составляющую.
      Можно владеть территорией и продавать её в полное пользование, планируется
      создание игровой валюты Метавселенной. Предполагается использование
      Искусственного интеллекта, который будет применяться для генерации
      изображений, текста и перевода. При помощи ИИ также можно генерировать
      предметы, текстуры, объекты, эффекты, персонажи и локации. На следующих
      этапах предполагается обучение нейросети на всех созданных моделях,
      персонажах, предметах, объектах, локациях и правил для генерации
      Метавселенной. На ранних этапах ИИ используется для генерации картинок и
      концептов для создания игр.
    </p>
  </q-page>
</template>
<script>
import useAxiosPrivate from "src/hooks/useAxiosPrivate";
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
   async send() {
      const axiosPrivate = useAxiosPrivate();
      try {
      const response = await axiosPrivate.get('api/profile')
      } catch (error) {
        console.log(error);
      }
    },
  },
});
</script>
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QzQHRlc3QuY29tIiwic3ViIjoiOTE0YTg1ODItODVmMC00MzA1LWI4YjUtNjQ5NzY1MDFiMDRhIiwiaWF0IjoxNjg3MjU1MjE5LCJleHAiOjE2ODcyNTYxMTl9._8HZ6_RE3uTxzhZOM7WXg5HmpG_JwilW6aJ9WTZeJng