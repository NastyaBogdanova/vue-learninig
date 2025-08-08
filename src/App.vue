<template>
    <v-card>
      <v-layout>
        <MainNavigation />
        <v-main class="main">
          <v-container fluid>
            <BaseLoader v-if="!getTasksList.length" />
            <div v-else>
              <v-divider>
                <h1>{{ route.name }}</h1>
              </v-divider>
              <RouterView class="mt-10" />
            </div>
          </v-container>
        </v-main>
      </v-layout>
    </v-card>
</template>

<script setup lang="ts">
import BaseLoader from '@/components/base/BaseLoader.vue';
import { onMounted } from 'vue';
import useTaskModule from '@/store/taskModule.ts';
import MainNavigation from '@/components/base/MainNavigation.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const { loadTasksList, getTasksList } = useTaskModule();

onMounted(() => {
  loadTasksList();
});

</script>

<style scoped>
.main {
  height: 100vh;
}
</style>
