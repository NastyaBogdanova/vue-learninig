import { Component } from '@vue/runtime-core';

export interface Task {
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