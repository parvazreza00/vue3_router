<script setup></script>

<template>
  <div class="">
    <router-link :to="{name:'home'}">Home</router-link>
  </div>
  <div>
    <router-link :to="{name:'about'}">About</router-link>
  </div>
  <div>
    <router-link :to="{name:'contact'}">Contact</router-link>
  </div>
  <div>
    <router-link :to="{name:'blog'}">Blog</router-link>
  </div>
  <div>
    <router-link :to="{name:'movie'}">Movie</router-link>
  </div>
</template>

<style scoped></style>
