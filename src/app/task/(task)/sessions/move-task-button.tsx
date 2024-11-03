"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import React from "react";
import { TaskResponse } from "../task.types";
import { useTaskModel } from "../task.model";

type MoveTaskButtonProps = {
  tasks: TaskResponse[] | [];
  index: number;
};

const MoveTaskButton = ({ tasks, index }: MoveTaskButtonProps) => {
  
  const { handleMoveToDown, handleMoveToUp } = useTaskModel();

  return (
    <div className="flex flex-col gap-2">
      <Button
        size={"icon"}
        variant={"outline"}
        onClick={() => handleMoveToUp(tasks, index)}
        className="size-7"
        disabled={index === 0}
      >
        <ChevronUp />
      </Button>
      <Button
        size={"icon"}
        variant={"outline"}
        onClick={() => handleMoveToDown(tasks, index)}
        className="size-7"
        disabled={index === tasks.length - 1}
      >
        <ChevronDown />
      </Button>
    </div>
  );
};

export default MoveTaskButton;
