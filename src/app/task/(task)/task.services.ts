"use server";
import { TASK_ENDPOINT } from "@/constants/task";
import { apiConnection } from "@/lib/axios";
import { TaskRequest, TaskResponse } from "./task.types";
import { revalidatePath } from "next/cache";

const getTasks = async () => {
  const { data } = await apiConnection.get<TaskResponse[] | []>(TASK_ENDPOINT);
  return data;
};

const createTask = async (credentials: TaskRequest) => {
  const { data } = await apiConnection.post<TaskResponse>(
    TASK_ENDPOINT,
    credentials,
  );

  revalidatePath("/task");

  return data;
};

const deleteTask = async (id: string) => {
  await apiConnection.delete(TASK_ENDPOINT +`?id=${id}`);
  revalidatePath("/task");
};

export { getTasks, createTask, deleteTask };
