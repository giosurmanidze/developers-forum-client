<script setup lang="ts">
import { onMounted } from "vue";
import { useCategoriesStore } from "@/stores/categories/useCategoriesStore";
import CategoryCard from "@/components/CategoryCard.vue";
import { storeToRefs } from "pinia";
import { useTopicsStore } from "@/stores/topics/useTopicsStore";
import TopicCard from "@/components/TopicCard.vue";
import FilterButtons from "@/components/FilterButtons.vue";

const { getCategories } = useCategoriesStore();
const { getTopics } = useTopicsStore();
const store = storeToRefs(useCategoriesStore());
const storeTopics = storeToRefs(useTopicsStore());

onMounted(() => {
  getCategories();
  getTopics("15");
});

const leftBorderColors = [
  "#f1be32",
  "#6ECA6E",
  "#df710c",
  "#0a729d",
  "#9a4993",
  "#86d7ff",
];
</script>

<template>
  <div>
    <div>
      <filter-buttons />
      <div class="pt-8 text-primary_high text-md">Online(45): Niknames</div>
    </div>
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
