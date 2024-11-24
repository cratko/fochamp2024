
  
  <template>
    <f7-page class="grid-demo">
      <f7-navbar back-link="Back" title="Администрирование"></f7-navbar>
      <f7-block>
        <div class="grid grid-cols-2 grid-gap">
          <f7-block>
            <div><f7-button tonal round href="http://94.228.127.47:8084/admin" external>Админ-панель Базы данных</f7-button></div>
          </f7-block>
          <div>
            <div class="grid grid-cols-2 grid-gap">
              <div class="text-align-center">
                <f7-gauge
                  type="semicircle"
                  :value="0.88"
                  value-text="88%"
                  value-text-color="#f44336"
                  border-color="#f44336"
                />
                <f7-block-title>Процент прошедших соревнований</f7-block-title>
              </div>
              <div class="text-align-center">
                <f7-gauge
                  type="semicircle"
                  :value="0.5"
                  value-text="12666"
                  value-text-color="#e91e63"
                  border-color="#e91e63"
  
                  label-text-color="#333"
                />
                <f7-block-title>Количество соревнований</f7-block-title>
              </div>
            </div>
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