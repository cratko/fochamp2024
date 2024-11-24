
<template>
    <f7-popup class="calendarSports-popup">
      <f7-page>
        <!-- Subnavbar that appears after mount -->
        <f7-subnavbar v-if="showSubnavbar" :inner="false">
          <f7-searchbar
            search-container=".virtual-list"
            search-item="li"
            search-in=".item-title"
          ></f7-searchbar>
        </f7-subnavbar>

        <f7-list strong outline-ios inset-md dividers-ios class="searchbar-not-found">
          <f7-list-item title="Nothing found"></f7-list-item>
        </f7-list>
        <f7-list
        strong
        outline-ios
        inset-md
        dividers-ios
        class="searchbar-found"
        medial-list
        virtual-list
        :virtual-list-params="{
          items,
          searchAll,
          renderExternal,
          height: theme.ios ? 63 : theme.md ? 73 : 77,
        }"
      >
        <ul>
          <f7-list-item
            v-for="(item, index) in vlData.items"
            :key="index"
            media-item
            :title="item.name"
            :style="`top: ${vlData.topPosition}px`"
            :virtual-list-index="item.index"
            @click="toggleCitySelection(item)"
            :checkbox="true"
            v-model:checked="item.checked"
          ></f7-list-item>
        </ul>
      </f7-list>
      </f7-page>
    </f7-popup>
  </template>

  <script>
  import {
    f7Navbar,
    f7Page,
    f7List,
    f7ListItem,
    f7Subnavbar,
    f7Searchbar,
    f7Block,
    theme,
  } from 'framework7-vue';

  import {ref} from 'vue';
  import { useStore } from 'framework7-vue';

  export default {
    components: {
      f7Navbar,
      f7Page,
      f7List,
      f7ListItem,
      f7Subnavbar,
      f7Searchbar,
      f7Block,
    },
    data() {
        const filtersData = JSON.parse(localStorage.getItem("filtersData")) || {};
        const selected = useStore("currentCalendarSports")
    
    let items = filtersData.calendarSport || [];
    let i = 0;
    items.forEach(item => {
      item.index = i + 1;
      i++;
    });
      return {
        theme,
        items,
        selected,
        vlData: {
          items: items,
        },
        showSubnavbar: false,
      };
    },
    methods: {
        searchAll(query, items) {
      const found = [];
      for (let i = 0; i < items.length; i += 1) {
        if (items[i].name.toLowerCase().includes(query.toLowerCase()) || query.trim() === '') {
          found.push(i);
        }
      }
      return found; // return array with matched indexes
    },

    renderExternal(vl, vlData) {
      this.vlData = vlData;
    },

    toggleCitySelection(obj) {
      const index = this.selected.indexOf(obj.id);
      if (index === -1) {
        this.selected.push(obj.id);
      } else {
        this.selected.splice(index, 1);
      }
    }
    },
    mounted() {
        this.showSubnavbar = true; // Show the subnavbar after the page has mounted
        },
  };
  </script>