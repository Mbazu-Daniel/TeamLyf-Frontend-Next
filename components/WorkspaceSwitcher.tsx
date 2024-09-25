"use client";

import * as React from "react";
import { ChevronsUpDown, Plus } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getNameAbbreviation } from "@/utils/getNameAbbreviation";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useParams, useRouter } from "next/navigation";

interface WorkspaceProps {
  name: string;
  logo: React.ElementType;
  plan: string;
  slug: string;
}
export function WorkspaceSwitcher({
  workspaces,
}: {
  workspaces: WorkspaceProps[];
}) {
  const router = useRouter();
  const { slug } = useParams();
  // const [activeWorkspace] = React.useState(workspaces[0]);

  const currentWorkspace = workspaces.find(
    (workspace) => workspace.slug === slug,
  );

  const fallback = getNameAbbreviation(currentWorkspace?.name as string);

  const handleWorkspace = (workspace: WorkspaceProps) => {
    router.push(`/${workspace.slug}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full rounded-md ring-ring hover:bg-purple-100 hover:text-custom-5 focus-visible:outline-none focus-visible:ring-2 data-[state=open]:bg-custom-3 data-[state=open]:text-custom-5 transition-all">
        <div className="flex py-2 px-3 items-center gap-1.5 overflow-hidden text-left text-sm transition-all">
          <Avatar className="flex h-6 w-6 items-center justify-center mx-auto !rounded-sm bg-custom-6 text-primary-foreground">
            <AvatarFallback className="bg-[unset]">{fallback}</AvatarFallback>
          </Avatar>
          <div className="line-clamp-1 flex-1 pr-2 font-medium [[data-sidebar=closed]_&]:hidden">
            {currentWorkspace?.name}
          </div>
          <ChevronsUpDown className="ml-auto h-4 w-4 text-muted-foreground/50 [[data-sidebar=closed]_&]:hidden" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-64"
        align="start"
        side="right"
        sideOffset={4}
      >
        <DropdownMenuLabel className="text-xs text-muted-foreground">
          Workspace
        </DropdownMenuLabel>
        {workspaces.map((workspace) => (
          <DropdownMenuItem
            key={workspace.name}
            onClick={() => handleWorkspace(workspace)}
            className="items-start gap-2 px-1.5"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-primary text-primary-foreground">
              <workspace.logo className="h-5 w-5 shrink-0" />
            </div>
            <div className="grid flex-1 leading-tight">
              <div className="line-clamp-1 font-medium">{workspace.name}</div>
              <div className="overflow-hidden text-xs text-muted-foreground">
                <div className="line-clamp-1">{workspace.plan}</div>
              </div>
            </div>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2 px-1.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-md border bg-background">
            <Plus className="h-5 w-5" />
          </div>
          <div className="font-medium text-muted-foreground">Add workspace</div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
