<template>
    <f7-popup class="program-popup">
      <f7-page>
        <f7-block-title>Выбранные программы и дисциплины</f7-block-title>
        <f7-block outline-ios>
          <f7-treeview>
            <template v-for="program in treeData" :key="program.id">
              <f7-treeview-item :label="program.name" icon-f7="cube_box">
                <template #content-start>
                  <f7-checkbox
                    :model-value="checkboxes[program.id]"
                    @click="FUpdate()"
                    @update:model-value="(value) => updateCheckboxes(program, value)"
                  />
                </template>
                <template v-if="program.children && program.children.length">
                  <template v-for="discipline in program.children" :key="discipline.id">
                    <f7-treeview-item :label="discipline.name" icon-f7="tag">
                      <template #content-start>
                        <f7-checkbox
                          :model-value="checkboxes[discipline.id]"
                          @click="FUpdate()"
                          @update:model-value="(value) => updateCheckboxes(discipline, value)"
                        />
                      </template>
                    </f7-treeview-item>
                  </template>
                </template>
              </f7-treeview-item>
            </template>
          </f7-treeview>
        </f7-block>
      </f7-page>
    </f7-popup>
    {{ selectedDisciplines }}
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useStore } from 'framework7-vue';
  
  export default {
    data() {
        const selectedDisciplines = useStore('currentDisciplineId')
        const selectedPrograms = useStore('currentProgramId')

        return {
            selectedDisciplines,
            selectedPrograms
        }
    },
    setup() {
      const checkboxes = ref({});
      const treeData = ref([]);
      const filtersData = JSON.parse(localStorage.getItem("filtersData")) || {};
      


      const data = {
        "programInfo": filtersData.programInfo,
        "disciplineInfo": filtersData.disciplineInfo
      };
  
      const buildTree = () => {
        const programs = data.programInfo;
        const disciplines = data.disciplineInfo;
  
        const programMap = {};
        programs.forEach(program => {
          programMap[program.id] = program;
          program.children = [];
        });
  
        disciplines.forEach(discipline => {
          if (programMap[discipline.parentId]) {
            programMap[discipline.parentId].children.push(discipline);
          }
        });
  
        treeData.value = programs;
      };
  
      const updateCheckboxes = (item, newValue) => {
        checkboxes.value[item.id] = newValue;
  
        if (item.children && item.children.length) {
          item.children.forEach(child => {
            checkboxes.value[child.id] = newValue;
          });
        } else if (item.parentId !== undefined && item.parentId !== null) {
          const parentProgram = treeData.value.find(program => program.id === item.parentId);
          if (parentProgram) {
            const allChildrenChecked = parentProgram.children.every(child => checkboxes.value[child.id]);
            checkboxes.value[parentProgram.id] = allChildrenChecked;
          }
        }

  
    };

    const FUpdate = () => {
        this.selectedDisciplines = getSelectedItems().disciplineId
        this.selectedPrograms = getSelectedItems().programId

        console.log(this.selectedDisciplines)    
    }

      const getSelectedItems = () => {
        const selectedItems = {
            disciplineId: [],
            programId: []
        };

        treeData.value.forEach(program => {
            if (checkboxes.value[program.id]) {
            selectedItems.programId.push(program.id);
            }

            program.children.forEach(discipline => {
            if (checkboxes.value[discipline.id]) {
                selectedItems.disciplineId.push(discipline.id);
            }
            });
        });

        return selectedItems;
        };
  
      buildTree();
  
      data.programInfo.forEach(program => {
        checkboxes.value[program.id] = false;
        program.children.forEach(discipline => {
          checkboxes.value[discipline.id] = false;
        });
      });
  
      return {
        checkboxes,
        FUpdate,
        treeData,
        updateCheckboxes
      };
    },
  };
  </script>