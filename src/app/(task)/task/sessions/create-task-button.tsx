import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogClose } from "@radix-ui/react-dialog";
import { Plus } from "lucide-react";

const CreateTaskButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus />
          <>Nova Tarefa</>
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nova Tarefa</DialogTitle>
          <DialogDescription>
            Prencha o formulário para cadastrar uma tarefa
          </DialogDescription>
        </DialogHeader>

        <form>

          <div className="mb-4 flex flex-col gap-3">
            <Label htmlFor="name">Nome</Label>
            <Input id="name" placeholder="Nome para a tarefa" autoFocus />
          </div>

          <div className="mb-4 flex flex-col gap-3">
            <Label htmlFor="limitDate">Data Limite</Label>
            <Input id="limitDate" type="date" />
          </div>

          <div className="mb-4 flex flex-col gap-3">
            <Label htmlFor="cost">Custo</Label>
            <Input id="cost" placeholder="R$" />
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary" type="button">
                Cancelar
              </Button>
            </DialogClose>

            <Button>Cadastrar</Button>
          </DialogFooter>

        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTaskButton;
