"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateTaskSchema, EditTaskSchema } from "./task.schema";
import { EditTaskRequest, TaskRequest } from "./task.types";
import { createTask, deleteTask, editTask } from "./task.services";
import { toast } from "sonner";


export const useTaskModel = (id?: string) => {
  const createForm = useForm<TaskRequest>({
    resolver: zodResolver(CreateTaskSchema),
  });

  const editForm = useForm<Omit<EditTaskRequest, "id">>({
    resolver: zodResolver(EditTaskSchema),
  });

  const handleCreateTask = createForm.handleSubmit(async (credentials) => {
    const result = await createTask(credentials);

    if (result.success) {
      toast.success(result.body);
    } else {
      toast.error(result.error);
    }
  });

  const handleDeleteTask = async (id: string) => {
    const result = await deleteTask(id);

    if (result.success) {
      toast.success(result.body);
    } else {
      toast.error(result.error);
    }
  };

  const handleEditTask = editForm.handleSubmit(async (credentials) => {
    const result = await editTask({
      id: id as string,
      ...credentials,
    });

    if (result.success) {
      toast.success(result.body);
    } else {
      toast.error(result.error);
    }
  });

  return {
    createForm,
    editForm,
    handleCreateTask,
    handleDeleteTask,
    handleEditTask,
  };
};
