<script setup lang="ts">
import { computed } from "vue";
import { ICategory, ITopic } from "../types";

defineProps<{
  topic: ITopic;
}>();

const defineCategoryColor = computed(() => {
  return (category: ICategory) => {
    return category.name === "Python"
      ? "bg-[#6ECA6E]"
      : category.name === "Html-Css"
        ? "bg-[#df710c]"
        : category.name === "Backend Development"
          ? "bg-[#0a729d]"
          : category.name === "Code Feedback"
            ? "bg-[#86d7ff]"
            : category.name === "C#"
              ? "bg-[#9a4993]"
              : category.name === "Backend Development"
                ? "bg-[#0a729d]"
                : "";
  };
});
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
