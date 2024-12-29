<template>
    <div class="card">
        <h2>{{ task.summary }}</h2>
        <div class="cardInfo">
            <span class="row"><h3 class="cardSubtitle">Name:</h3> {{ task.typeName }}</span>
            <span class="row"><h3 class="cardSubtitle">Priority:</h3> {{ task.priorityId }}</span>
            <span class="row"><h3 class="cardSubtitle">Status:</h3> {{ task.statusName }}</span>
        </div>
        <div class="cardInfo">
            <span class="row"><h3 class="cardSubtitle">Done:</h3> {{ task.done }}</span>
            <span class="row"><h3 class="cardSubtitle">ID:</h3> {{ task.id }}</span>
            <span class="row"><h3 class="cardSubtitle">Project ID:</h3> {{ task.projectId }}</span>
        </div>
    </div>

  </template>

  <script setup lang="ts">
  interface Props {
    task: Task
  }

  const props = defineProps<Props>()

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