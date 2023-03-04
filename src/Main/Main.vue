<template>
    <div id="Main" class="container d-flex flex-wrap mt-5">
        <Card v-for="photo in cardsList" :key="photo.src.original" 
            :urlImage="photo.src.original"
            :autor="photo.photographer"
        ></Card>
    </div>
</template>

<script>
import Card from '../components/Card.vue'
// import api from '../services/api'
import client from '../services/pexels'

export default {
    // api.get('/curated?page=3&per_page=40') 
    name:'#Main',
    components: {
        Card
    },
    data() {
        return {
            cardsList: []
        }
    },
     async beforeCreate() {

        await client.photos.curated({page: 3, per_page: 12,  locale:'pt-BR', size:'large'}).then(photos => {
            this.cardsList = photos.photos
            console.log(this.cardsList)
        })
    }
} 
</script>


<style scoped>


</style>