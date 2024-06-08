<script setup lang="ts">
import FilterButton from "./FilterButton.vue";
import { btns } from "@/data/buttons";
import { ref } from "vue";
import AddTopicModal from "./AddTopicModal.vue";
import CategoryInput from "./CategoryInput.vue";
import CrudInput from './CrudInput.vue'

const isModalOpened = ref(false);
const categories = ref([]);

const openModal = () => {
  isModalOpened.value = true;
};
const closeModal = () => {
  isModalOpened.value = false;
};

const submitHandler = () => {
  //here you do whatever
};
</script>

<template>
  <div class="flex flex-col">
    <div class="flex justify-between items-center">
      <div class="flex gap-2 items-center">
        <div class="button-container">
          <button class="button-style">Categories ></button>
        </div>
        <div v-for="btn in btns">
          <filter-button
            :pageName="btn.page_name"
            :path="btn.path"
            :btnName="btn.btnName"
          />
        </div>
      </div>
      <div class="button-container">
        <button class="button-style" @click="openModal">
          <span class="text-2xl font-bold">+</span> New Topic
        </button>
        <add-topic-modal
          :isOpen="isModalOpened"
          @modal-close="closeModal"
          @submit="submitHandler"
          headerText="Create a new topic"
          btnName="Create Topic"
        >
          <template #content
            ><div>
              <CrudInput
                name="title"
                rules="required"
                placeholder="topic title..."
              />
              <category-input :categories="categories" /></div
          ></template>
        </add-topic-modal>
      </div>
    </div>
    <div class="pt-4 text-primary_high text-md">Online(45): Niknames</div>
  </div>
</template>
