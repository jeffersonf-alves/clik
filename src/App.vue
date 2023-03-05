<template>
  <div>
      <Header></Header>

      <router-view></router-view>

      <!-- <Main></Main> -->
  </div>
</template>

<script>
import Header from './Header/Header.vue'
// import Main from './Main/Main.vue'

export default {
  name: 'App',
  data() {
    return {
      titulo: 'Olaa'
    }
  },
  components: {
      Header,
     //  Main
      
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}


</style>
