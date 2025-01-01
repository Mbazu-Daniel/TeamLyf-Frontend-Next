import React from "react";
import Link from "next/link";
import { PlusIcon } from "lucide-react";
import { Filter } from "@/components/shared/Filter";
import { filterSwitcher } from "@/constants/filter/example";

export default function MilestonePage() {
  return (
    <div className="flex-1 flex flex-col w-full bg-white min-h-screen">
      {/* Header Section */}
      <header className="flex items-center justify-between p-4 bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-black">Milestone</h1>

        {/* Right-side Buttons */}
        <div className="flex items-center gap-4">
          {/* Filter Button */}
          <Filter
            items={filterSwitcher}
            heading="Filter"
            className="hidden md:block"
          />

          {/* Create Milestone Button */}
          <Link
            href="/milestone/new"
            className="flex items-center gap-2 py-2 px-4 bg-purple-700 text-white rounded-md hover:bg-purple-800 transition"
          >
            <div className="flex items-center justify-center w-6 h-6 bg-white rounded-md">
              <PlusIcon className="h-5 w-5 text-purple-600" />
            </div>
            Create Milestone
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex justify-center items-start w-full">
        {/* Content Wrapper */}
        <div className="w-full max-w-3xl">
          {/* Plan Your Tasks Section */}
          <section className="bshadow-md p-6">
            <div className="flex justify-center mb-4">
              <img
                src="/milestone-illustration.png"
                alt="Milestone Illustration"
                className="w-28 h-28"
              />
            </div>
            <h2 className="text-lg font-semibold text-gray-800 text-center">
              Plan your Tasks
            </h2>
            <p className="text-sm text-gray-500 text-center mt-1">
              As a team, agree on what tasks need to be completed, and drag
              these tasks into milestones.
            </p>
            <div className="mt-4 flex justify-center">
              <button className="px-6 py-2 bg-purple-700 text-white rounded-md shadow hover:bg-purple-800 transition">
                Create a Milestone
              </button>
            </div>
          </section>

          {/* Backlog Section */}
          <section className="mt-4 bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-gray-800">Backlog</h3>
                <span className="text-sm text-gray-500">0 tasks</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <button className="hover:text-gray-600">
                  <span className="text-xl font-bold">+</span>
                </button>
                <button className="hover:text-gray-600">
                  <span className="text-xl font-semibold">⋮</span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
