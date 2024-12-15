import React from 'react';
import { cn } from "@/lib/utils";

interface ScrollingSocialProofProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  reverse?: boolean;
  children?: React.ReactNode;
  repeat?: number;
}

export function ScrollingSocialProof({
  className,
  reverse,
  children,
  repeat = 4,
  ...props
}: ScrollingSocialProofProps) {
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 h-full w-[10%] bg-gradient-to-r via-background/80 from-background dark:to-background/5 to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-[10%] bg-gradient-to-l via-background/80 from-background dark:to-background/5 to-transparent z-10" />
      <div
        {...props}
        className={cn(
          "group flex flex-row overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
          className,
        )}
      >
        {Array(repeat)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={cn("flex shrink-0 justify-around [gap:var(--gap)] animate-socialproof flex-row", {
                "[animation-direction:reverse]": reverse,
              })}
            >
              {children}
            </div>
          ))}
      </div>
    </div>
  );
}