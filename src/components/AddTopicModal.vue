<script setup lang="ts">
import { defineProps, defineEmits, ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const props = defineProps<{
  isOpen: boolean;
  headerText: string;
  btnName: string;
}>();

const emit = defineEmits(["modal-close"]);

const target = ref<HTMLDivElement | null>(null);
onClickOutside(target, () => emit("modal-close"));
</script>

<template>
  <div
    v-if="props.isOpen"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div
      class="flex flex-col items-center bg-secondary p-8 rounded-lg shadow-md h-2/4 w-1/3"
      ref="target"
    >
      <div class="mb-4 text-2xl">
        <h1>{{ headerText }}</h1>
      </div>
      <div>
        <slot name="content"></slot>
      </div>
      <div class="mt-4">
        <button
          @click.stop="emit('modal-close')"
          class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          {{ btnName }}
        </button>
      </div>
    </div>
  </div>
</template>
