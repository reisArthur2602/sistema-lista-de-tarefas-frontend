import { TASK_ENDPOINT } from "@/constants/task";
import { apiConnection } from "@/lib/axios";
import { TaskResponse } from "./task.types";

const getTasks = async () => {
  const { data } = await apiConnection.get<TaskResponse[] | []>(TASK_ENDPOINT);
  return data;
};

export { getTasks };
