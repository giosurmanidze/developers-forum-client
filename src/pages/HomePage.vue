<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useTopicsStore, useCategoriesStore } from "@/stores";
import { HeaderContent, CategoryCard, TopicCard } from "@/components";
import { leftBorderColors } from "@/data/borderColors";

const { getCategories } = useCategoriesStore();
const { getTopics } = useTopicsStore();
const store = storeToRefs(useCategoriesStore());
const storeTopics = storeToRefs(useTopicsStore());

onMounted(() => {
  getCategories();
  getTopics("10");
});
</script>

<template>
  <div>
    <header-content />
    <div class="pt-8 flex justify-between gap-10">
      <div class="flex-1">
        <div class="pt-8 px-2 text-primary_high text-md">Subforum</div>
        <div class="border-t-2 border-primary_high mt-2"></div>
        <div
          v-for="(category, index) in store.categories.value"
          :key="category.id"
        >
          <category-card
            :category="category"
            :borderColor="leftBorderColors[index]"
          />
        </div>
      </div>
      <div class="flex-1">
        <div class="pt-8 px-2 text-primary_high text-md">Latest topics</div>
        <div class="border-t-2 border-primary_high mt-2"></div>
        <div v-for="topic in storeTopics.topics.value" :key="topic.id">
          <topic-card :topic="topic" :showUser="true" :showInfo="false" />
        </div>
      </div>
    </div>
  </div>
</template>
