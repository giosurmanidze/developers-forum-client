<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div>
    <h1>Navbar</h1>
    <div class="bg-main_body_bg h-screen flex justify-center">
      <div class="w-[60%] pt-14">
        <router-view />
      </div>
    </div>
    <h1>Footer</h1>
  </div>
</template>
