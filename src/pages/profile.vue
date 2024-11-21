<template>
  <f7-page>
    <appHeader>
      <template #nav-left-block>
        <f7-link back icon-md="material:arrow_back_ios" color="blue"></f7-link>
      </template>
      <template #subtitle-with-icon>
        <f7-icon size="14px" material="account_circle"/>
        Профиль
      </template>
    </appHeader>
    <f7-block strong>
      <div class="profile-page">
        <div class="profile-page-header">
          <div class="profile-page-avatar">
            <img src="../assets/user.png" alt="Profile Picture" class=""/>
          </div>
          <div class="profile-page-name">      
            <f7-chip text="John Doe" media-bg-color="red">
            <template #media>
              <f7-icon ios="f7:person" md="material:person" />
            </template>
          </f7-chip></div>
          <div class="profile-page-title"><f7-chip>@johndoe</f7-chip></div>
        </div>
      </div>
    </f7-block>
    <f7-block>
      <p class="profile-page-bio">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </f7-block>

    <f7-block strong large-inset>
      <f7-block-title >Персональные данные</f7-block-title>
      <f7-list>
        <f7-list-item
          title="Email"
          after="john.doe@example.com"
          link="#"
        >
          <template #media>
            <f7-icon material="email"/>
          </template>
        </f7-list-item>
        <f7-list-item
          title="Номер телефона"
          after="(123) 456-7890"
          link="#"
        >
        <template #media>
          <f7-icon material="phone"/>
        </template>
        </f7-list-item>
        <f7-list-item
          title="Роль"
          after="New York, USA"
          link="#"
        >
          <template #media>
            <f7-icon material="group"/>
          </template>
        </f7-list-item>
      </f7-list>
    </f7-block>

    <f7-block>
      <div class="row">
        <div class="col">
          <f7-button tonal @click="editProfile">Edit Profile</f7-button>
        </div>
        <div class="col">
          <f7-button @click="accountSettings">Account Settings</f7-button>
        </div>
      </div>
    </f7-block>
  </f7-page>
</template>

<script>
import appHeader from '../components/app/appHeader.vue';

export default {
  components: {
    appHeader
  },
  methods: {
    editProfile() {
      // Handle edit profile action
    },
    accountSettings() {
      // Handle account settings action
    }
  }
};
</script>

<style scoped>
.profile-page-avatar {
display: flex;
justify-content: center;
align-items: center;
}

.profile-page-avatar img {
  max-width: 200px;
}

.profile-page-header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
}

</style>