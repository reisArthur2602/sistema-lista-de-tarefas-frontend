import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { format } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (value: string) => {
  return format(new Date(value), "dd-MM-yyyy");
};

export const formatPrice = (value: number) => {
  return new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export const isCostAboveThreshold = (price: number) => {
  return price >= 1000;
};
