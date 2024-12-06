<template>
  <h1 class="center">Tasks</h1>

  <ul class="list desk">
    <li v-for="task in tasksList">
      <TaskCard :task='task'/>
    </li>
  </ul>
    
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getTasksRequest } from '../api/api'
import { Task } from './TaskCard.vue'
import TaskCard from './TaskCard.vue'

const tasksList = ref<Array<Task>>([])

function getTasksList() {
  getTasksRequest()
  .then((data) => {
    tasksList.value = data
  })
  .catch(err => console.log(err))
}

onMounted(() => getTasksList())

</script>

<style scoped>
.center {
  text-align: center;
}
.list {
  list-style: none;
}
.desk {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
</style>
