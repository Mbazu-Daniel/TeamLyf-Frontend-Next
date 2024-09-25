"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const SIDEBAR_STATE_COOKIE = "sidebar:state";

type SidebarContext = {
  state: "open" | "closed";
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const SidebarContext = React.createContext<SidebarContext>({
  state: "open",
  open: true,
  onOpenChange: () => {
    {
    }
  },
});

function useSidebar() {
  return React.useContext(SidebarContext);
}

const SidebarLayout = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean;
    className?: string;
  }
>(({ defaultOpen, className, ...props }, ref) => {
  const [open, setOpen] = React.useState(defaultOpen ?? true);

  const onOpenChange = React.useCallback((open: boolean) => {
    setOpen(open);
    document.cookie = `${SIDEBAR_STATE_COOKIE}=${open}; path=/; max-age=${
      60 * 60 * 24 * 7
    }`;
  }, []);

  const state = open ? "open" : "closed";

  return (
    <SidebarContext.Provider value={{ state, open, onOpenChange }}>
      <div
        ref={ref}
        data-sidebar={state}
        style={
          {
            "--sidebar-width": "16rem",
          } as React.CSSProperties
        }
        className={cn(
          "flex min-h-screen bg-accent/50 pl-0 transition-all duration-300 ease-in-out md:data-[sidebar=closed]:pl-[calc(var(--sidebar-width)-10rem)] md:pl-[calc(var(--sidebar-width)+1rem)] sm:pl-0",
          className,
        )}
        {...props}
      />
    </SidebarContext.Provider>
  );
});
SidebarLayout.displayName = "SidebarLayout";

const SidebarTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    className?: string;
  }
>(({ className, ...props }, ref) => {
  const { open, onOpenChange } = useSidebar();

  return (
    <Button
      ref={ref}
      intent="transparent"
      size="sm"
      className={cn("after:w-0", className)}
      onClick={() => onOpenChange(!open)}
      {...props}
      label={
        <>
          <span className="sr-only">Toggle Sidebar</span>
        </>
      }
      leftIcon={
        open ? (
          <ChevronRight className="h-6 w-6 text-background" />
        ) : (
          <ChevronLeft className="h-6 w-6 text-background" />
        )
      }
    />
  );
});
SidebarTrigger.displayName = "SidebarTrigger";

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { className?: string }
>(({ className, children }, ref) => {
  const sidebar = (
    <div
      ref={ref}
      className={cn("flex h-full flex-col border-r bg-background", className)}
    >
      {children}
    </div>
  );
  return (
    <aside className="absolute inset-y-0 left-0 z-10 hidden w-[--sidebar-width] transition-all duration-300 ease-in-out md:block [[data-sidebar=closed]_&]:w-[calc(var(--sidebar-width)-11rem)]">
      {sidebar}
    </aside>
  );
});
Sidebar.displayName = "Sidebar";

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { className?: string }
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex items-center px-2.5 py-2", className)}
      {...props}
    />
  );
});
SidebarHeader.displayName = "SidebarHeader";

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { className?: string }
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex items-center px-2.5 py-2", className)}
      {...props}
    />
  );
});
SidebarFooter.displayName = "SidebarFooter";

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { className?: string }
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-1 flex-col gap-5 overflow-auto py-4 no-scrollbar",
        className,
      )}
      {...props}
    />
  );
});
SidebarContent.displayName = "SidebarContent";

const SidebarItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { className?: string }
>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("grid gap-2 px-2.5", className)} {...props} />
  );
});
SidebarItem.displayName = "SidebarItem";

const SidebarLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { className?: string }
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "px-1.5 text-xs font-medium text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
});
SidebarLabel.displayName = "SidebarLabel";

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarLayout,
  SidebarTrigger,
  useSidebar,
};
