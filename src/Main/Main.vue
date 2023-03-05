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
import client from '../services/pexels'

export default {
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
        })
    }
} 
</script>


<style scoped>


</style>