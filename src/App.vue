<template>
  <div class="main">
    <TasksDesk />
  </div>
</template>

<script setup lang="ts">
import TasksDesk from '@/components/TasksDesk.vue';
import { onMounted, ref } from 'vue';
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  margin: 25px;
}
</style>
