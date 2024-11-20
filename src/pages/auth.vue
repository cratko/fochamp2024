<template>
    <f7-page name="auth">

        <appHeader></appHeader>
        
        <f7-block strong small-inset>
        <f7-login-screen v-model:opened="loginScreenOpened">

            <f7-block strong large-inset class="auth-block">
                <div class="auth-block__content">
                 <f7-block-title class="auth-block__title" large>Авторизация </f7-block-title>
                    
                    <f7-list form class="auth-form">
                        <f7-list-input
                        label="Логин"
                        type="text"
                        placeholder="login"
                        :value="login"
                        @input="login = $event.target.value"
                        ></f7-list-input>
                        <f7-list-input
                        label="Пароль"
                        type="password"
                        placeholder="password"
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
                            <f7-button tonal round preloader @click="auth(login, password)" :loading="isLoading">Войти</f7-button>
                            <f7-button round preloader @click="goToRegPage">Регистрация</f7-button>
                        </div>
                        
                        
                    </f7-list>
                    
                    <f7-block class="auth-block__socials auth-block__socials__title">
                        <!--<f7-block-title>Войти через</f7-block-title>
                        <hr>
                        <div class="auth-block__socials__icons">
                            <img src="../assets/vk.svg"/>
                            <img src="../assets/google.svg"/>
                            <img src="../assets/yandex.ico"/>
                        </div> -->
                        <vkId></vkId>
                    </f7-block>

                    
                    
                </div>
            </f7-block>

        </f7-login-screen>
    </f7-block>

    </f7-page>
</template>
  
<script>

import { ref, onMounted } from 'vue';
import appHeader from '../components/app/appHeaderAuth.vue';
import { f7, f7ready } from 'framework7-vue';
import vkId from '../components/app/vkId.vue';

  export default {
    components: {
        appHeader,
        vkId
    },
    props: {
      f7router: Object,
    },
    setup() {

      const isLoading = ref(false);

      return {isLoading};
    },
    data() {
    return {
      login: '',
      password: '',
      loginScreenOpened: true
    }
    },
    
    methods: {
        auth(login, password) {
            this.isLoading = true;
            const data = {
                login: login,
                password: password
            }
            f7.store.dispatch('auth', data)
            .then(() => {
                    this.isLoading = false;
                    f7.view.main.router.navigate('/', {
                        clearPreviousHistory: true
                    })
                })
            .catch(error => {
                this.isLoading = false;
                this.notificationFull = f7.notification.create({
                    icon: '<i class="icon f7-icons">info</i>',
                    title: 'Ошибка',
                    titleRightText: 'сейчас',
                    subtitle: 'Неверный логин или пароль',
                    text: 'Попробуйте ввести другие данные',
                    closeTimeout: 3000,
                    });
                
                // Open it
                this.notificationFull.open();
            })
        },
        goToRegPage() {
            f7.view.main.router.navigate("/register", {
                clearPreviousHistory: true
            })
        }
    }
  }
  
</script>

<style>
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

