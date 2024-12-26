<script setup>
import {inject, provide} from 'vue'
import ComponentC from './ComponentC.vue'
import course from '../data/course'
provide('coursePrice', 500)
</script>

<template>
      <div class="ms-5">
        <p>Course Name: {{ course.name }}</p>
        <ComponentC  />
        
    </div>
</template>

<style scoped>

</style>