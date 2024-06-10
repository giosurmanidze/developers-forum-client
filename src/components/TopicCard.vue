<script setup lang="ts">
import { ITopic } from "@/types";
import { formatTime, defineCategoryColor } from "@/utils";

defineProps<{
  topic: ITopic;
  showUser: Boolean;
  showInfo: Boolean;
}>();
</script>

<template>
  <div>
    <div class="h-auto p-5 flex items-center gap-2 justify-between">
      <div>
        <h2 v-if="showUser">{{ topic.user.name }}</h2>
        <div>
          <h2 class="text-xl text-primary ml-2">{{ topic.title }}</h2>
          <button
            v-for="category in topic.categories"
            :key="category.id"
            :class="defineCategoryColor(category)"
            class="p-[0.225rem] ml-2 mt-2"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
      <div class="flex gap-12 text-primary_high" v-if="showInfo">
        <h4>{{ topic.replies_count }}</h4>
        <h4>{{ topic.views_count }}</h4>
        <h4>{{ formatTime(topic.created_at) }}</h4>
      </div>
      <div class="flex flex-col gap-2 items-end text-primary_high" v-else>
        <h4 class="text-2xl font-bold">{{ topic.replies_count }}</h4>
        <h4>{{ formatTime(topic.created_at) }}</h4>
      </div>
    </div>
    <div class="h-[1px] bg-primary_high"></div>
  </div>
</template>
