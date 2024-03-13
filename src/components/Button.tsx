import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export function Button({ children }: Props) {
  return (
    <button className="h-[50px] bg-dark dark:bg-light text-light dark:text-dark font-bold rounded-lg shadow-gray-600 shadow-md transition-all duration-500 hover:scale-105">
      {children}
    </button>
  );
}
