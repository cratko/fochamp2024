<template>
    <f7-list>
        <f7-list-item checkbox v-model:checked="isOptimised" title="Оптимальный выбор"></f7-list-item>
    </f7-list>
    
    <f7-segmented round tag="p">
        <f7-button round outline small @click="getData()"> <f7-icon material="assignment_turned_in" class="sub-icon"></f7-icon> Применить фильтр</f7-button>
        
        <f7-button round outline small @click="clearFilter()" color="red"> <f7-icon material="delete_forever" class="sub-icon"></f7-icon> Очистить</f7-button>
      </f7-segmented>

</template>

<script setup>
import { useStore, f7 } from 'framework7-vue';
import { ref } from 'vue';
const currentFilter = useStore('allFilter')
const currentDates = useStore('currentPeriodDatesFilter')

const filterResults = useStore('filterResults')
const user = useStore('user')
const sdpActive = defineModel()

const isOptimised = ref(false);

function clearFilter() {
    f7.store.dispatch("clearCurrentFilter")
    f7.store.dispatch("clearFilterResults")
    sdpActive.value = 0;
    console.log(currentFilter)
}

function saveFilter() {
    let datas = {
        calendarSportId: currentFilter.value.calendarSports,
          disciplineId: currentFilter.value.disciplineId,
          programId: currentFilter.value.programId,
          location: currentFilter.value.locations[0],
          ageId: currentFilter.value.ageId,
          sexId: currentFilter.value.sexId,
          dateFrom: currentFilter.value.periodDates[0].toLocaleDateString('en-CA'),
          dateTo: currentFilter.value.periodDates[1].toLocaleDateString('en-CA'),
          calendarSportTypeId: currentFilter.value.calendarSportsType,
          size: 1000
    }
    let fd = []
    if (JSON.parse(localStorage.getItem("myFilters")) != null) {
        fd = JSON.parse(localStorage.getItem("myFilters"))
    } else {
        fd = []
    }
    
    fd.push({name: new Date().toLocaleDateString('en-CA') + "0", data: datas})
    localStorage.setItem('myFilters', JSON.stringify(fd))
    
}

function getData() {
    f7.store.dispatch("clearFilterResults")
    f7.store.dispatch("setFiltersResultLoading", true)


    let datas = {
        calendarSportId: currentFilter.value.calendarSports,
          disciplineId: currentFilter.value.disciplineId,
          programId: currentFilter.value.programId,
          location: currentFilter.value.locations[0],
          ageId: currentFilter.value.ageId,
          sexId: currentFilter.value.sexId,
          dateFrom: currentFilter.value.periodDates[0].toLocaleDateString('en-CA'),
          dateTo: currentFilter.value.periodDates[1].toLocaleDateString('en-CA'),
          calendarSportTypeId: currentFilter.value.calendarSportsType,
          size: 1000
    }

    let url = 'http://90.156.208.88:8080/bryansk/api/calendar/get-calendar-sport-info-by-filter'
    if (isOptimised.value == true) {
        url = 'http://94.228.127.47:8084/api/v1/calendar-sport-info'
    }
    console.log(datas)
    fetch(url, {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*'

        },

        body: JSON.stringify(datas),
      })
      .then(response => {
        return response.json();
      })
      .then(commits => {
        if (isOptimised.value == true) {
            f7.store.dispatch('setFiltersResult', commits.results) 
        } else {
            f7.store.dispatch('setFiltersResult', commits.data) 
        }
        f7.store.dispatch("setFiltersResultLoading", false)
      });

}
</script>