<template>
    <f7-popup v-model:opened="popupOpened" @popup:closed="onPopupClosed" class="demo-popup">
      <f7-page>
        <f7-navbar title="Все фильтры">
          <f7-nav-right>
            <f7-link popup-close><f7-icon material="close_small"></f7-icon></f7-link>
          </f7-nav-right>
        </f7-navbar>
        <f7-block>
          <f7-list>
            <!-- City input with v-model -->
            <f7-list-item
              title="Город"
              link="#"
              popup-open=".cityFilter-popup"
            >
              <template #media>
                <f7-icon material="location_on" />
              </template>
            </f7-list-item>
  
            <!-- Age category smart-select with v-model -->
            <f7-list-item
              title="Возрастная категория"
              link="#"
              popup-open=".ageFilter-popup"
            >
              <template #media>
                <f7-icon material="groups" color="blue"/>
              </template>

            </f7-list-item>
  
            <!-- Sex category smart-select with v-model -->
            <f7-list-item
              title="Пол"
              link="#"
              popup-open=".sexFilter-popup"
            >
              <template #media>
                <f7-icon material="assignment_ind" color="blue"/>
              </template>

            </f7-list-item>
  
            <!-- Team smart-select with v-model -->
            <f7-list-item
              title="Состав"
              link="#"
              popup-open=".teamFilter-popup"
            >
              <template #media>
                <f7-icon material="assignment_ind" color="blue"/>
              </template>

            </f7-list-item>
  
            <!-- Calendar Sport Type smart-select with v-model -->
            <f7-list-item
              title="Тип соревнования"
              link="#"
              popup-open=".calendarSportTypeFilter-popup"
            >
              <template #media>
                <f7-icon material="assignment_ind" color="blue"/>
              </template>

            </f7-list-item>
  
            <!-- Program filter link -->
            <f7-list-item
              title="Программы"
              link="#"
              popup-open=".programFilter-popup"
            >
              <template #media>
                <f7-icon material="pin_drop" color="blue"/>
              </template>
            </f7-list-item>

              <!-- Disciplines filter link -->
              <f7-list-item
              title="Дисциплины"
              link="#"
              popup-open=".discFilter-popup"
            >
              <template #media>
                <f7-icon material="pin_drop" color="blue"/>
              </template>
            </f7-list-item>
  
            <!-- Calendar Sports link -->
            <f7-list-item
              title="Виды спорта"
              link="#"
              popup-open=".calendarSportFilter-popup"
            >
              <template #media>
                <f7-icon material="pin_drop" color="blue"/>
              </template>
            </f7-list-item>
          </f7-list>
        </f7-block>
      </f7-page>
    </f7-popup>

    <cityFilterPopup></cityFilterPopup>
    <ageFilterPopup></ageFilterPopup>
    <sexFilterPopup></sexFilterPopup>
    <teamFilterPopup></teamFilterPopup>
    <calendarSportTypeFilterPopup></calendarSportTypeFilterPopup>
    <calendarSportFilterPopup></calendarSportFilterPopup>
    <programFilterPopup></programFilterPopup>
    <discFiltersPopup></discFiltersPopup>
  </template>

<script setup>
import { theme } from 'framework7-vue';
import { ref } from 'vue';
import cityFilterPopup from './filterPopups/cityFilterPopup.vue';
import ageFilterPopup from './filterPopups/ageFilterPopup.vue';
import sexFilterPopup from './filterPopups/sexFilterPopup.vue';
import teamFilterPopup from './filterPopups/teamFilterPopup.vue';
import calendarSportTypeFilterPopup from './filterPopups/calendarSportTypeFilterPopup.vue';
import calendarSportFilterPopup from './filterPopups/calendarSportFilterPopup.vue';
import programFilterPopup from './filterPopups/programFilterPopup.vue';
import discFiltersPopup from './filterPopups/discFiltersPopup.vue';

import { useStore } from 'framework7-vue';

const currentFilter = useStore("allFilter");
const currentDates = useStore("currentPeriodDatesFilter");

// Define ref variables for selected values
const selectedAgeGroups = useStore('currentAgeId');
const selectedSex = useStore('currentTeam');
const selectedTeam = useStore('currentCalendarSportsType');
const selectedCalendarSportType = useStore('currentCalendarSportsType');
const cityInput = useStore('currentLocation');

// Popup open state
const popupOpened = ref(false);


</script>