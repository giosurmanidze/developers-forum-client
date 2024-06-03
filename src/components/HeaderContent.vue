<script setup lang="ts">
import { useRoute, RouterLink } from "vue-router";

const route = useRoute();
const routePath = route.path;
</script>

<template>
  <div class="flex flex-col">
    <div class="flex justify-between items-center">
      <div class="flex gap-2">
        <div class="button-container">
          <router-link to="" class="button-style">Categories ></router-link>
        </div>
        <div class="button-container">
          <router-link
            :to="{ name: 'home' }"
            :class="{ active: routePath === '/' }"
            class="button-style"
          >
            Subforums
          </router-link>
        </div>
        <div class="button-container">
          <router-link
            :to="{ name: 'latest' }"
            :class="{ active: routePath === '/latest' }"
            class="button-style"
          >
            Latest
          </router-link>
        </div>
        <div class="button-container">
          <router-link
            to=""
            class="button-style"
            :class="{ active: routePath === '/top' }"
            >Top</router-link
          >
        </div>
        <div class="button-container">
          <router-link
            to=""
            class="button-style"
            :class="{ active: routePath === '/leader-board' }"
            >LeaderBoard</router-link
          >
        </div>
      </div>
      <div class="button-container">
        <button
          to=""
          class="button-style"
          :class="{ active: routePath === '/leader-board' }"
        >
          <span class="text-2xl font-bold">+</span> New Topic
        </button>
      </div>
    </div>
    <div class="pt-4 text-primary_high text-md">Online(45): Niknames</div>
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
  border: 2px solid #dddee0;
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
