<template>
  <div class="dashboard">
      <div v-for="(tasks, taskStateName, i) in getTasksByState" :id="`${taskStateName}`" :key="i" class="drop-zone" @dragover.prevent @dragleave.prevent @drop="onDrop($event, taskStateName as keyof typeof TaskStates)">
        <h2 class="">{{ taskStateName }}</h2>
        <ul  class="no-list-style"> 
            <li v-for="(task, i) in tasks" :id="`task-${task.id}`" :key="i" class="m-10 drag-el" draggable="true" @dragstart="startDrag($event, task)">
                <Task :task='task'/>
            </li>
        </ul>
    </div>
  </div>
  
</template>

<script setup lang="ts">
import useTaskModule from '@/store/taskModule.ts';
import { provide } from 'vue';
import { taskRegistry } from '@/components/tasks/taskRegistry.ts';
import { TaskStates } from '@/types/taskStates';
import { ITask } from '@/types/task';
import Task from '@/components/tasks/Task.vue';

provide('componentRegistry', taskRegistry);

const { getTasksList, getTasksByState } = useTaskModule();

function startDrag(evt: DragEvent, item: ITask) { 
      evt.dataTransfer!.dropEffect = 'move'
      evt.dataTransfer!.effectAllowed = 'move'
      evt.dataTransfer!.setData('itemID', item.id.toString())
}

function onDrop(evt : DragEvent, state: keyof typeof TaskStates) { 
      const itemID = evt.dataTransfer!.getData('itemID')
      const item = getTasksList.value.find((item) => item.id.toString() == itemID)
      item ? item.statusName = state : console.log('Task is not found onDrop');
}

</script>

<style scoped>
.dashboard {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 20px;
}
.no-list-style {
  list-style: none;
}
.m-10 {
    margin: 10px 0;
}
.drop-zone {
  height: 100vh;
}
</style>
