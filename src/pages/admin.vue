<template>
    <f7-page class="grid-demo">
      <f7-navbar back-link="Back" title="Администрирование" ></f7-navbar>
      <f7-block>
        <div class="grid grid-cols-2 grid-gap">
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
  