<script setup lang="ts">
import { ITopic } from '../types';
import { defineCategoryColor } from '../utils/categoryColorUtil';

defineProps<{
  topic: ITopic;
}>();

</script>

<template>
  <div>
    <div class="h-auto p-5 flex items-center gap-2">
      <h2>{{ topic.user.name }}</h2>
      <div>
        <h2 class="text-xl text-primary">{{ topic.title }}</h2>
        <button
          v-for="category in topic.categories"
          :key="category.id"
          :class="defineCategoryColor(category)"
          class="p-[0.225rem] ml-2"
        >
          {{ category.name }}
        </button>
      </div>
    </div>
    <div class="h-[1px] bg-primary_high"></div>
  </div>
</template>
