import { ListMinus } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link
      href={"/task"}
      className="hover:text-primary flex items-center font-bold text-slate-900 transition-all hover:scale-105"
    >
      <>TASKLIST</>
      <ListMinus size={20} />
    </Link>
  );
};
