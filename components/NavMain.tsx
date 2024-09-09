"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { ReactNode } from "react";
import { IconProps } from "@/types";
import { usePathname } from "next/navigation";

export function NavMain({
  className,
  items,
}: {
  items: {
    title: string;
    url: string;
    icon: (props: IconProps) => ReactNode;
  }[];
} & React.ComponentProps<"ul">) {
  const pathname = usePathname();
  return (
    <ul className={cn("grid gap-0.5", className)}>
      {items.map((item) => (
        <div key={item.title}>
          <li>
            <div
              className={cn(
                "relative flex items-center py-2 px-3 font-medium rounded-md cursor-pointer transition-colors  hover:text-custom-5",
                pathname === item?.url
                  ? "bg-custom-3 text-custom-5"
                  : "hover:bg-purple-100",
              )}
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.url}
                      className="min-w-8 flex h-6 flex-1 items-center gap-2 overflow-hidden rounded-md px-1.5 text-sm font-medium outline-none ring-ring transition-all focus-visible:ring-2"
                    >
                      <item.icon
                        className="h-6 w-6 shrink-0"
                        primaryColor={
                          pathname === item?.url ? "#9747ff" : undefined
                        }
                        secondaryColor={
                          pathname === item?.url ? "#be8cff" : undefined
                        }
                      />
                      <div className="flex flex-1 overflow-hidden [[data-sidebar=closed]_&]:hidden transition-all duration-75">
                        <div className="line-clamp-1 pr-6">{item.title}</div>
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
            </div>
          </li>
        </div>
      ))}
    </ul>
  );
}
