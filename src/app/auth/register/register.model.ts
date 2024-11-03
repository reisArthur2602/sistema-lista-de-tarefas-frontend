"use client";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import { RegisterRequest } from "./register.types";
import { RegisterUserSchema } from "./register.schema";

export const useRegisterModel = () => {
  const registerForm = useForm<RegisterRequest>({
    resolver: zodResolver(RegisterUserSchema),
  });

  const handleRegister = registerForm.handleSubmit(async (credentials) => {
    console.log(credentials);
  });

  return { registerForm, handleRegister };
};
