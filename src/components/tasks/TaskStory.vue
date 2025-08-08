<template>
  <div class="story-border">
    <TaskCard :task='task'/>
  </div>
</template>

<script setup lang="ts">
import { ITask } from '@/types/task';
import TaskCard from './TaskCard.vue';

interface Props {
  task: ITask;
}

defineProps<Props>();

</script>

<style scoped>
.story-border {
  border: 1px solid rgb(87, 84, 84);
  border-radius: 20px;
}
.story-border:hover {
  border: 1px solid rgb(255, 255, 255);
  border-radius: 20px;
}
</style>