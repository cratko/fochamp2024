<template>
      <f7-page name="register">
        <appHeader></appHeader>
        <f7-block strong large-inset class="auth-block">
            <div class="auth-block__content">
             <f7-block-title class="auth-block__title" large>Создать аккаунт </f7-block-title>
                
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

                </f7-list>
                
                <f7-list inset>


                    <div class="grid grid-cols-2 grid-gap">
                        <f7-button tonal round preloader @click="auth(login, password)" :loading="isLoading">Регистрация</f7-button>
                        <f7-button round preloader @click="f7router.navigate('/auth')">Уже есть аккаунт? Войти</f7-button>
                    </div>
                    
                    
                </f7-list>
                </div>
                </f7-block>
      </f7-page>
    </template>

<script >
import appHeader from '../components/app/appHeaderAuth.vue';
import { f7, f7ready } from 'framework7-vue';

export default {
    components: {
        appHeader
    },
    props: {
      f7route: Object,
      f7router: Object,
    },
}
</script>

<style scoped>

</style>