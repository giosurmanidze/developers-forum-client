<script setup lang="ts">
import { ref, watchEffect, defineProps } from "vue";
import { storeToRefs } from "pinia";
import { useCategoriesStore } from "@/stores/categories/useCategoriesStore.ts";
import { defineCategoryColor } from "@/utils";
import { ICategory } from "@/types";

const store = storeToRefs(useCategoriesStore());

const props = defineProps<{
  categories: ICategory[];
}>();

const openDropdown = ref<Boolean>(false);
const modifiedCategories = ref<ICategory[]>([]);

const addCategory = (value: ICategory) => {
  if (!modifiedCategories.value.find((category) => category.id === value.id)) {
    modifiedCategories.value.push(value);
    openDropdown.value = false;
  }
};

const removeCategory = (value: ICategory) => {
  const index = modifiedCategories.value.findIndex(
    (category) => category.id === value.id
  );
  if (index !== -1) {
    modifiedCategories.value.splice(index, 1);
  }
};

watchEffect(() => {
  modifiedCategories.value = props.categories;
});
</script>

<template>
  <div class="relative mt-5">
    <div
      class="grid grid-cols-2 md:grid-cols-4 gap-2 border rounded mb-4 px-3 py-3 border-gray-600"
      @click.stop=""
      @click="openDropdown = !openDropdown"
    >
      <p v-if="!categories?.length" class="text-primary">choose categories</p>
      <div
        v-else
        v-for="category in categories"
        :key="category.id"
        :class="defineCategoryColor(category)"
        class="w-24 bg-genre_text rounded flex flex-col items-center space-x-1 py-1 px-2 text-sm text-secondary"
      >
        <span>{{ category.name }}</span>
        <p
          @click.stop=""
          @click="removeCategory(category)"
          class="cursor-pointer"
        >
          x
        </p>
      </div>
    </div>
    <div
      v-if="openDropdown"
      class="absolute w-full bg-black z-10 top-[100%] px-2 py-3"
      @click.stop=""
    >
      <div
        v-for="category in store.categories.value"
        :key="category.id"
        class="hover:bg-gray-500 w-full px-1 py-2"
        @click.once="addCategory(category)"
      >
        <span
          :class="defineCategoryColor(category)"
          class="text-secondary p-1"
          >{{ category.name }}</span
        >
        <p>{{ category.description }}</p>
      </div>
    </div>
  </div>
</template>
