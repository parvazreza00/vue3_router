<script setup>
const props = defineProps(['movie']);


</script>

<template>

<div>
    <div class="card h-75" style="width: 18rem;">
        
        <img :src="movie.Poster" class="card-img-top" :alt="movie.title" />
        <div class="card-body">
            <h5 class="card-title">Name : {{ movie.title }}</h5>
            <p class="card-text">Publish Year: {{ movie.year }}</p>
        </div>
    </div>
</div>
    
</template>

<style scoped>

</style>