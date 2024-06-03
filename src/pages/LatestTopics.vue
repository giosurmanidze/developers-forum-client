<script setup lang="ts">
import FilterButtons from "@/components/FilterButtons.vue";
import { useTopicsStore } from "@/stores/topics/useTopicsStore";
import { storeToRefs } from "pinia";
import TopicCard from "@/components/TopicCard.vue";
import { onMounted } from "vue";

const { getTopics } = useTopicsStore();
const store = storeToRefs(useTopicsStore());

onMounted(() => {
  getTopics("");
});
</script>

<template>
  <div>
    <div>
      <filter-buttons />
      <div class="pt-8 text-primary_high text-md">Online(45): Niknames</div>
    </div>
    <div class="pt-8">
      <div class="flex justify-between px-2">
        <div class="text-primary_high text-md">Topic</div>
        <div class="flex gap-4 text-primary_high text-md">
          <div>Replies</div>
          <div>Views</div>
          <div>Activity</div>
        </div>
      </div>
      <div class="border-t-2 border-primary_high mt-2"></div>
    </div>
    <div v-for="topic in store.topics.value" :key="topic.id">
      <topic-card :topic="topic" :showUser="false" :showInfo="true" />
    </div>
  </div>
</template>
