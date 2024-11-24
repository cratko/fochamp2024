<template>
    <f7-navbar class="appHeader">
        <f7-nav-left>
          <slot name="nav-left-block">

          </slot>
        </f7-nav-left>
        <f7-nav-title class="appHeader-nav-title"><a href="/">Спортотека</a><span class="subtitle"><slot name="subtitle-with-icon"></slot></span></f7-nav-title>
        <f7-nav-right>
          <f7-button tonal icon-md="material:menu" fill popover-open=".popover-menu" class="action-button" >Меню</f7-button>
          <f7-button color="blue" strong icon-f7="logo_android" href="https://github.com/hackathonsrus/pp_50115_tsfo_bry_bryansk1_19/releases/tag/release-1.0" external class="action-button android-btn" >Скачать</f7-button>
          <f7-button color="blue" v-if="user.login" strong icon-f7="radiowaves_left" :href="'https://t.me/Bryansk_FSP_Bot?start='+user.id" external class="action-button android-btn" >Уведомления</f7-button>

          <f7-popover class="popover-menu">
            <f7-list class="header-list">
              <f7-list-item class="theme_toggle-item">
                <template #after>
                  <themeToggle></themeToggle>
                </template>
              </f7-list-item>
              <f7-list-item link="profile" popover-close title="Профиль" v-if="user.login">
                <template #media>
                  <f7-icon material="account_circle" />
                </template>
              </f7-list-item>
              <f7-list-item link="/admin" popover-close title="Администратор" v-if="user.idRole == 2 && user.login">
                <template #media>
                  <f7-icon material="admin_panel_settings" />
                </template>
              </f7-list-item>
              <f7-list-item link="https://github.com/cratko/fochamp2024" external popover-close title="Скачать" class="android-btn-list">
                <template #media>
                  <f7-icon material="android" />
                </template>
              </f7-list-item>
              <f7-list-item link="/auth/" popover-close title="Выйти" @click="logout" v-if="user.login">
                <template #media>
                  <f7-icon material="logout" color="blue"/>
                </template>
              </f7-list-item>

              <f7-list-item link="/auth/" popover-close title="Войти" @click="logout" v-if="!user.login">
                <template #media>
                  <f7-icon material="login" color="blue"/>
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
import { useStore } from 'framework7-vue';
import { inject } from 'vue'

const { cookies } = useCookies();

const user = useStore("user");

const headerSubtitle = inject('headerSubtitle');


function logout() {
    cookies.remove("token");
    cookies.remove("userLogin");
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@400..800&display=swap');

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
    margin-right: 10px;
    gap: 5px
}

.appHeader-nav-title {
  font-family: "Wix Madefor Display", serif;
  font-optical-sizing: auto;
  font-weight: 600 !important;
  font-style: normal;
}

.appHeader-nav-title .subtitle {
  color: #939393;
}

.appHeader .navbar-bg {
  background-color: initial !important;
}

@media (min-width: 843px) {
  .appHeader .navbar-inner {
    padding-left: 120px;
    padding-right: 120px;
   }

   .android-btn-list {
    display: none !important
  }
}

@media (max-width: 843px) {
  .github-btn {
    display: none !important;
  }

  .android-btn {
    display: none !important;
  }
}

</style>
