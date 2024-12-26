<script setup>
import RightSideBar from './RightSideBar.vue'

</script>

<template>
      <!-- Blog start -->
        <div class="row">
          <div class="col-md-10 p-3">
            <p class="display-5">Blog</p>
            <hr />
            <div>
              <h2>Blog ipsum dolor sit amet.</h2>
              <p>
                Blog ipsum dolor sit amet consectetur adipisicing elit. Minima
                ipsa voluptatibus eos, animi quia qui aperiam sed. Possimus et
                voluptate, voluptas id a cum hic in explicabo quidem eum,
                dolorum maxime fugiat repudiandae! Maiores eligendi
                exercitationem quo saepe tenetur.
              </p>
            </div>
            <hr />
            <div class="d-flex justify-content-around">
              <button class="btn btn-primary">Primary</button>
              <button class="btn btn-secondary">Secondary</button>
              <button class="btn btn-success">Success</button>
            </div>
          </div>
          <div class="col-md-2">
            <RightSideBar/>
          </div>
          
        </div>
        <!-- Blog end -->
</template>

<style scoped>

</style>