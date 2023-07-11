<template>
    <header class="container-fluid">
        <!--NAVBAR-->
        <div class="my-navbar bg-dark">
        <nav class="container-fluid navbar fixed-top navbar-dark bg-dark bg-opacity-75">
            <div class="container-fluid">
                <a class="navbar-brand fw-bold">CLICK</a>

                <form class="container p-2" style="width:500px;">
                    <div class="input-group">
                        <span class="input-group-text rounded-start-1" id="basic-addon1" style="cursor: pointer;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </span>

                        <input type="text" class="form-control rounded-end-1" placeholder="Fotos, Pessoas ou Grupos" aria-label="Username" aria-describedby="basic-addon1">
                    </div>
                </form>

                <form class="justify-content-start">
                    <button type="button" class="btn text-light">Login</button>
                    <button class="btn btn-lg btn-light text-dark" type="button">Cadastre-se</button>
                </form>
            </div>
        </nav>
        </div>

    </header>
</template>

<script>

export default {
        name: 'Header',
        data() {
            return {
                background: ''
            }
        },
        components: {
            
        }
}

</script>
<style scoped>


header {
    background-image: url('https://images.pexels.com/photos/675764/pexels-photo-675764.jpeg');
    background-size: cover;
    background-position: end;
    height: 400px;
}
.my-navbar {
    width: 100% !important;
    margin:0 !important;
    padding: 0 !important;
}


</style>

