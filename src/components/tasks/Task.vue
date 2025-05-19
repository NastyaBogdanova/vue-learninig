<template>
  <div v-if="resolvedComponent">
    <component :is="resolvedComponent" v-bind="props"/>
  </div>
  <p v-else>Unknown issue type</p>
</template>

<script setup lang="ts">
import { ITaskRegistry, ITask } from '@/types/task';
import { inject, onMounted, shallowRef } from 'vue';

interface Props {
  task: ITask;
}

const props = defineProps<Props>();
const componentRegistry = inject<ITaskRegistry>('componentRegistry');
const resolvedComponent = shallowRef();

onMounted(async () => {
  if (componentRegistry![props.task.typeName]) {
    resolvedComponent.value = await componentRegistry![props.task.typeName];
  }
});
</script>
