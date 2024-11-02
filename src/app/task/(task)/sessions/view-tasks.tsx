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
            <TableCell>...</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ViewTasks;
