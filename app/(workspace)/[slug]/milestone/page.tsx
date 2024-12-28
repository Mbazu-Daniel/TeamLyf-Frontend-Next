import React from "react";
import Link from "next/link";
import { PlusIcon } from "lucide-react";
import { Filter } from "@/components/shared/Filter";
import { filterSwitcher } from "@/constants/filter/example";
import { SidebarItem } from "@/components/ui/sidebar";

export default function MilestonePage() {
  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      {/* Header Section */}
      <div className="flex items-center justify-between p-4 h-16 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">Milestone</h1>

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
          <SidebarItem className="flex items-center hover:bg-purple-800 bg-purple-700 text-white py-2 px-3 font-extrabold rounded-md cursor-pointer transition-colors w-auto">
            <Link
              href="/milestone/new"
              className="flex h-6 items-center gap-2 text-sm font-medium"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white">
                <PlusIcon className="h-5 w-5 text-purple-600" />
              </div>
              Create Milestone
            </Link>
          </SidebarItem>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        {/* Plan Your Tasks Section */}
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="flex justify-center mb-6">
            <img
              src="/milestone-illustration.png"
              alt="Milestone Illustration"
              className="w-32 h-32"
            />
          </div>
          <h2 className="text-lg font-semibold text-gray-800">Plan your Tasks</h2>
          <p className="text-sm text-gray-500 mt-2">
            As a team, agree on what tasks need to be completed, and drag
            these tasks into milestones.
          </p>
          <div className="mt-6 flex justify-center">
            <button className="px-6 py-3 bg-purple-100 text-purple-700 rounded-md shadow hover:bg-purple-700 hover:text-white">
              Create a Milestone
            </button>
          </div>
        </div>

        {/* Backlog Section */}
        <section className="mt-8">
          <h3 className="text-lg font-semibold text-gray-800">Backlog</h3>
          <div className="mt-4 bg-white rounded-lg shadow-md p-4 text-gray-500">
            <p>No tasks in the backlog yet.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
