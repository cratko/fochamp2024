<template>
    <f7-block class="theme_toggle-container">
    <i class="f7-icons theme_icon">
        sun_max
    </i>
    <f7-toggle color="black" v-model:checked="toggled" @toggle:change="toggleTheme"/>
    </f7-block>
  </template>

<script setup>
import { onActivated, onMounted, ref } from 'vue'
import { f7 } from 'framework7-vue';
import { useStore } from 'framework7-vue';
import store from '../../js/store.js';

store.dispatch('setThemeFromCookies');
const isDarkMode = useStore('isDarkTheme');

const toggled = ref((isDarkMode.value === "true"));

function toggleTheme() {
    store.dispatch('setLocalDarkTheme', !toggled.value);   
    f7.setDarkMode(!toggled.value);
}


</script>

<style scoped>
.theme_toggle-container {
    display: flex;
    gap: 12px;
    margin-right: 7px;
}
</style>