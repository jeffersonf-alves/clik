<template>
  <div>
      <Header></Header>
      
         <div class="mt-3 d-inline-block d-flex justify-content-center align-items-center">
            <div class="btn-group" role="group" aria-label="Basic example">
                <router-link to="/"  class="btn btn-outline-secondary" active-class="active">Imagens</router-link>
                <router-link to="/videos" class="btn btn-outline-secondary" type="button" active-class="active">Videos</router-link>
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
.btn2 {
  margin: 4px;
  padding: 1px;
  border: 2px solid black;
}

</style>
