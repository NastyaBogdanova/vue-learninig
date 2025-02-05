<template>
  <v-form fast-fail @submit.prevent>
    <div v-for="(input, key) in inputs">
      <v-text-field
        :is="input.type !== 'phone'"
        :key="key"
        :v-model="input.value"
        :rules="input.rules"
        :label="input.label"
        :type="input.type"
        :required="input.required"
      />
      <v-number-input
        :is="input.type == 'phone'"
        :key="key"
        :v-model="input.value"
        :rules="input.rules"
        :label="input.label"
        :type="input.type"
        :required="input.required"
      />
    </div>
    <v-btn class="mt-2" type="submit" block>Submit</v-btn>
  </v-form>
</template>

<script setup lang="ts">
interface UserAccountInput {
  type?: string;
  label: string;
  rules: [];
  value: any;
  required?: boolean;
}

interface Props {
  inputs: Array<UserAccountInput>;
}

const props = defineProps<Props>();
</script>
