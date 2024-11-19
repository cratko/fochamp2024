<template>
    <div ref="vkidContainer"></div>
</template>
  
  <script>
  export default {
    name: 'VKIDLogin',
    mounted() {
      // Load the VKID SDK script
      const script = document.createElement('script');
      script.src = "https://unpkg.com/@vkid/sdk@<3.0.0/dist-sdk/umd/index.js";
      script.onload = this.initVKID; // Initialize VKID after the script loads
      document.body.appendChild(script);
    },
    methods: {
      initVKID() {
        if ('VKIDSDK' in window) {
          const VKID = window.VKIDSDK;
  
          VKID.Config.init({
            app: 52724609,
            redirectUrl: 'https://service.uapp.space',
            responseMode: VKID.ConfigResponseMode.Callback,
            source: VKID.ConfigSource.LOWCODE,
          });
  
          const oAuth = new VKID.OAuthList();
  
          oAuth.render({
            container: this.$refs.vkidContainer,
            scheme: 'dark',
            oauthList: [
              'vkid',
              'ok_ru',
              'mail_ru'
            ]
          })
          .on(VKID.WidgetEvents.ERROR, this.vkidOnError)
          .on(VKID.OAuthListInternalEvents.LOGIN_SUCCESS, (payload) => {
            const code = payload.code;
            const deviceId = payload.device_id;
  
            VKID.Auth.exchangeCode(code, deviceId)
              .then(this.vkidOnSuccess)
              .catch(this.vkidOnError);
          });
        }
      },
      vkidOnSuccess(data) {
        // Handle successful authentication
        console.log('Login successful:', data);
      },
      vkidOnError(error) {
        // Handle errors
        console.error('Login error:', error);
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add any styles for your component here */
  </style>