<template>
    <div>
        <div v-if="isLoading" class="d-flex justify-content-center mt-5">
            <div class="spinner-border spinner-border-lg" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <div id="Main" class="container d-flex flex-wrap mt-5">
        <Card v-for="photo in cardsList" :key="photo.src.small" 
            :urlImage="photo.src.original"
            :autor="photo.photographer"
        ></Card>
    </div>
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
            cardsList: [],
            id: this.$route.params.id, 
            isLoading: true
        }
    },
     async beforeCreate() {
        await client.photos.curated({page: 1, per_page: 8,  locale:'pt-BR', size:'small'}).then(photos => {
            this.cardsList = photos.photos
            this.isLoading = false

        })
    },
    watch: {
        $route(to) {
            this.id = to.params.id
            client.photos.curated({page: this.id, per_page: 8,  locale:'pt-BR', size:'small'}).then(photos => {
                this.cardsList = photos.photos
                this.isLoading = false
                window.scrollTo(0, 0);
            })
        }
    },
    methods: {
            // function voltaTopo() {
            //     window.scrollTo(0, 0);
            // };
    }
} 
</script>


<style scoped>


</style>