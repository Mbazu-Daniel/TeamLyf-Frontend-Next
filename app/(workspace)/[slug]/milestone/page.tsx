import React from "react";
import Link from "next/link";
import { PlusIcon } from "lucide-react";
import { Filter } from "@/components/shared/Filter";
import { filterSwitcher } from "@/constants/filter/example";

import { SidebarItem } from "@/components/ui/sidebar";

export default function MilestonePage() {
  return (
    <div className="h-screen flex flex-col bg-white w-full">
      {/* Header Section */}
      <div className="flex items-center justify-between p-4 h-16 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-secondary">Milestone</h1>

        {/* Right-side Buttons */}
        <div className="flex items-center gap-4">
          {/* Filter Button */}
          <div className="flex space-x-6 items-center">
            <Filter
              items={filterSwitcher}
              heading="Filter"
              className="hidden md:block"
            />
          </div>

          {/* Create Milestone Button */}
          <SidebarItem className="flex items-center hover:text-stone-300 text-stone-100 bg-custom-5 py-2 px-3 font-extrabold rounded-md cursor-pointer transition-colors w-auto">
            <Link
              href="/milestone/new"
              className="min-w-8 flex h-6 flex-1 items-center gap-2 overflow-hidden rounded-md px-1.5 text-sm font-medium"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-md border bg-background">
                <PlusIcon className="h-5 w-5 shrink-0 text-custom-5" />
              </div>
              <div className="flex flex-1 overflow-hidden [[data-sidebar=closed]_&]:hidden transition-all duration-75">
                Create Milestone
              </div>
            </Link>
          </SidebarItem>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Plan Your Tasks Section */}
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <div className="flex justify-center mb-4">
            <img
              src="/milestone-illustration.png"
              alt="Milestone Illustration"
              className="w-24 h-24"
            />
          </div>
          <h2 className="text-lg font-semibold text-gray-800">Plan your Tasks</h2>
          <p className="text-gray-500 mt-2">
            As a team, agree on what tasks need to be completed, and drag these
            tasks into milestones.
          </p>
          <button className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-md shadow hover:bg-purple-700 flex items-center gap-2">
            <PlusIcon className="w-5 h-5" />
            Create a Milestone
          </button>
        </div>

        {/* Backlog Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800">Backlog</h3>
          <div className="mt-4 bg-white p-4 rounded-lg shadow-md text-gray-500">
            <p>No tasks in the backlog yet.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
