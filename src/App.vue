<template>
    <v-card>
      <v-layout>
        <MainNavigation />
        <v-main class="main">
          <v-container fluid>
            <BaseLoader v-if="!getTasksList.length" />
            <TasksDesk v-else />
          </v-container>
        </v-main>
      </v-layout>
    </v-card>
</template>

<script setup lang="ts">
import TasksDesk from '@/components/tasks/TasksDesk.vue';
import BaseLoader from '@/components/base/BaseLoader.vue';
import { onMounted } from 'vue';
import useTaskModule from '@/store/taskModule.ts';
import MainNavigation from '@/components/base/MainNavigation.vue';

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
