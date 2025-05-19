<template>
  <div class="bug-border">
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
.bug-border {
  border: 1px solid rgb(133, 62, 62);
  border-radius: 20px;
}
.bug-border:hover {
  border: 1px solid rgb(216, 78, 78);
  border-radius: 20px;
}
</style>