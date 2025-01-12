// import { ITaskRegistry } from '@/types/Task.ts';
import { defineAsyncComponent } from 'vue'

export const taskRegistry: any = {
  BUG: defineAsyncComponent(() => import('@/components/tasks/TaskBug.vue')),
  STORY: defineAsyncComponent(() => import('@/components/tasks/TaskStory.vue')),
};