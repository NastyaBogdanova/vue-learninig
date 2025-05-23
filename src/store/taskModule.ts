import { computed, reactive } from 'vue';
import { getTasksRequest } from '@/service/tasks.ts';
import { Task } from '@/types/task';

export const state: {tasksList: Task[]} = reactive({
  tasksList: [],
});

export default function useTaskModule () {
  const loadTasksList = () => {
    getTasksRequest()
      .then((data) => {
        state.tasksList = data;
      })
      .catch(err => console.log(err));
  };
  return {
    getTasksList: computed(() => state.tasksList),
    loadTasksList,
  };
}
