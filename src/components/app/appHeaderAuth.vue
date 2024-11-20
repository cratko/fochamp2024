<template>
    <f7-navbar class="app-header">
        <f7-nav-right>
          <themeToggle></themeToggle>
        </f7-nav-right>
    </f7-navbar>
</template>

<script setup>
import themeToggle from './themeToggle.vue';
</script>

<style>

.app-header .navbar-bg {
    background-color: initial !important;
}

.theme_toggle-container {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>