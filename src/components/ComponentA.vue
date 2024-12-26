<script setup>
import { inject } from 'vue'
import ComponentB from './ComponentB.vue'
import course from '../data/course'

</script>

<template>
    <div class="ms-5">
        <p>Course Name: {{ course.name }}</p>
        <ComponentB  />
    </div>
</template>

<style scoped>

</style>