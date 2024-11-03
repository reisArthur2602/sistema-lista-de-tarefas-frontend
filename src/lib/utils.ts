import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (date: Date | string) => {
  const dateObject = new Date(date);

  const year = dateObject.getUTCFullYear();
  const month = String(dateObject.getUTCMonth() + 1).padStart(2, "0");
  const day = String(dateObject.getUTCDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};

// export const formatDate = (date: Date) => {
//   const formattedDate = new Date(date);
//   return format(formattedDate, "dd-MM-yyyy");
// };

export const formatPrice = (value: number) => {
  return new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export const isCostAboveThreshold = (price: number) => {
  return price >= 1000;
};
