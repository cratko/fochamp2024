<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <appHeader>
      <template #nav-left-block>
        <f7-link icon-md="material:circles_ext" color="blue"></f7-link>
      </template>
      
      <template #subtitle-with-icon>
        <f7-icon size="14px" material="home"/>
        Главная страница
      </template>
    </appHeader>
    <!-- Toolbar-->
    <f7-toolbar bottom>
      <f7-link>Left Link</f7-link>
      <f7-link>Right Link</f7-link>
    </f7-toolbar>

    <f7-block strong-ios outline-ios class="text-align-center">
      <f7-gauge
        type="circle"
        :value="gaugeValue"
        :size="250"
        border-color="#2196f3"
        :border-width="10"
        :value-text="`${gaugeValue * 100}%`"
        :value-font-size="41"
        value-text-color="#2196f3"
        label-text="amount of something"
      />
      <f7-segmented tag="p" raised>
        <f7-button :active="gaugeValue === 0" @click="() => (gaugeValue = 0)">0%</f7-button>
        <f7-button :active="gaugeValue === 0.25" @click="() => (gaugeValue = 0.25)">25%</f7-button>
        <f7-button :active="gaugeValue === 0.5" @click="() => (gaugeValue = 0.5)">50%</f7-button>
        <f7-button :active="gaugeValue === 0.75" @click="() => (gaugeValue = 0.75)">75%</f7-button>
        <f7-button :active="gaugeValue === 1" @click="() => (gaugeValue = 1)">100%</f7-button>
      </f7-segmented>
    </f7-block>

    <dragTable></dragTable>
    <!-- Page content-->
    <f7-block>
      <p>Here is your blank Framework7 app. Let's see what we have here.</p>
    </f7-block>
    <f7-block-title>Navigation</f7-block-title>
    <f7-list strong inset dividersIos>
      <f7-list-item link="/about/" title="About"></f7-list-item>
      <f7-list-item link="/form/" title="Form"></f7-list-item>
    </f7-list>

    <f7-block-title>Modals</f7-block-title>
    <f7-block class="grid grid-cols-2 grid-gap">
      <f7-button fill popup-open="#my-popup">Popup</f7-button>
      <f7-button fill login-screen-open="#my-login-screen">Login Screen</f7-button>
    </f7-block>

    <f7-block-title>Panels</f7-block-title>
    <f7-block class="grid grid-cols-2 grid-gap">
      <f7-button fill panel-open="left">Left Panel</f7-button>
      <f7-button fill panel-open="right">Right Panel</f7-button>
    </f7-block>

    <f7-list strong inset dividersIos>
      <f7-list-item
        title="Dynamic (Component) Route"
        link="/dynamic-route/blog/45/post/125/?foo=bar#about"
      ></f7-list-item>
      <f7-list-item
        title="Default Route (404)"
        link="/load-something-that-doesnt-exist/"
      ></f7-list-item>
      <f7-list-item
        title="Request Data & Load"
        link="/request-and-load/user/123456/"
      ></f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script setup>
import appHeader from '../components/app/appHeader.vue';
import dragTable from '../components/app/dragTable.vue';

import {ref} from 'vue';

const gaugeValue = ref(0.5);
</script>