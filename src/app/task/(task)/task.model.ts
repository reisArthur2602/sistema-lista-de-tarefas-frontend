"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateTaskSchema } from "./task.schema";
import { TaskRequest } from "./task.types";
import { createTask, deleteTask } from "./task.services";
import { toast } from "sonner";
import { isAxiosError } from "axios";

export const useTaskModel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TaskRequest>({
    resolver: zodResolver(CreateTaskSchema),
  });

  const handleCreateTask = handleSubmit(async (credentials) => {
    await createTask(credentials)
      .then(() => {
        toast.success("A tarefa foi cadastrada com sucesso!");
        reset();
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
        reset();
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

  return { register, handleCreateTask, handleDeleteTask, errors };
};
