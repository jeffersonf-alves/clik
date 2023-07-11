<template>
    <div id="Card" >
        <div class="card m-2" style="width: 18rem;">
        <img v-lazy="urlImage" class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text">{{autor}}</p>
        </div>
        </div>
     </div>
</template>

<script>
export default ({
    name: 'Card',
    props: {
        urlImage: String,
        autor: String
    }

})
</script>

<style scoped>
#Card {
    cursor: pointer;
}

</style>
