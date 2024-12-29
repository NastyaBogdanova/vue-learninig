export interface Task {
  id: number,
  typeName: string,
  summary: string,
  priorityId: string,
  done: boolean,
  statusName: string,
  projectId: number,
}