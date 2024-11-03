"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateTaskSchema, EditTaskSchema } from "./task.schema";
import { EditTaskRequest, TaskRequest, TaskResponse } from "./task.types";
import { createTask, deleteTask, editTask, reorderTask } from "./task.services";
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

  const handleMoveToUp = async (tasks: TaskResponse[], index: number) => {
    if (index === 0) return;

    const taskToMoveUp = tasks[index];
    const taskToMoveDown = tasks[index - 1];

    const tasksToUpdate = [
      { id: taskToMoveUp.id, sortOrder: taskToMoveUp.sortOrder - 1 },
      { id: taskToMoveDown.id, sortOrder: taskToMoveDown.sortOrder + 1 },
    ];

    const result = await reorderTask(tasksToUpdate);

    if (result.success) {
      toast.success(result.body);
    } else {
      toast.error(result.error);
    }
  };

  return {
    createForm,
    editForm,
    handleCreateTask,
    handleDeleteTask,
    handleEditTask,
    handleMoveToUp,
  };
};
