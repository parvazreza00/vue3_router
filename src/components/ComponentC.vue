<script setup>
import { inject } from 'vue';
import course from '../data/course';

const coursePrice = inject('coursePrice');  
</script>

<template>
  <div class="ms-5">
    <p>Course Name: {{ course.name }}</p>
    <div class="ms-5">
      <input type="text" v-model="course.name" />
        <p>Course Price: {{ coursePrice }}</p>
    </div>
    
  </div>
</template>

<style scoped></style>
