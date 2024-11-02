import { Logo } from "@/components/logo";

type TaskLayoutProps = {
  children: React.ReactNode;
};

const TaskLayout = ({ children }: TaskLayoutProps) => {
  return (
    <div className="flex h-full flex-col gap-8 px-6">
      <header className="flex h-16 items-center uppercase">
        <Logo />
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default TaskLayout;
