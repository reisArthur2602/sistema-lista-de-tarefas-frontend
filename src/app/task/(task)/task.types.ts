export type TaskResponse = {
  id: string;
  name: string;
  cost: number;
  limitDate: string;
  sortOrder: number;
};

export type TaskRequest = {
  name: string;
  cost: number;
  limitDate: Date;
};

export type EditTaskRequest = {
  id: string;
  name: string;
  cost: number;
  limitDate: string;
};

export type ReoderTaskRequest = {
  id: string;
  sortOrder: number;
}[];
