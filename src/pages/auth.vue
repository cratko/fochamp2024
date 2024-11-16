<template>
    <f7-page name="auth">

        <f7-navbar class="auth-navbar">
          <f7-nav-right>
            <themeToggle></themeToggle>
          </f7-nav-right>
        </f7-navbar>
        
        <f7-block strong small-inset>
        <f7-login-screen v-model:opened="loginScreenOpened">

            <f7-block strong large-inset class="auth-block">
                <div class="auth-block__content">
                 <f7-block-title class="auth-block__title" large>Авторизация </f7-block-title>
                    
                    <f7-list form class="auth-form">
                        <f7-list-input
                        label="email"
                        type="text"
                        placeholder="test@mail.ru"
                        :value="login"
                        @input="login = $event.target.value"
                        ></f7-list-input>
                        <f7-list-input
                        label="Пароль"
                        type="password"
                        placeholder="test"
                        :value="password"
                        @input="password = $event.target.value"
                        >
                    </f7-list-input>
                    <div style="padding-left: 25px;">
                            <a>Забыли пароль?</a>
                        </div>
                    </f7-list>
                    
                    <f7-list inset>


                        <div class="grid grid-cols-2 grid-gap">
                            <f7-button tonal round preloader @click="auth" :loading="isLoading">Войти</f7-button>
                            <f7-button round preloader @click="auth">Регистрация</f7-button>
                        </div>
                        
                        
                    </f7-list>
                    
                    <f7-block class="auth-block__socials auth-block__socials__title">
                        <f7-block-title>Войти через</f7-block-title>
                        <hr>
                        <div class="auth-block__socials__icons">
                            <img src="../assets/vk.svg"/>
                            <img src="../assets/google.svg"/>
                            <img src="../assets/yandex.ico"/>
                        </div>
                    </f7-block>
                    
                </div>
            </f7-block>

        </f7-login-screen>
    </f7-block>
    </f7-page>
</template>
  
<script>

import { ref, onMounted } from 'vue';
import themeToggle from '../components/app/themeToggle.vue';
import ThemeToggle from '../components/app/themeToggle.vue';

  export default {
    components: {
        themeToggle
    },
    props: {
      f7router: Object,
    },
    setup() {

      const isLoading = ref(false);
      const gidLogin = ref(false);
      return {isLoading, gidLogin};
    },
    data() {
    return {
      login: '',
      password: '',
      loginScreenOpened: true
    }
    },
    
    methods: {
    }
  }
  
</script>

<style scoped>
.auth-block__title {
    text-align: center;
    padding-bottom: 20px;
    padding-top: 20px;
}

.auth-block__socials__title {
    text-align: center;
}

.auth-block {
    display: flex;
    justify-content: center;
    align-items: center;
}

.auth-block__content {
    width: 100vw;
}

@media (min-width: 1300px) {
    .auth-block__content {
        width: 34vw !important;
    }
}


.auth-block__socials {
    padding-top: 20px;
}

.auth-block__socials__icons {
    padding-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    max-height: 50px;
}

.auth-block__socials__icons img{
    max-width: 40px;
    max-height: 40px;
    position: relative;
}
</style>

<style>

.auth-navbar .navbar-bg {
    background-color: initial !important;
}
</style>