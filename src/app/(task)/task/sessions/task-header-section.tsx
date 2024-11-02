import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const TaskHeaderSection = () => {
  return (
    <section className="mb-8 flex flex-col justify-between gap-4 sm:flex-row">
      <div className="flex flex-col">
        <h1 className="text-xl font-bold">Minhas Tarefas</h1>
        <p className="text-sm text-zinc-400">Gerenciar minhas tarefas</p>
      </div>

      <Button>
        <Plus />
        <>Nova Tarefa</>
      </Button>
    </section>
  );
};

export default TaskHeaderSection;
