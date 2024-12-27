<script setup>
import { ref, onMounted } from "vue";
import MovieCard from "./MovieCard.vue";
const movieList = ref([]);
onMounted(() => {
      fetch("http://localhost:3000/movies")
        .then((response) => response.json())
        .then((data) => {
          movieList.value = data; 
        })
        .catch((error) => {
          console.error("Error fetching movies:", error);
        });
    });

</script>

<template>
  <!-- Contact start -->
  <div class="row">
    <div class="col-md-12 p-3">
      <p class="display-5">Movie</p>
      <hr />
      <div>
        <div class="row">
          <div class="col-md-4" v-for="movie in movieList" :key="movie.id">
            <MovieCard :movie="movie" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- contact end -->
</template>

<style scoped></style>
