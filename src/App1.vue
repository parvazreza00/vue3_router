<script setup>
import { ref, reactive, provide } from "vue";
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <section>
    <div class="row">
      <div class="col-md-12 bg-black text-white p-3">
        <p>Wonder Full Blog</p>
      </div>
    </div>
    <div class="row">
      <div
        class="flex-column col-md-2 col-sm-2 bg-black text-white p-3"
        style="height: 90vh"
      >
        <Sidebar />
      </div>
     
        <div class="col-md-10 col-sm-10 p-3">
          <!-- home start -->
          <router-view></router-view>
          <!-- home end -->
          <router-view name="right"></router-view>
        </div>
        
          
        
      
    </div>
  </section>
</template>

<style scoped></style>
