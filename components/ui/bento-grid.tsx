'use client';

import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-2xl group transition duration-500 glass-card p-6 justify-between flex flex-col space-y-4 hover:border-primary/50",
        className
      )}
    >
      {header}
      <div className="group-hover:translate-x-1 transition duration-500">
        {icon}
        <div className="font-black text-white mt-4 mb-2 tracking-tight uppercase text-sm">
          {title}
        </div>
        <div className="font-medium text-white/40 text-xs leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};
