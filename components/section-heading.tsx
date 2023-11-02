import React, { Children } from "react";
import { twMerge } from "tailwind-merge";
type Props = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
};

export default function SectionHeading({
  as: Comp = "h2",
  children,
  className,
  ...props
}: Props): JSX.Element {
  return (
    <Comp className={twMerge("mb-4 text-4xl font-bold", className)}>
      {children}
    </Comp>
  );
}
