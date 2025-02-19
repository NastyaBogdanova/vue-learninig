<template>
  <v-sheet width="300">
    <userAccountForm v-if="getAccount.id" :fields="getAccount" />
  </v-sheet>
</template>
<script setup>
import { onMounted } from 'vue';
import useUserModule from '@/store/userModule';
import userAccountForm from '@/components/user/UserAccountForm.vue';

const { loadAccountInfo, getAccount } = useUserModule();

onMounted(() => {
  loadAccountInfo();
});
</script>
