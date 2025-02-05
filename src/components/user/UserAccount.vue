<template>
  <v-sheet width="300">
    <user-account-form :inputs="inputsConfig" />
  </v-sheet>
</template>
<script setup>
import { computed, onMounted, reactive, ref } from "vue";
import useUserModule from "@/store/userModule";
import userAccountForm from "@/components/user/UserAccountForm.vue";

const { loadAccountInfo, getAccount } = useUserModule();

const inputsConfig = [
  //почему getAccount пустой
  {
    label: "First name",
    value: getAccount.name,
    rules: [
      (v) => v?.length >= 3 || "First name must be at least 3 characters.",
    ],
  },
  {
    label: "Email",
    value: getAccount.email,
    required: true,
    rules: [
      (v) => !!v || "E-mail is required",
      (v) =>
        /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v,
        ) || "E-mail must be valid",
    ],
  },
  {
    type: "password",
    label: "Password",
    value: getAccount.password,
    required: true,
    rules: [
      (v) => !!v || "Password is required",
      (v) =>
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) ||
        "Password must contain at least one lowercase letter, one number, a special character, and one uppercase letter",
    ],
  },
  {
    type: "phone",
    label: "Phone Number",
    value: getAccount.phone,
    rules: [
      (v) => !!v || "Phone number is required",
      (v) => /^\d{10}$/.test(v) || "Phone number must be 10 digits",
    ],
  },
];

console.log(inputsConfig);

onMounted(() => {
  loadAccountInfo();
});
</script>
