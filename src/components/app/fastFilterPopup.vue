<template>
    <f7-popup v-model:opened="popupOpened" @popup:closed="onPopupClosed" class="fastFilter-popup">
      <f7-page>
        <f7-navbar title="Все фильтры">
          <f7-nav-right>
            <f7-link popup-close><f7-icon material="close_small"></f7-icon></f7-link>
          </f7-nav-right>
        </f7-navbar>
        <f7-block>
          <f7-list>
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