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
            <f7-list-input
              label="Город"
              type="text"
              placeholder="Москва"
              clear-button
              v-model:value="cityInput"
            >
              <template #media>
                <f7-icon material="location_on" />
              </template>
            </f7-list-input>
  
            <!-- Age category smart-select with v-model -->
            <f7-list-item
              title="Возрастная категория"
              smart-select
              :smart-select-params="{ openIn: 'popover' }"
            >
              <template #media>
                <f7-icon material="groups" color="blue"/>
              </template>
              <select name="ageGroups" multiple v-model="selectedAgeGroups">
                <option v-for="group in filtersData.ageCategory" :value="group.age">{{ group.age }}</option>
              </select>
            </f7-list-item>
  
            <!-- Sex category smart-select with v-model -->
            <f7-list-item
              title="Пол"
              smart-select
              :smart-select-params="{ openIn: 'popover' }"
            >
              <template #media>
                <f7-icon material="assignment_ind" color="blue"/>
              </template>
              <select name="sex" multiple v-model="selectedSex">
                <option v-for="sex in filtersData.sexCategory" :value="sex.sex">{{ sex.sex }}</option>
              </select>
            </f7-list-item>
  
            <!-- Team smart-select with v-model -->
            <f7-list-item
              title="Состав"
              smart-select
              :smart-select-params="{ openIn: 'popover' }"
            >
              <template #media>
                <f7-icon material="assignment_ind" color="blue"/>
              </template>
              <select name="team" multiple v-model="selectedTeam">
                <option v-for="team in filtersData.teamInfo" :value="team.id">{{ team.name }}</option>
              </select>
            </f7-list-item>
  
            <!-- Calendar Sport Type smart-select with v-model -->
            <f7-list-item
              title="Тип соревнования"
              smart-select
              :smart-select-params="{ openIn: 'popover' }"
            >
              <template #media>
                <f7-icon material="assignment_ind" color="blue"/>
              </template>
              <select name="calendarSportType" multiple v-model="selectedCalendarSportType">
                <option v-for="type in filtersData.calendarSportType" :value="type.id">{{ type.name }}</option>
              </select>
            </f7-list-item>
  
            <!-- Program filter link -->
            <f7-list-item
              title="Программы"
              link="#"
              popup-open=".program-popup"
            >
              <template #media>
                <f7-icon material="pin_drop" color="blue"/>
              </template>
            </f7-list-item>
  
            <!-- Calendar Sports link -->
            <f7-list-item
              title="Виды спорта"
              link="#"
              popup-open=".calendarSports-popup"
            >
              <template #media>
                <f7-icon material="pin_drop" color="blue"/>
              </template>
            </f7-list-item>
          </f7-list>
        </f7-block>
      </f7-page>
    </f7-popup>
  
    <programsFilter></programsFilter>
    <calendarSportsFilter></calendarSportsFilter>

  </template>

<script setup>
import { theme } from 'framework7-vue';
import { ref } from 'vue';
import { defineAsyncComponent } from 'vue'
import programsFilter from './programsFilter.vue';
import calendarSportsFilter from './calendarSportsFilter.vue';
import { useStore } from 'framework7-vue';

// Retrieve filtersData from localStorage
const filtersData = JSON.parse(localStorage.getItem("filtersData"));
const currentFilter = useStore("allFilter");

// Define ref variables for selected values
const selectedAgeGroups = useStore('currentAgeId');
const selectedSex = useStore('currentTeam');
const selectedTeam = useStore('currentCalendarSportsType');
const selectedCalendarSportType = useStore('currentCalendarSportsType');
const cityInput = useStore('currentLocation');

// Popup open state
const popupOpened = ref(false);


</script>