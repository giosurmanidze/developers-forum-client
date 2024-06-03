<script setup lang="ts">
import { ICategory } from '@/types';


defineProps<{
  category: ICategory;
  borderColor?: string
}>();

</script>

<template>
  <div>
    <div :style="{ borderColor: borderColor }" class="h-auto border-l-8 p-5">
      <h2 class="text-2xl text-primary font-bold">{{ category.name }}</h2>
      <p class="text-primary_high">{{ category.description }}</p>
    </div>
    <div class="h-[1px] bg-primary_high"></div>
  </div>
</template>
