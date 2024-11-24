<template>
  <f7-app v-bind="f7params">
    <f7-view main class="safe-areas" url="/">
    </f7-view>
  </f7-app>
</template>

<script>
  import { ref, onMounted, provide } from 'vue';
  import { f7, f7ready, useStore } from 'framework7-vue';

  import f7params from '../js/app/config/f7params.js'
  import init from '../js/app/init.js';
  import getFiltersData from '../js/app/getFiltersData.js';
  export default {
    setup() {
      getFiltersData()
      onMounted(() => {
        f7ready(() => {
          init()
        });
      });

      return {
        f7params
      }
    }
  }
</script>