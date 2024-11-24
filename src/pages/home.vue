<template>
  <f7-page>
    <appHeader>
      <template #nav-left-block>
        <f7-link icon-md="material:circles_ext" color="blue"></f7-link>
      </template>
      <template #subtitle-with-icon>
        <f7-icon size="14px" material="home"/>
        Главная страница
      </template>
    </appHeader>
    <div class="grid grid-container grid-gap">
      
      <LeftScreen></LeftScreen>

      <f7-block inset strong>
        <RightScreen></RightScreen>
      </f7-block>

    </div>
  </f7-page>
</template>

<script setup>
import appHeader from '../components/app/appHeader.vue';
import LeftScreen from '../components/app/_LeftScreen.vue';
import { ref } from 'vue';
import RightScreen from '../components/app/_RightScreen.vue';

const shortDate = ref([new Date(), new Date()]);

function test(count) {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + count);
    shortDate.value = [newDate, newDate]
}

</script>

<style scoped>


.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr; /* Определяем две колонки: первая - 1/3, вторая - 2/3 */
  gap: 20px; /* Отступ между колонками */
}

</style>