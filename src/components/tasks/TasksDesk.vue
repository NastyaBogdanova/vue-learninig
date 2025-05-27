<template>
  <div class="dashboard">
      <div v-for="(TaskState, i) in ITaskStates" :id="`${TaskState}`" :key="i" class="drop-zone" @dragover.prevent @dragleave.prevent @drop="onDrop($event, TaskState)">
        <h2 class="">{{ TaskState }}</h2>
        <ul  class="no-list-style"> 
            <li v-for="(task, i) in getTasksByState(TaskState, getTasksList)" :id="`task-${task.id}`" :key="i" class="m-10 drag-el" draggable="true" @dragstart="startDrag($event, task)">
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
import { ITaskStates } from '@/types/taskStates';
import { ITask } from '@/types/task';
import Task from '@/components/tasks/Task.vue';

provide('componentRegistry', taskRegistry);

const { getTasksList } = useTaskModule();

function getTasksByState(state: ITaskStates, arr: ITask[]) {
  return arr.filter((task: ITask) => task.statusName === state);
}

function startDrag(evt: DragEvent, item: ITask) { 
      console.log('drag', item)
      evt.dataTransfer!.dropEffect = 'move'
      evt.dataTransfer!.effectAllowed = 'move'
      evt.dataTransfer!.setData('itemID', item.id.toString())
}

function onDrop(evt : DragEvent, state: ITaskStates) { 
      console.log('drop')
      const itemID = evt.dataTransfer!.getData('itemID')
      console.log(itemID)
      const item = getTasksList.value.find((item) => item.id == itemID)
      item.statusName = state
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
