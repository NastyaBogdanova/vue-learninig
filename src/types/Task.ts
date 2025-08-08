import { Component } from 'vue';

export interface ITask {
  id: number,
  typeName: string,
  summary: string,
  priorityId: string,
  done: boolean,
  statusName: string,
  projectId: number,
}

export interface ITaskRegistry {
  [key: string]: () => Promise<Component>;
}