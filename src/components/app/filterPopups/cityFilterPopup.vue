<template>
    <f7-popup class="cityFilter-popup">
      <f7-page>
        <f7-searchbar v-if="renderSearch"
          search-container=".city-list"
          search-item="li"
          search-in=".item-title"
        ></f7-searchbar>
  
        <f7-list strong outline-ios inset-md dividers-ios class="searchbar-not-found">
          <f7-list-item title="Nothing found"></f7-list-item>
        </f7-list>
  
        <f7-list
          strong
          outline-ios
          inset-md
          dividers-ios
          class="searchbar-found city-list"
          medial-list
          virtual-list
          :virtual-list-params="{
            items,
            searchAll,
            renderExternal,
            height: theme.ios ? 63 : theme.md ? 73 : 77,
          }"
        >
          <ul class="cities-ul">
            <f7-list-item
              v-for="(item, index) in vlData.items"
              :key="index"
              media-item
              :title="item.name"
              :style="`top: ${vlData.topPosition}px`"
              :virtual-list-index="item.index"
            >
              <f7-checkbox
                slot="before"
                :checked="selectedCities.includes(item.name)"
                @change="toggleCitySelection(item)"
              ></f7-checkbox>
            </f7-list-item>
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
    f7Checkbox,
    useStore
  } from 'framework7-vue';
  
  export default {
    components: {
      f7Navbar,
      f7Page,
      f7List,
      f7ListItem,
      f7Subnavbar,
      f7Searchbar,
      f7Block,
      f7Checkbox,
    },
    data() {
      const filtersData = JSON.parse(localStorage.getItem("filtersData")) || {};
      const selectedCities = useStore("currentLocation")
      const items = filtersData.cities || [];
      let i = 0;
      items.forEach(item => {
        item.index = i + 1;
        i++;
      });
  
      return {
        theme,
        items,
        selectedCities,
        vlData: {
          items: [],
        },
        renderSearch: false
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
      toggleCitySelection(city) {
        const index = this.selectedCities.indexOf(city.name);
        if (index === -1) {
          this.selectedCities.push(city.name);
        } else {
          this.selectedCities.splice(index, 1);
        }
      },
    },
    mounted() {
        this.renderSearch = true;
    }
  };
  </script>

<style>
.cities-ul .item-inner {
    display: flex !important;

}
</style>