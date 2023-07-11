<template>
  <div>
      <Header></Header>
      
         <div class="mt-3 d-inline-block d-flex justify-content-center align-items-center">
            <div class="btn-group" role="group" aria-label="Basic example">
                <router-link to="/" type="button" class="btn btn-outline-secondary" router-link-active="active">Imagens</router-link>
                <router-link to="/videos" type="button" class="btn btn-outline-secondary">Videos</router-link>
            </div>
        </div> 

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

.active {
  background-color: black !important;
}
</style>
