<template>
  <div>
      <Header></Header>

      <router-view></router-view>

      <ButtonsMainVue></ButtonsMainVue>
      <!-- <Main></Main> -->
  </div>
</template>

<script>
import ButtonsMainVue from './components/ButtonsMain.vue'
import Header from './Header/Header.vue'
// import Main from './Main/Main.vue'

export default {
  name: 'App',
  data() {
    return {
      titulo: ''
    }
  },
  components: {
      Header,
      ButtonsMainVue
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}


</style>
