<template>
    <f7-block strong inset>
      <f7-segmented raised tag="p">
        <f7-button
          small
          :active="isActive == 1"
          @click="set(1)"
        >
          1 месяц
        </f7-button>
        <f7-button
          small
          :active="isActive == 3"
          @click="set(3)"
        >
          3 месяца
        </f7-button>
        <f7-button
          small
          :active="isActive == 6"
          @click="set(6)"
        >
          6 месяцев
        </f7-button>
      </f7-segmented>
    </f7-block>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useStore, f7 } from 'framework7-vue';

  const activeStrongButton = useStore('currentPeriodDatesFilter');
  const isActive = defineModel()


  function set(c) {
    isActive.value = c;
    f7.store.dispatch('setPeriodDates', [addMonths(0), addMonths(c)]) 
  }  
  
  

 function addMonths(count) {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + count);
    return newDate;
  }
  </script>