<template>
    <div>
        <div v-if="isLoading" class="d-flex justify-content-center mt-3">
            <div class="spinner-border spinner-border-lg" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <div id="Main" class="container d-flex flex-wrap mt-3">
        <CardVideo v-for="video in cardsList" :key="video.src.small" 
            :urlVideo="video.url"
            :autor="video.photographer"
        ></CardVideo>
    </div>
    </div>
</template>

<script>
import CardVideo from '../components/CardVideo.vue'
import client from '../services/pexels'

export default {
    name: 'MainVideo',
    components: {
        CardVideo
    },
     data() {
        return {
            cardsList: [],
            id: this.$route.params.id, 
            isLoading: true
        }
    },
     async created() {
        await client.videos.popular({ per_page: 1 }).then(videos => {
            this.cardsList = videos.videos
            console.log(this.cardsList)
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

}
</script>
