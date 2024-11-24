<template>
    <div class="left-screen">
        <f7-block inset strong>
              <f7-block>

                </f7-block>

            <!-- Ближайший период -->
              <f7-block-title>
                <f7-icon material="schedule" class="sub-icon"></f7-icon>
                Ближайший период
            </f7-block-title>
              
              <shortDatePicker v-model="sdpActive"></shortDatePicker>

            <!--  -->

            
            <!-- Расширенный выбор периода  -->
            <f7-block-title>
                <f7-icon material="calendar_month" class="sub-icon"></f7-icon>
                Расширенный выбор периода
            </f7-block-title>
            <f7-block inset strong>
                <f7-list class="rash-per">
                    <f7-list-input
                    type="datepicker"
                    placeholder="Выберите период"
                    
                    v-model:value="ss"
                    :calendar-params="{ rangePicker: true }"
                    />
                </f7-list>

            </f7-block>

        <!-- Фильтры  -->
        
        
        <f7-list strong-ios outline-ios>
                <f7-block>
                        <f7-block-title>Фильтры</f7-block-title>
                        <f7-list>
                            <f7-list-item
                            popup-open=".demo-popup"
                            link="#"
                            header="Дисциплины, программы и т.п."
                            title="Все фильтры"
                            after="Выбрать"
                        >
                            <template #media>
                            <f7-icon material="tune" />
                            </template>
                            </f7-list-item>

                    </f7-list>
                </f7-block>
        </f7-list>

            <filterButtons v-model="sdpActive"></filterButtons>
            </f7-block>

        <popupAllFilters></popupAllFilters>


        <myFilters></myFilters>
    </div>
</template>


<style scoped>

.left-page {
    display: grid;
  }

.rash-per {
    padding: 0 !important;
    margin: 0 !important;
}

.sub-icon {
    padding-right: 10px;
}

  
</style>

<script setup>
    import { useStore, f7 } from 'framework7-vue';
    import shortDatePicker from './shortDatePicker.vue';
    import popupAllFilters from './_popupAllFilters.vue';
    import filterButtons from './filterQuery/filterButtons.vue';
    import myFilters from './myFilters/popup.vue';
    import fastFilterPopup from './fastFilterPopup.vue';

    import {ref, defineAsyncComponent, watch} from 'vue';


    const currentFilter = useStore('currentFilter');
    const user = useStore('user');
    const currentPeriodDatesFilter = useStore('currentPeriodDatesFilter');


    const sdpActive = ref(0)
    const ss = ref([])
    watch(ss, async (newQuestion, oldQuestion) => {
        f7.store.dispatch('setPeriodDates', newQuestion) 
        sdpActive.value = 0
        console.log(currentFilter)
    })



    const selectedDisciplines = useStore('currentDisciplineId')
    const selectedPrograms = useStore('currentProgramId')
    const rendert = ref(false);

</script>
