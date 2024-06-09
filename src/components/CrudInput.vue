<script setup lang="ts">
import { Field, ErrorMessage } from "vee-validate";

defineProps({
  name: { type: String, required: true },
  rules: { type: String, required: true },
  placeholder: { type: String, required: true },
  classes: { type: String, required: false },
  inputType: { type: String, required: false, default: "text" },
});
</script>

<template>
  <Field
    :name="name"
    :rules="rules"
    v-slot="{ field }"
    class="flex"
    :validate-on-input="true"
  >
    <div class="flex">
      <template v-if="inputType === 'text'">
        <input
          v-bind="field"
          :placeholder="placeholder"
          class="mt-4 mb-1 py-2 px-2 border-gray-600 border rounded focus:outline-none w-full bg-transparent text-white placeholder-white"
        />
      </template>
      <template v-else-if="inputType === 'textarea'">
        <textarea
          v-bind="field"
          :placeholder="placeholder"
          class="mt-4 mb-1 py-3 px-3 border-gray-600 border rounded focus:outline-none w-full bg-transparent text-white placeholder-white"
          :class="classes"
          rows="5"
        ></textarea>
      </template>
    </div>
  </Field>
  <ErrorMessage class="text-red-300 mb-2" name="title" />
</template>
