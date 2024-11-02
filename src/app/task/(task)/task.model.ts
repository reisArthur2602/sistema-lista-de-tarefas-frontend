"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateTaskSchema, EditTaskSchema } from "./task.schema";
import { EditTaskRequest, TaskRequest } from "./task.types";
import { createTask, deleteTask, editTask } from "./task.services";
import { toast } from "sonner";
import { isAxiosError } from "axios";

export const useTaskModel = (id?: string) => {
  const createForm = useForm<TaskRequest>({
    resolver: zodResolver(CreateTaskSchema),
  });

  const editForm = useForm<Omit<EditTaskRequest, "id">>({
    resolver: zodResolver(EditTaskSchema),
  });

  const handleCreateTask = createForm.handleSubmit(async (credentials) => {
    await createTask(credentials)
      .then(() => {
        toast.success("A tarefa foi cadastrada com sucesso!");
        createForm.reset();
      })
      .catch((error) => {
        if (isAxiosError(error)) {
          const errorMessage = error.response?.data.message as
            | string
            | "Erro ao criar tarefa";
          toast.error(errorMessage);
        }
      });
  });

  const handleDeleteTask = async (id: string) => {
    await deleteTask(id)
      .then(() => {
        toast.success("A tarefa foi excluída com sucesso!");
      })
      .catch((error) => {
        if (isAxiosError(error)) {
          const errorMessage = error.response?.data.message as
            | string
            | "Erro ao excluir tarefa";
          toast.error(errorMessage);
        }
      });
  };

  const handleEditTask = editForm.handleSubmit(async (credentials) => {
    
    const data: EditTaskRequest = {
      id: id as string,
      cost: credentials.cost,
      name: credentials.name,
      limitDate: credentials.limitDate,
    };

    await editTask(data)
      .then(() => {
        toast.success("A tarefa foi alterada com sucesso!");
      })
      .catch((error) => {
        if (isAxiosError(error)) {
          const errorMessage = error.response?.data.message as
            | string
            | "Erro ao editar tarefa";
          toast.error(errorMessage);
        }
      });
  });

  return {
    createForm,
    editForm,
    handleCreateTask,
    handleDeleteTask,
    handleEditTask,
  };
};
