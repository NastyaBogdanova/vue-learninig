<template>
  <TaskBug v-if="task.typeName === 'BUG'" :task="task"/>
  <TaskStory v-else :task="task"/>
</template>

<script setup lang="ts">
import { Task } from '@/types/Task';
import TaskBug from '@/components/tasks/TaskBug.vue';
import TaskStory from '@/components/tasks/TaskStory.vue';

interface Props {
  task: Task;
}

defineProps<Props>();

</script>

<style scoped>
.card {
  border: 1px solid black;
  border-radius: 20px;
  padding: 20px;
  height: 100%;
  box-sizing: border-box;
}

.cardInfo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  margin: 20px 0;
}

.row {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.cardSubtitle {
  margin-right: 5px;
}
</style>