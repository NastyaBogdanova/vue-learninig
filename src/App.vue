<script setup lang="ts">
import TasksDesk from './components/TasksDesk.vue'
</script>

<template>
  <div class="main">
    <TasksDesk />
  </div>
  
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  margin: 25px;
}
</style>
