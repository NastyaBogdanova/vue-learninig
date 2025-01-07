import { computed, reactive } from 'vue';
import { getTasksRequest } from '@/api/api.ts';
import { Task } from '@/types/Task.ts';

export const state: {tasksList: Task[]} = reactive({
  tasksList: [],
});

export default function useTaskModule () {
  const loadTasksList = () => {
    getTasksRequest()
      .then((data) => {
        state.tasksList = data;
      })
      .catch(err => console.log(err))
  };
  return {
    getTasksList: computed(() => state.tasksList),
    loadTasksList,
  };
}
