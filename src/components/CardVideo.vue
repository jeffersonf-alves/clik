<template>
    <div id="Card" >
        <div class="card m-2" style="width: 18rem;">
        <div class="embed-responsive embed-responsive-21by9">
            <iframe class="embed-responsive-item" :src="urlVideo"></iframe>
        </div>
        <div class="card-body">
            <p class="card-text">{{autor}}</p>
        </div>
        </div>
     </div>
</template>

<script>
export default ({
    name: 'CardVideo',
    props: {
        urlVideo: String,
        autor: String
    }

})
</script>

<style scoped>
#Card {
    cursor: pointer;
}

</style>
