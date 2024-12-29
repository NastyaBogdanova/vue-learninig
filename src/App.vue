<template>
  <div class="main">
    <BaseLoader v-if="!getTasksList.length" />
    <TasksDesk v-else />
  </div>
</template>

<script setup lang="ts">
import TasksDesk from '@/components/tasks/TasksDesk.vue';
import BaseLoader from '@/components/base/BaseLoader.vue';
import { onMounted } from 'vue';
import useTaskModule from '@/store/taskModule.ts';

const { loadTasksList, getTasksList } = useTaskModule();

onMounted(() => {
  loadTasksList();
});

</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  margin: 25px;
}
</style>
