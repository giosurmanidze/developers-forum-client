<script setup lang="ts">
import { ITopic } from "@/types";
import { defineCategoryColor } from "@/utils/categoryColorUtils";
import { formatTime } from "@/utils/fotmatTimeUtils";

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
      <div class="flex gap-12 text-primary_high text-xl" v-if="showInfo">
        <h3>{{ topic.replies_count }}</h3>
        <h3>{{ topic.views_count }}</h3>
        <h3>23m</h3>
      </div>
      <div class="flex flex-col gap-2 items-end text-primary_high" v-else>
        <h3 class="text-2xl font-bold">{{ topic.replies_count }}</h3>
        <h3>{{ formatTime(topic.created_at) }}</h3>
      </div>
    </div>
    <div class="h-[1px] bg-primary_high"></div>
  </div>
</template>
