<script setup lang="ts">
import FilterButton from "@/components/FilterButton.vue";
import { btns } from "@/data/buttons";


</script>

<template>
  <div class="flex flex-col">
    <div class="flex justify-between items-center">
      <div class="flex gap-2 items-center">
        <div class="button-container">
          <button class="button-style">Categories ></button>
        </div>
        <div v-for="btn in btns">
          <filter-button
            :pageName="btn.page_name"
            :path="btn.path"
            :btnName="btn.btnName"
          />
        </div>
      </div>
      <div class="button-container">
        <button to="" class="button-style">
          <span class="text-2xl font-bold">+</span> New Topic
        </button>
      </div>
    </div>
    <div class="pt-4 text-primary_high text-md">Online(45): Niknames</div>
  </div>
</template>
