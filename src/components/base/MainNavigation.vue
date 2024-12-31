<template>
  <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      permanent
  >
    <v-list class="text-center">
      <v-list-item
        v-if="getUser.id"
        subtitle="Logged in"
        :prepend-avatar="getUser.imgUrl"
        :title="getUser.name"
        @click="rail = false"
      >
        <template v-slot:append>
          <v-btn
            icon="mdi-chevron-left"
            variant="text"
            @click.stop="rail = !rail"
          ></v-btn>
        </template>
      </v-list-item>
      <v-btn
        v-else
        icon="mdi-login"
        variant="text"
        @click.stop="loginUser"
        title="Login"
      ></v-btn>
    </v-list>

    <v-divider></v-divider>

    <v-list v-if="getUser.id" density="compact" nav>
      <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
      <v-list-item prepend-icon="mdi-list-box-outline" title="Dashboard" value="dashboard"></v-list-item>
      <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
      <v-list-item v-if="getUser.type === UserTypes.ADMIN" prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
    </v-list>
    <template
        v-if="isOpened"
        v-slot:append
    >
      <div class="pa-2">
        <v-btn
          @click="logout"
          block
          variant="outlined"
          prepend-icon="mdi-logout"
        >
          Logout
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import useUserModule from '@/store/userModule.ts';
import { computed, ref } from 'vue';
import { UserTypes } from '@/enums/user.ts';

const { getUser, loginUser, logoutUser } = useUserModule();
const drawer = ref(true);
const rail = ref(true);

const isOpened = computed(() => getUser.value.id && !rail.value);

const logout = () => {
  rail.value = true;
  logoutUser();
};

</script>

<style scoped lang="scss">
.sidebar {
  &__menu-btn {
    cursor: pointer;
  }
}
</style>