<script>
import { useI18n } from 'vue-i18n'
export default {
  name: "toolbar-hign",
  setup() {
    const { locale } = useI18n()
    return { locale }
  },
  methods: {
    changeLanguage(language) {
      this.locale.value = language;
    }
  },
  data() {
    return {
      logoSrc: 'https://hign.org/sites/default/files/2022-01/HIGN-logo-1200.png',
    };
  },
}
</script>

<template>
  <div class="flex align-items-center gap-2">
    <pv-toolbar class="border">
      <template #start>
        <img :src="logoSrc" width="80px" height="auto">
      </template>
      <template #center>
        <div class="title">
          <h1>Hartford Institute for Geriatric Nursing</h1>
        </div>
      </template>
      <template #end>
        <div class="der">
          <router-link  :to="{name:'home'}" aria-label="Redirect to Home">
            <pv-button class="button-margin"><i class="pi pi-home" style="margin-right: 10px;"></i>Home </pv-button>
          </router-link>
          <router-link  :to="{name:'exPerOver'}" aria-label="Redirect to Examiner Performance Overview">
            <pv-button class="button-margin"><i class="pi pi-id-card" style="margin-right: 10px;"></i>E. P. O. </pv-button>
          </router-link>
            <pv-button class="button-margin" @click ="changeLanguage('en')">EN</pv-button>
            <pv-button class="button-margin" @click ="changeLanguage('es')">ES</pv-button>
        </div>
      </template>
    </pv-toolbar>
  </div>
</template>

<style scoped>
.flex{
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.border{
  border: 1px solid #214729;
}
button{
  color: white;
  background-color: #214729;
  font-size: 1vw;
}
.button-margin{
  margin-right: 10px;
}
.title h1 {
  font-size: 2vw;
}

@media (max-width: 600px) {
  .flex {
    flex-direction: column;
  }
  .button-margin{
    margin-right: 0;
    margin-bottom: 10px;
  }
  .title h1 {
    font-size: 4vw;
  }
  button{
    font-size: 3vw;
  }
}
</style>