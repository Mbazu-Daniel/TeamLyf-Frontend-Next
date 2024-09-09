"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { IconProps } from "@/types";
import { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export function NavSecondary({
  className,
  items,
}: {
  items: {
    title: string;
    url: string;
    icon: (props: IconProps) => ReactNode;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
} & React.ComponentProps<"ul">) {
  const pathname = usePathname();
  if (!items?.length) {
    return null;
  }

  return (
    <ul className={cn("grid gap-0.5", className)}>
      {items.map((item) => (
        <li
          key={item.title}
          className={cn(
            "relative flex items-center hover:text-accent-foreground py-2 px-3 font-medium rounded-md cursor-pointer transition-colors ",
            pathname === item?.url ? "bg-custom-3" : "hover:bg-purple-100",
          )}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.url}
                  className="min-w-8 flex h-6 flex-1 items-center gap-2 overflow-hidden rounded-md px-1.5 text-sm font-medium outline-none ring-ring transition-all focus-visible:ring-2"
                >
                  <item.icon className="h-6 w-6 shrink-0 translate-x-0.5 text-muted-foreground" />
                  <div className="flex flex-1 overflow-hidden [[data-sidebar=closed]_&]:hidden transition-all duration-75">
                    {item.title}
                  </div>
                </Link>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                className="[[data-sidebar=open]_&]:hidden"
              >
                <p>{item.title}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </li>
      ))}
    </ul>
  );
}
