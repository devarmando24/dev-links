import { ComponentProps, ReactNode } from "react";

interface Props extends ComponentProps<"a"> {
  children: ReactNode;
}
export function Button({ children, ...rest }: Props) {
  return (
    <a
      rel="noreferrer"
      target="_blank"
      className="h-[50px] bg-dark dark:bg-light text-light dark:text-dark font-bold rounded-lg shadow-gray-600 shadow-md transition-all duration-500 hover:scale-105 flex items-center justify-center"
      {...rest}
    >
      {children}
    </a>
  );
}
