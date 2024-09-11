<template>
    <div class="ImageCarousels">
        <div class="container-md">
                    
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../../assets/img/ObjectPhoto/01.png" class="bd-placeholder-img bd-placeholder-img-lg d-block w-100 ResImg"
                         role="img" aria-label="Placeholder: Third slide"
                        preserveAspectRatio="xMidYMid slice" focusable="false" alt="foto">
                    </div>
                    <div class="carousel-item">
                        <img src="../../assets/img/ObjectPhoto/02.png" class="bd-placeholder-img bd-placeholder-img-lg d-block w-100 ResImg"
                         role="img" aria-label="Placeholder: Third slide"
                        preserveAspectRatio="xMidYMid slice" focusable="false" alt="foto">
                    </div>
                    <div class="carousel-item">
                        <img src="../../assets/img/ObjectPhoto/03.png" class="bd-placeholder-img bd-placeholder-img-lg d-block w-100 ResImg"
                         role="img" aria-label="Placeholder: Third slide"
                        preserveAspectRatio="xMidYMid slice" focusable="false" alt="foto">
                    </div>
                    <div class="carousel-item">
                        <img src="../../assets/img/ObjectPhoto/04.png" class="bd-placeholder-img bd-placeholder-img-lg d-block w-100 ResImg"
                         role="img" aria-label="Placeholder: Third slide"
                        preserveAspectRatio="xMidYMid slice" focusable="false" alt="foto">
                    </div>
                    <div class="carousel-item">
                        <img src="../../assets/img/ObjectPhoto/05.png" class="bd-placeholder-img bd-placeholder-img-lg d-block w-100 ResImg"
                         role="img" aria-label="Placeholder: Third slide"
                        preserveAspectRatio="xMidYMid slice" focusable="false" alt="foto">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style >
    @media only screen and (min-width: 1199px) {
        .ImageCarousels .ResImg {
            height: 38.125em;
        }
    }

</style>