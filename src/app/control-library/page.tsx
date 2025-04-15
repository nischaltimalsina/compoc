"use client";
import React from "react";
import Link from "next/link";
import { Filter, Plus, Search } from "lucide-react";
import { PageHeader } from "@/components/layout/layout-components";
import { StatusBadge } from "@/components/ui/badges";
import sampleData from "@/data/sample-data";

const ControlLibrary: React.FC = () => {
  return (
    <div>
      <PageHeader title="Control Library">
        <button className="rounded-md border bg-white px-4 py-2 shadow-sm hover:bg-gray-50">
          <Filter size={16} className="mr-2 inline" />
          Filter
        </button>
        <button className="rounded-md bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700">
          <Plus size={16} className="mr-2 inline" />
          Add Control
        </button>
      </PageHeader>

      {/* Search and Framework Filter */}
      <div className="mb-6 rounded-lg bg-white p-4 shadow">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              className="w-full rounded-md border py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search controls..."
            />
          </div>
          <div>
            <select className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">All Frameworks</option>
              {sampleData.frameworks.map((framework, index) => (
                <option key={index} value={framework.id}>
                  {framework.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">All Statuses</option>
              <option value="Completed">Completed</option>
              <option value="In Progress">In Progress</option>
              <option value="Planned">Planned</option>
            </select>
          </div>
        </div>
      </div>

      {/* Controls Table */}
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <table className="w-full">
          <thead className="bg-gray-50 text-xs font-medium uppercase tracking-wider text-gray-500">
            <tr>
              <th className="px-6 py-3 text-left">Control ID</th>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Framework</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Owner</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {sampleData.controls.map((control, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{control.id}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{control.name}</td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {sampleData.frameworks.find((f) => f.id === control.framework)?.name ||
                    control.framework}
                </td>
                <td className="px-6 py-4 text-sm">
                  <StatusBadge status={control.status} />
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{control.owner}</td>
                <td className="px-6 py-4 text-sm">
                  <Link
                    href="/implementation/control-implementation"
                    className="text-blue-600 hover:text-blue-900"
                  >
                    Implement
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t bg-white px-4 py-3 sm:px-6">
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to{" "}
                <span className="font-medium">{sampleData.controls.length}</span> of{" "}
                <span className="font-medium">{sampleData.controls.length}</span>{" "}
                results
              </p>
            </div>
            <div>
              <nav
                className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Previous</span>
                  &laquo;
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center border border-gray-300 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600"
                >
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Next</span>
                  &raquo;
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlLibrary;
