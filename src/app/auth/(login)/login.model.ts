"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { LoginRequest } from "./login.types";
import { SessionUserSchema } from "./login.schema";
import { useForm } from "react-hook-form";

export const useLoginModel = () => {
  const loginForm = useForm<LoginRequest>({
    resolver: zodResolver(SessionUserSchema),
  });

  const handleLogin = loginForm.handleSubmit(async (data) => {
    console.log(data);
  });

  return { loginForm, handleLogin };
};
