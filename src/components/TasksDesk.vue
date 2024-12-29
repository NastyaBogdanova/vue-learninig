<template>
  <div v-if="isLoading" class="loader-wrapper">
    <div class="loader"></div>
  </div>
  <div>
  <h1 class="center">Tasks</h1>

  <ul class="list desk">
    <li v-for="task in tasksList">
      <TaskCard :task='task'/>
    </li>
  </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getTasksRequest } from '../api/api'
import { Task } from './TaskCard.vue'
import TaskCard from './TaskCard.vue'

const tasksList = ref<Array<Task>>([])
const isLoading = ref(true)

function getTasksList() {
  getTasksRequest()
  .then((data) => {
    tasksList.value = data;
    isLoading.value = false;
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

.loader-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.loader {
  width: fit-content;
  font-size: 17px;
  font-family: monospace;
  line-height: 1.4;
  font-weight: bold;
  background:
      linear-gradient(#000 0 0) left ,
      linear-gradient(#000 0 0) right;
  background-repeat: no-repeat;
  border-right: 5px solid #0000;
  border-left: 5px solid #0000;
  background-origin: border-box;
  position: relative;
  animation: l9-0 2s infinite;
}
.loader::before {
  content:"Loading";
}
.loader::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  width: 22px;
  height: 60px;
  background:
      linear-gradient(90deg,#000 4px,#0000 0 calc(100% - 4px),#000 0) bottom            /22px 20px,
      linear-gradient(90deg,red  4px,#0000 0 calc(100% - 4px),red  0) bottom 10px left 0/22px 6px,
      linear-gradient(#000 0 0) bottom 3px left 0  /22px 8px,
      linear-gradient(#000 0 0) bottom 0   left 50%/8px  16px;
  background-repeat: no-repeat;
  animation: l9-1 2s infinite;
}
@keyframes l9-0{
  0%,25%    {background-size: 50% 100%}
  25.1%,75% {background-size: 0 0,50% 100%}
  75.1%,100%{background-size: 0 0,0 0}
}
@keyframes l9-1{
  25%   { background-position:bottom, bottom 54px left 0,bottom 3px left 0,bottom 0 left 50%;left:0}
  25.1% { background-position:bottom, bottom 10px left 0,bottom 3px left 0,bottom 0 left 50%;left:0}
  50%   { background-position:bottom, bottom 10px left 0,bottom 3px left 0,bottom 0 left 50%;left:calc(100% - 22px)}
  75%   { background-position:bottom, bottom 54px left 0,bottom 3px left 0,bottom 0 left 50%;left:calc(100% - 22px)}
  75.1% { background-position:bottom, bottom 10px left 0,bottom 3px left 0,bottom 0 left 50%;left:calc(100% - 22px)}
}
</style>
