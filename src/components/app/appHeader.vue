<template>
    <f7-navbar>
        <f7-nav-left>
          <f7-link icon-md="material:home"></f7-link>
        </f7-nav-left>
        <f7-nav-title>Fochamp | Главная</f7-nav-title>
        <f7-nav-right>
          <f7-button fill popover-open=".popover-menu" class="action-button" >Настройки</f7-button>
          <f7-popover class="popover-menu">
            <f7-list class="header-list">
              <f7-list-item class="theme_toggle-item">
                <template #after>
                  <themeToggle></themeToggle>
                </template>
              </f7-list-item>
              <f7-list-item link="profile" popover-close title="Профиль">
                <template #media>
                  <f7-icon material="account_circle" />
                </template>
              </f7-list-item>
              <f7-list-item link="/auth/" popover-close title="Выйти" @click="logout">
                <template #media>
                  <f7-icon material="logout" color="blue"/>
                </template>
              </f7-list-item>
            </f7-list>
          </f7-popover>
        </f7-nav-right>
  
      </f7-navbar>
</template>

<script setup>
import themeToggle from './themeToggle.vue';
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();

function logout() {
    cookies.remove("token");
    cookies.remove("login");
}

</script>

<style>
.theme_toggle-container {
    display: flex;
}

.theme_toggle-item {
  display: flex;
  justify-content: center;
  max-height: 60px;
}

.header-list {
  padding-bottom: 10px;
}

.action-button {
    margin-right: 25px;
}
</style>