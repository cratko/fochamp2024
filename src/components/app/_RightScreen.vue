<template>
    <f7-block>
        <f7-block-title>Подходящие спортивные мероприятия</f7-block-title>
        <f7-progressbar infinite color="orange" v-if="filterIsLoading"/>
        <f7-list media-list dividers>
          <f7-list-item
            v-for="item in filterResults"
            :title="item.calendarSportName"
            :after="item.dateFrom.slice(0, 10) + ' - ' + item.dateTo.slice(0, 10)"
            :subtitle="item.calendarSportTypeName"
            >
            <template #media>
                <f7-icon material="emoji_events" size="43px" color="blue"></f7-icon>
              </template>
            <div class="grid-container">
                <f7-button small target="_blank" :href="'http://maps.yandex.ru/?text=' + item.location" external><f7-icon material="location_on" class="sub-icon"></f7-icon>Показать на карте</f7-button>
                <f7-button tonal small popup-open=".about-popup" @click="currentObj = item"><f7-icon material="open_in_new" class="sub-icon"></f7-icon>Подробнее</f7-button>
            </div>
            
          </f7-list-item>
        </f7-list>
    </f7-block>

    <f7-popup class="about-popup">
        <f7-page>
          <f7-navbar :title="currentObj.calendarSportName" :subtitle="currentObj.calendarSportTypeName">

            <f7-nav-right>
              <f7-link popup-close>Закрыть</f7-link>
            </f7-nav-right>
          </f7-navbar>
          <f7-block>
            <div>
                Даты проведения: <f7-chip>{{currentObj.dateFrom.slice(0, 10) + ' - ' + currentObj.dateTo.slice(0, 10)}}</f7-chip>
            </div>
            <div>
                Тип соревнования: <f7-chip>{{currentObj.calendarSportTypeName}}</f7-chip>
            </div>
            <div>
                Номер EKP: <f7-chip>{{currentObj.ekp}}</f7-chip>
            </div>
            <div>
                Командный состав: <f7-chip>{{currentObj.teamName}}</f7-chip>
            </div>
            <div>
                Количество участников: <f7-chip>{{currentObj.count}}</f7-chip>
            </div>
            <p>Описание мероприятия: {{currentObj.description}}</p>
        </f7-block>
         

        </f7-page>
      </f7-popup>
</template>

<script setup>
import { useStore } from 'framework7-vue';
import {ref} from 'vue';

const filterResults = useStore('filterResults');
const filterIsLoading = useStore('filterResultsLoading')

const currentObj = ref(  {
            id: 100797,
            calendarSportId: 446,
            calendarSportName: "АВИАМОДЕЛЬНЫЙ СПОРТ",
            calendarSportTypeId: 5045,
            calendarSportTypeName: "ЧЕМПИОНАТ ПРИВОЛЖСКОГО ФЕДЕРАЛЬНОГО ОКРУГА",
            count: 25,
            dateFrom: "2024-12-12T21:00:00.000+00:00",
            dateTo: "2024-12-14T21:00:00.000+00:00",
            description: null,
            ekp: "2152020017022966",
            location: "РОССИЯ\nРЕСПУБЛИКА БАШКОРТОСТАН, Аскарово село",
            perfomer: "",
            teamId: 30,
            teamName: "Основной состав",
            image: "",
            programInfoList: [],
            disciplineInfoList: [
                {
                    id: 413,
                    name: "КЛАСС F-1E"
                },
                {
                    id: 415,
                    name: "дисциплина F-1Е"
                }
            ]
        })
</script>

<style>
.grid-container {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }

.sub-icon {
    padding-right: 5px
}

.about-popup {
    max-height: 350px;
}
</style>