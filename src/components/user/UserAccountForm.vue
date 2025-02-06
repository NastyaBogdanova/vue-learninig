<template>
  <v-form fast-fail @submit.prevent>
    <template v-for="(input, key) in inputs" :key="key">
      <v-text-field
        :is="input.type !== 'phone'"
        :v-model="input.value"
        :rules="input.rules"
        :label="input.label"
        :type="input.type"
        :required="input.required"
      />
      <v-number-input
        :is="input.type == 'phone'"
        :v-model="input.value"
        :rules="input.rules"
        :label="input.label"
        :type="input.type"
        :required="input.required"
      />
    </template>
    <v-btn class="mt-2" type="submit" block>Submit</v-btn>
  </v-form>
  <p>{{ formInputs }}</p>
</template>

<script setup lang="ts">
import { formInputConfig } from "@/components/user/userAccountFormConfig";
import { computed } from "vue";

interface IField {
  [key: string]: string | number;
}

interface Props {
  fields: IField;
}

const props = defineProps<Props>();

const formInputs = computed(() => {
  formInputConfig.map((field) => {
    const valueField: any = {};
    valueField.value = props.fields[field.type];
    const fieldWithValue = Object.assign(field, valueField);
    debugger;
    return fieldWithValue;
  });
});
</script>
