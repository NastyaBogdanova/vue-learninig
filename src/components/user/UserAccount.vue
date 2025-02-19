<template>
  <v-sheet width="300">
    <user-account-form v-if="getAccount.id" :fields="getAccount" />
  </v-sheet>
</template>
<script setup>
import { computed, onMounted, reactive, ref } from "vue";
import useUserModule from "@/store/userModule";
import userAccountForm from "@/components/user/UserAccountForm.vue";

const { loadAccountInfo, getAccount } = useUserModule();

onMounted(() => {
  loadAccountInfo();
});
</script>
