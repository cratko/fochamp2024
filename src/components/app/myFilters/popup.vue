<template>
    <f7-popup v-model:opened="popupOpened" @popup:closed="onPopupClosed" class="myFilters-popup">
      <f7-page>
        <f7-navbar title="Все ваши фильтры">
          <f7-nav-right>
            <f7-link popup-close><f7-icon material="close_small"></f7-icon></f7-link>
          </f7-nav-right>
        </f7-navbar>
        <f7-block>
          <f7-list>
            <f7-list-item
            v-for="filter in myFilters"
            :title="filter.name"
            >
            <template #media>
                <f7-icon material="calendar_today"></f7-icon>
              </template>
            <div class="grid-container">
                <f7-button tonal small @click="prim(filter.data)"><f7-icon material="open_in_new" class="sub-icon"></f7-icon>Применить</f7-button>
            </div>
            
          </f7-list-item>
          </f7-list>
        </f7-block>
      </f7-page>
    </f7-popup>

  </template>

<script setup>
import { theme, f7 } from 'framework7-vue';
import { ref } from 'vue';

let myFilters = JSON.parse(localStorage.getItem("myFilters"))

function prim(obj) {
    f7.store.dispatch('setFilter', obj)
}
</script>