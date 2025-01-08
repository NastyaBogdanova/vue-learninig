<template>
    <div class="card">
        <h2>{{ task.summary }}</h2>
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
  import {Task} from '@/types/Task'

  interface Props {
    task: Task
  }

  defineProps<Props>()

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