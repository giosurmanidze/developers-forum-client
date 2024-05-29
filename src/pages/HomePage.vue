<script setup lang="ts">
import { onMounted } from "vue";
import { useCategoriesStore } from "../stores/categories/useCategoriesStore";
import CategoryCard from "../components/CategoryCard.vue";
import { storeToRefs } from "pinia";
import { useTopicsStore } from "../stores/topics/useTopicsStore";
import TopicCard from "../components/TopicCard.vue";

const { fetchCategories } = useCategoriesStore();
const { fetchTopics } = useTopicsStore();
const store = storeToRefs(useCategoriesStore());
const storeTopics = storeToRefs(useTopicsStore());

onMounted(() => {
  fetchCategories();
  fetchTopics();
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
      <div class="flex gap-2">
        <div class="button-container">
          <button class="button-style">Categories ></button>
        </div>
        <div class="button-container">
          <button class="button-style">Subforums</button>
        </div>
        <div class="button-container">
          <button class="button-style">Latest</button>
        </div>
        <div class="button-container">
          <button class="button-style">Top</button>
        </div>
        <div class="button-container">
          <button class="button-style">LeaderBoard</button>
        </div>
      </div>
      <div class="pt-8 text-primary_high text-md">Online(45): Niknames</div>
    </div>
    <div class="pt-8 flex justify-between gap-10">
      <div class="flex-1">
        <div class="pt-8 text-primary_high text-md">Subforum</div>
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
        <div class="pt-8 text-primary_high text-md">Latest topics</div>
        <div class="border-t-2 border-primary_high mt-2"></div>
        <div v-for="topic in storeTopics.topics.value" :key="topic.id">
          <topic-card :topic="topic" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.button-container {
  display: inline-block;
}

.button-style {
  padding: 0.5rem 1rem;
  border: 2px solid #dddee0;
  color: #dddee0;
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
