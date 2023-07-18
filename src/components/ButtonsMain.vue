<template>
    <div id="ButtonsMain" class="btn-toolbar mt-5 mb-3 d-flex justify-content-center" role="toolbar" aria-label="Toolbar with button groups">
    <div class="btn-group me-2" role="group" aria-label="First group">
        <router-link type="button" to="/pagination/1" active-class="bg-dark text-white" class="btn btn-outline-secondary" exact>1</router-link>
        <router-link v-for="pagina in listaPagination" :key="pagina.pag" @click="altPagination(pagina.pag)" type="button" :to="pagina.destino" active-class="bg-dark text-white" class="btn btn-outline-secondary" exact>{{pagina.pag}}</router-link >
    </div>
    </div>
</template>

<script>

export default {
    name:'ButtonsMain',
    data() {
        return {
            pagination: '/pagination/',
            listaPagination: [{ pag: 2, destino: '/pagination/2'}, {pag: 3, destino: '/pagination/3'} ]
        }
    },
    created() {
        
    },
    props: [
    ],
    methods: {
        altPagination(index) {
            console.log("index: ", index)
            console.log("last: ",this.listaPagination[this.listaPagination.length - 1].pag)
            if(index == this.listaPagination[this.listaPagination.length - 1].pag) {
                console.log('é igual')
                this.listaPagination.push({pag: index + 1, destino:`/pagination/${index + 1}`})
            } else {
                if(index == this.listaPagination[this.listaPagination.length - 1].pag - 2 && index != 2) {
                    this.listaPagination.pop(this.listaPagination.length - 1)
                    this.listaPagination.pop(this.listaPagination.length - 2)
                }
            }
        }
    }
}
</script>

<style scoped>

</style>
