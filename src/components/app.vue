<template>
  <f7-app v-bind="f7params">
    <f7-view main class="safe-areas" url="/">
    </f7-view>
  </f7-app>
</template>

<script>
  import { ref, onMounted } from 'vue';
  import { f7, f7ready, useStore } from 'framework7-vue';

  import f7params from '../js/app/config/f7params.js'
  import init from '../js/app/init.js';

  

  export default {
    setup() {
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