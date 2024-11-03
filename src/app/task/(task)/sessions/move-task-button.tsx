"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import React from "react";

type MoveTaskButtonProps = {
  onMoveUp: () => void;
};

const MoveTaskButton = ({ onMoveUp }: MoveTaskButtonProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Button size={"icon"} variant={"outline"} onClick={onMoveUp}  className="size-7">
        <ChevronUp />
      </Button>
      <Button size={"icon"} variant={"outline"} className="size-7">
        <ChevronDown />
      </Button>
    </div>
  );
};

export default MoveTaskButton;
