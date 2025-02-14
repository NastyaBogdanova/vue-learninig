<template>
  <v-form fast-fail @submit.prevent>
    <template v-for="(input, key) in formInputs" :key="key">
      <v-text-field
        v-model="input.value"
        :rules="input.rules"
        :label="input.label"
        :type="input.fieldType"
        :required="input.required"
      />
    </template>
    <v-btn class="mt-2" type="submit" block>Submit</v-btn>
  </v-form>
</template>

<script setup lang="ts">
import { formInputConfig } from "@/components/user/userAccountFormConfig";
import { reactive } from "vue";

interface IField {
  [key: string]: string;
}

interface Props {
  fields: IField;
}

const props = defineProps<Props>();

const formInputs = reactive(
  formInputConfig.map((field) => {
    return { ...field, value: props.fields[field.type] };
  }),
);
</script>
