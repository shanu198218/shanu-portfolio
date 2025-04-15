"use client";
import { ElementType, ReactNode } from "react";

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
};

const Container = ({
  children,
  as: Tag = "div",
  className,
  ...rest
}: Props) => {
  return (
    <Tag
      {...rest}
      className={`container md:max-w-7xl mx-auto px-4 font-body ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Container;
