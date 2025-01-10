<template>
  <ul id="task-list" class="list desk">
    <li v-for="task in getTasksList" :id="`task-${task.id}`">
      <TaskCard :task="task" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import TaskCard from "@/components/tasks/TaskCard.vue";
import useTaskModule from "@/store/taskModule.ts";

const { getTasksList } = useTaskModule();
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
