import TaskHeaderSection from "./sessions/task-header-section";
import { getTasks } from "./task.services";

const TaskPage = async () => {
  const tasks = await getTasks();
  console.log(tasks);
  return (
    <>
      <TaskHeaderSection />
    </>
  );
};

export default TaskPage;
