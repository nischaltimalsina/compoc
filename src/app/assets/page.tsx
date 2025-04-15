"use client";
import React from "react";
import { Filter, Plus, Search } from "lucide-react";
import { PageHeader } from "@/components/layout/layout-components";
import sampleData from "@/data/sample-data";

const AssetRegistry = () => {
  return (
    <div>
      <PageHeader title="Asset Registry">
        <button className="rounded-md border bg-white px-4 py-2 shadow-sm hover:bg-gray-50">
          <Filter size={16} className="mr-2 inline" />
          Filter
        </button>
        <button className="rounded-md bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700">
          <Plus size={16} className="mr-2 inline" />
          Add Asset
        </button>
      </PageHeader>

      {/* Search and Filters */}
      <div className="mb-6 rounded-lg bg-white p-4 shadow">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              className="w-full rounded-md border py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search assets..."
            />
          </div>
          <div>
            <select className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">All Asset Types</option>
              <option value="Server">Server</option>
              <option value="Cloud Service">Cloud Service</option>
              <option value="Application">Application</option>
              <option value="Network">Network</option>
              <option value="Endpoint">Endpoint</option>
            </select>
          </div>
          <div>
            <select className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">All Departments</option>
              {sampleData.departments.map((dept, index) => (
                <option key={index} value={dept.id}>
                  {dept.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Assets Table */}
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <table className="w-full">
          <thead className="bg-gray-50 text-xs font-medium uppercase tracking-wider text-gray-500">
            <tr>
              <th className="px-6 py-3 text-left">Asset ID</th>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Type</th>
              <th className="px-6 py-3 text-left">Department</th>
              <th className="px-6 py-3 text-left">Risk Level</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {sampleData.assets.map((asset, index) => {
              const department = sampleData.departments.find(d => d.id === asset.department);
              // For demo purposes, we're generating a random risk level
              const riskLevels = ['Low', 'Medium', 'High'];
              const randomRisk = riskLevels[Math.floor(Math.random() * riskLevels.length)];

              return (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{asset.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{asset.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{asset.type}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {department?.name || asset.department}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`${randomRisk === 'High' ? 'bg-red-100 text-red-800' : randomRisk === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}
                                rounded-full px-2.5 py-0.5 text-xs font-medium`}
                    >
                      {randomRisk}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm space-x-2">
                    <button className="text-blue-600 hover:text-blue-900">View</button>
                    <button className="text-blue-600 hover:text-blue-900">Edit</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t bg-white px-4 py-3 sm:px-6">
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to{" "}
                <span className="font-medium">{sampleData.assets.length}</span> of{" "}
                <span className="font-medium">{sampleData.assets.length}</span>{" "}
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

export default AssetRegistry;
