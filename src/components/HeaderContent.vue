<script setup lang="ts">
import FilterButton from "./FilterButton.vue";
import { btns } from "@/data/buttons";
import { ref } from "vue";
import AddTopicModal from "./AddTopicModal.vue";
import CategoryInput from "./CategoryInput.vue";
import CrudInput from "./CrudInput.vue";
import { useCreateTopic } from "@/services";
import { ICategory } from "@/types";

const isModalOpened = ref<Boolean>(false);
const categories = ref<ICategory[]>([]);

const { submit } = useCreateTopic(categories);

const openModal = () => {
  isModalOpened.value = true;
};
const closeModal = () => {
  isModalOpened.value = false;
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
          @submit-handler="submit"
          headerText="Create a new topic"
          btnName="Create Topic"
        >
          <template #content
            ><div>
              <crud-input
                name="title"
                rules="required"
                placeholder="topic title..."
              />
              <category-input :categories="categories" />
              <crud-input
                name="content"
                rules="required"
                placeholder="description..."
                inputType="textarea"
              /></div
          ></template>
        </add-topic-modal>
      </div>
    </div>
    <div class="pt-4 text-primary_high text-md">Online(45): Niknames</div>
  </div>
</template>
