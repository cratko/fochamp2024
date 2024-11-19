<template>
  <f7-page name="profile" class="grid-demo">
    <f7-navbar title="Личный кабинет">
    
      <div class="grid grid-cols-5 grid-gap" >
        <div class="col-2"></div>
        <div class="col-1"></div>

      <f7-button fill popover-open=".popover-menu">Настройки</f7-button>
          <f7-popover class="popover-menu">
            <f7-list>
              <f7-list-item link="/dialog/" popover-close title="Dialog" />
              <f7-list-item link="/tabs/" popover-close title="Tabs" />
              <f7-list-item link="/panel/" popover-close title="Side Panels" />
              <f7-list-item link="/list/" popover-close title="List View" />
              <f7-list-item link="/inputs/" popover-close title="Form Inputs" />
            </f7-list>
          </f7-popover>
      <f7-button fill popover-open=".popover-menu">Open popover on me</f7-button>
          <f7-popover class="popover-menu">
            <f7-list>
              <f7-list-item link="/dialog/" popover-close title="Dialog" />
              <f7-list-item link="/tabs/" popover-close title="Tabs" />
              <f7-list-item link="/panel/" popover-close title="Side Panels" />
              <f7-list-item link="/list/" popover-close title="List View" />
              <f7-list-item link="/inputs/" popover-close title="Form Inputs" />
            </f7-list>
      </f7-popover>
      
    </div>

    </f7-navbar>
    <f7-block>
      <div class="grid grid-cols-1 grid-gap">
        <div class="col-1">
          <f7-list menu-list strong-ios outline-ios>
              <f7-list-item
                link
                title="Home"
                :selected="selected === 'home'"
                @click="() => (selected = 'home')"
              >
                <template #media>
                  <f7-icon md="material:home" ios="f7:house_fill" />
                </template>
              </f7-list-item>
              <f7-list-item
                link
                title="Profile"
                :selected="selected === 'profile'"
                @click="() => (selected = 'profile')"
              >
                <template #media>
                  <f7-icon md="material:person" ios="f7:person_fill" />
                </template>
              </f7-list-item>
              <f7-list-item
                link
                title="Settings"
                :selected="selected === 'settings'"
                @click="() => (selected = 'settings')"
              >
                <template #media>
                  <f7-icon md="material:settings" ios="f7:gear_alt_fill" />
                </template>
              </f7-list-item>
          </f7-list>
        </div>
        <div class="col-2">
          <f7-card
            title="Card header"
            content="Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions."
            footer="Card footer">
          </f7-card> 
          <f7-card
            title="Card header"
            content="Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions."
            footer="Card footer">
          </f7-card>          
        </div>
        <div class="col-3">
          <f7-card
            title="Card header"
            content="Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions."
            footer="Card footer">
          </f7-card>          
        </div>
      </div>
    </f7-block>
  </f7-page>
</template>

<script>
import { f7Navbar, f7Page, f7BlockTitle, f7Block, f7List, f7ListItem, f7Icon,  f7Link,  f7Button, } from 'framework7-vue';

export default {
  components: {
    f7Navbar,
    f7Page,
    f7BlockTitle,
    f7Block,
    f7List,
    f7ListItem,
    f7Icon,
    f7Link,
    f7Button
  },
};
</script>
<style scoped>
.grid-demo .grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 40px;
}

.grid-demo .col-1 {
  grid-column: span 1;
  text-align: center;
}

.grid-demo .col-2 {
  grid-column: span 4;
  text-align: center;
}
.grid-demo .col-3 {
  grid-column: span 2;
  text-align: center;
}

</style>