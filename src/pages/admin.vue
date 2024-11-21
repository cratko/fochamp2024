<template>
    <f7-page class="grid-demo">
      <appHeader>
        <template #nav-left-block>
          <f7-link back icon-md="material:arrow_back_ios" color="blue"></f7-link>
        </template>
        <template #subtitle-with-icon>
          <f7-icon size="14px" material="manage_accounts"/>
          Администрирование
        </template>
      </appHeader>
      <f7-block>
        <div class="grid grid-cols-2 grid-gap">
          <div class="col-2">
            <f7-link href="http://94.228.127.47:8084/admin" external>
            <f7-card outline-md class="demo-card-header-pic">
              <f7-card-header
                valign="bottom"
                style="background-color:  #b57070"
                >Панель администратора</f7-card-header
              >
              <f7-card-content>
                <p class="date">Обновлено 21.11.2024</p>
                <p>
                  Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non
                  felis. Phasellus quis nibh hendrerit...
                </p>
              </f7-card-content>
              <f7-card-footer>
                <f7-link href="http://94.228.127.47:8084/admin" external>Перейти</f7-link>
                <f7-link>Read more</f7-link>
              </f7-card-footer>
            </f7-card> 
          </f7-link>
          </div>
          <f7-link href="http://31.132.129.137:3009/dashboard" external>
          <div class="col-3">
            <f7-card class="demo-card-header-pic">
              <f7-card-header
                valign="bottom"
                style="background-color: rgb(54 91 91)"
                >Статистика и аналитика</f7-card-header
              >
              <f7-card-content>
                <p class="date">Обновлено 21.11.2024</p>
                <p>
                  Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non
                  felis. Phasellus quis nibh hendrerit...
                </p>
              </f7-card-content>
              <f7-card-footer>
                <f7-link href="http://31.132.129.137:3009/dashboard" external>Перейти</f7-link>
                <f7-link>Read more</f7-link>
              </f7-card-footer>
            </f7-card>  
            </div>
        </f7-link>     
        </div>
      </f7-block>
    </f7-page>
  </template>
  
  <script>
  import { f7Navbar, f7Page, f7BlockTitle, f7Block, f7List, f7ListItem, f7Icon,  f7Link,  f7Button, } from 'framework7-vue';
  import appHeader from '../components/app/appHeader.vue';

  export default {
    components: {
      f7Navbar,
      f7Page,
      f7BlockTitle,
      f7Block,
      f7List,
      f7ListItem,
      f7Icon,
      f7Link,
      f7Button,
      appHeader
    },
  };
  </script>
  