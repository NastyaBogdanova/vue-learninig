import { computed, reactive } from 'vue';
import { getTasksRequest } from '@/service/tasks.ts';
import { ITask } from '@/types/task';
import { TaskStates } from '@/types/taskStates';


export const state: {tasksList: ITask[]} = reactive({
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

  function setTasksByStates() {
    type TaskStateMap = { [K in TaskStates]: ITask[] };
    const initialState: TaskStateMap = {
      [TaskStates.Done]: [],
      [TaskStates.InProgress]: [],
      [TaskStates.InTest]: [],
      [TaskStates.ToDo]: [],
    };

    return state.tasksList.reduce((acc, task) => {
      const taskState = task.statusName as TaskStates;
      if (initialState.hasOwnProperty(taskState)) {
        acc[taskState].push(task);
      }
      return acc;
    }, initialState);
  }

  return {
    getTasksList: computed(() => state.tasksList),
    getTasksByState: computed(() => setTasksByStates()),
    loadTasksList,
  };
}
