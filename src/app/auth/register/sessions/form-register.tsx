"use client";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const FormRegister = () => {
  return (
    <form className="flex w-full max-w-96 flex-col gap-6">
      <div className="flex items-center justify-center">
        <Logo />
      </div>

      <div>
        <h1 className="text-4xl font-bold">Cadastro</h1>
        <p className="text-zinc-400">
          Preencha os campos para realizar seu cadastro.
        </p>
      </div>

      <Input placeholder="Digite seu email" />
      <Input placeholder="******" type="password" />
      <Button>Acessar</Button>
      <Link
        href="/auth"
        className="text-center text-sm transition-all hover:text-primary"
      >
        Já possui uma conta? Clique Aqui
      </Link>
    </form>
  );
};

export default FormRegister;
