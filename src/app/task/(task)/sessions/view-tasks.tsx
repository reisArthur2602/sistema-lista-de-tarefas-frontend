import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TaskResponse } from "../task.types";
import { formatDate, formatPrice } from "@/lib/utils";
import DeleteTaskButton from "./delete-task-button";

type ViewTasksProps = {
  tasks: TaskResponse[] | [];
};

const ViewTasks = ({ tasks }: ViewTasksProps) => {
  return (
    <Table>
      <TableCaption>Tarefas cadastradas no sistema</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Custo</TableHead>
          <TableHead>Data limite</TableHead>
          <TableHead>Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map(({ cost, id, limitDate, name }) => (
          <TableRow key={id}>
            <TableCell>{id}</TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{formatPrice(cost)}</TableCell>
            <TableCell>{formatDate(limitDate)}</TableCell>
            <TableCell>
              <div className="flex items-center gap-4">
                <DeleteTaskButton id={id}/>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ViewTasks;
