<template>
  <v-sheet width="300">
    <user-account-form :inputs="inputsConfig" />
  </v-sheet>
</template>
<script setup>
import { onMounted, ref } from "vue";
import useUserModule from "@/store/userModule";
import { inputsConfig } from "@/components/user/userAccountFormConfig";
import userAccountForm from "@/components/user/UserAccountForm.vue";

const { loadAccountInfo, getAccount } = useUserModule();

onMounted(() => {
  loadAccountInfo();
});
</script>
