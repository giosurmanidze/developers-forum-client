<script setup lang="ts">
import { useRoute, RouterLink } from "vue-router";

defineProps<{
  pageName: string;
  path: string;
  btnName: string;
}>();

const route = useRoute();
const routePath = route.path;
</script>

<template>
  <div class="button-container">
    <router-link
      :to="{ name: pageName }"
      :class="{ active: routePath === path }"
      class="button-style"
    >
      {{ btnName }}
    </router-link>
  </div>
</template>

<style>
.active {
  background-color: #dddee0;
  color: #424255;
}

.button-container {
  display: inline-block;
  color: #dddee0;
}

.button-style {
  padding: 0.5rem 1rem;
  border: 3px solid #dddee0;
  font-size: 1.125rem;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.button-style:hover {
  background-color: #dddee0;
  color: #424255;
}
</style>
