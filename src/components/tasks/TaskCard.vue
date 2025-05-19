<template>
    <div class="card">
        <h3>{{ task.summary }}</h3>
        <div class="cardInfo">
        <span class="row"><div class="cardSubtitle">Name:</div> {{ task.typeName }}</span>
        <span class="row"><div class="cardSubtitle">Priority:</div> {{ task.priorityId }}</span>
        <span class="row"><div class="cardSubtitle">Status:</div> {{ task.statusName }}</span>
        </div>
        <div class="cardInfo">
        <span class="row"><div class="cardSubtitle">Done:</div> {{ task.done }}</span>
        <span class="row"><div class="cardSubtitle">ID:</div> {{ task.id }}</span>
        <span class="row"><div class="cardSubtitle">Project ID:</div> {{ task.projectId }}</span>
        </div>
    </div> 
</template>

<script setup lang="ts">
import { ITask } from '@/types/task';

interface Props {
  task: ITask;
}

defineProps<Props>();

</script>

<style scoped>
.card {
    padding: 20px;
    height: 100%;
    box-sizing: border-box;
    cursor: pointer;
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
  font-size: 14px;
}

.cardSubtitle {
  margin-right: 5px;
}

</style>