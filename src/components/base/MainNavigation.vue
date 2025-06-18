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
        title="Login"
        @click.stop="login"
      ></v-btn>
    </v-list>

    <v-divider></v-divider>

    <v-list
      v-if="getUser.id"
      density="compact"
      nav
    >
      <RouterLink
        v-for="menuItem in getUser.menu"
        :key="menuItem.value"
        :to="menuItem.url"
      >
        <v-list-item
          :prepend-icon="`mdi-${menuItem.icon}`"
          :title="menuItem.title"
          :value="menuItem.value"
        >
      </v-list-item>
      </RouterLink>
    </v-list>
    <template
        v-if="isOpened"
        v-slot:append
    >
      <div class="pa-2">
        <v-btn
          block
          variant="outlined"
          prepend-icon="mdi-logout"
          @click="logout"
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

const { getUser, loginUser, logoutUser } = useUserModule();
const drawer = ref(true);
const rail = ref(true);

const isOpened = computed(() => getUser.value.id && !rail.value);

const login = async () => {
  await loginUser();
  rail.value = false;
};
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