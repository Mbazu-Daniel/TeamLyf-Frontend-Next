"use client";

import { NavMain } from "@/components/NavMain";
import { NavSecondary } from "@/components/NavSecondary";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
} from "@/components/ui/sidebar";
import { DashboardIcon } from "@/components/icons/DashboardIcon";
import { TaskIcon } from "@/components/icons/TaskIcon";
import { ChartIcon } from "@/components/icons/ChatIcon";
import { ProjectIcon } from "@/components/icons/ProjectIcon";
import { ScheduleIcon } from "@/components/icons/ScheduleIcon";
import { FileIcon } from "@/components/icons/FileIcon";
import { SupportIcon } from "@/components/icons/SupportIcon";
import { SettingIcon } from "@/components/icons/SettingIcon";
import { TutorialIcon } from "@/components/icons/TutorialIcon";
import { LogOutIcon } from "@/components/icons/LogOutIcon";
import { Atom, Eclipse, Plus, Rabbit } from "lucide-react";
import { WorkspaceSwitcher } from "./WorkspaceSwitcher";
import { useParams } from "next/navigation";
import Link from "next/link";

export function AppSidebar({ children }: { children: React.ReactNode }) {
  const { slug } = useParams();
  const data = {
    navMain: [
      {
        title: "Dashboard",
        url: `/${slug}/dashboard`,
        icon: DashboardIcon,
      },
      {
        title: "My Tasks",
        url: `/${slug}/tasks`,
        icon: TaskIcon,
      },
      {
        title: "Chats",
        url: `/${slug}/chats`,
        icon: ChartIcon,
      },
      {
        title: "Projects",
        url: `/${slug}/projects`,
        icon: ProjectIcon,
      },
      {
        title: "Files manager",
        url: `/${slug}/projects`,
        icon: FileIcon,
      },
      {
        title: "Schedules",
        url: `/${slug}/projects`,
        icon: ScheduleIcon,
      },
    ],

    navSecondary: [
      {
        title: "Support",
        url: "/support",
        icon: SupportIcon,
      },
      {
        title: "Settings",
        url: "/settings",
        icon: SettingIcon,
      },
      {
        title: "Tutorials",
        url: "/tutorials",
        icon: TutorialIcon,
      },

      {
        title: "Logout",
        url: "#",
        icon: LogOutIcon,
      },
    ],

    workspaces: [
      {
        name: "Developer",
        logo: Atom,
        plan: "Enterprise",
        slug: "developer",
      },
      {
        name: "UI UX",
        logo: Eclipse,
        plan: "Startup",
        slug: "ui_ux",
      },
      {
        name: "Product Manager manager manger ",
        logo: Rabbit,
        plan: "Free",
        slug: "pmmm",
      },
    ],
  };
  return (
    <Sidebar className="bg-custom-2 dark:bg-primary-foreground relative">
      <div className="absolute top-0 -right-3">{children}</div>
      <SidebarHeader>
        <WorkspaceSwitcher workspaces={data.workspaces} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarItem className="mt-4">
          <SidebarLabel className="[[data-sidebar=closed]_&]:invisible transition-all [[data-sidebar=closed]_&]:opacity-20 ">
            Overview
          </SidebarLabel>
          <NavMain items={data.navMain} />
        </SidebarItem>
        <SidebarItem className="mt-4">
          <SidebarLabel className="[[data-sidebar=closed]_&]:invisible transition-all [[data-sidebar=closed]_&]:opacity-20 ">
            General
          </SidebarLabel>
          <NavSecondary items={data.navSecondary} />
        </SidebarItem>
      </SidebarContent>
      <SidebarFooter className="mt-auto">
        <SidebarItem className="flex items-center hover:text-stone-300 text-stone-100 bg-custom-5 py-2 px-3 font-extrabold rounded-md cursor-pointer transition-colors w-full">
          <Link
            href="/workspace/new"
            className="min-w-8 flex h-6 flex-1 items-center gap-2 overflow-hidden rounded-md px-1.5 text-sm font-medium"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-md border bg-background">
              <Plus className="h-5 w-5 shrink-0 text-custom-5" />
            </div>
            <div className="flex flex-1 overflow-hidden [[data-sidebar=closed]_&]:hidden transition-all duration-75">
              Add workspace
            </div>
          </Link>
        </SidebarItem>
      </SidebarFooter>
    </Sidebar>
  );
}
