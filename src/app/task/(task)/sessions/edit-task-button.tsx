"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Pen } from "lucide-react";

import { TaskResponse } from "../task.types";
import { formatDate } from "@/lib/utils";

type EditTaskButtonProps = {
  task: TaskResponse;
};

const EditTaskButton = ({ task }: EditTaskButtonProps) => {
  console.log(formatDate(task.limitDate));

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"icon"} variant={"ghost"}>
          <Pen />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Editar Tarefa</SheetTitle>
          <SheetDescription>
            Faça alterações na tarefa. Clique em salvar quando terminar.
          </SheetDescription>
        </SheetHeader>

        <form className="pt-4">
          <div className="mb-4 flex flex-col gap-3">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              placeholder="Nome para a tarefa"
              autoFocus
              defaultValue={task.name}
            />
          </div>

          <div className="mb-4 flex flex-col gap-3">
            <Label htmlFor="limitDate">Data Limite</Label>
            <Input id="limitDate" type="date" defaultValue={`2024-02-10`} />
          </div>

          <div className="mb-4 flex flex-col gap-3">
            <Label htmlFor="cost">Custo</Label>
            <Input id="cost" placeholder="R$" defaultValue={task.cost} />
          </div>

          <SheetFooter>
            <SheetClose asChild>
              <Button>Salvar altereções</Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default EditTaskButton;
