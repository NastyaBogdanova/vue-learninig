<template>
  <v-sheet width="300">
    <v-form fast-fail @submit.prevent>
      <v-text-field
        v-model="getAccount.name"
        :rules="nameRules"
        label="First name"
      />
      <v-text-field
        v-model="getAccount.email"
        :rules="emailRules"
        label="Email"
        required
      />
      <v-text-field
        v-model="getAccount.password"
        type="password"
        :rules="passwordRules"
        label="Password"
        required
      />
      <v-btn
        class="mt-2"
        type="submit"
        block
      >Submit</v-btn>
    </v-form>
  </v-sheet>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import useUserModule from '@/store/userModule';

const { loadAccountInfo, getAccount } = useUserModule();
const nameRules = ref([
  (value) => {
    if (value?.length >= 3) return true
    return 'First name must be at least 3 characters.'
  },
]);
const emailRules = ref([
  v => !!v || 'E-mail is required',
  v => /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail must be valid',
]);
const passwordRules = ref([
  v => !!v || 'Password is required',
  v => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) || 'Password must contain at least lowercase letter, one number, a special character and one uppercase letter',
]);

onMounted(() => {
  loadAccountInfo();
});
</script>