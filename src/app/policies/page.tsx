"use client";
import React from "react";
import { Filter, Plus, Search, FileText, Download, Eye } from "lucide-react";
import { PageHeader } from "@/components/layout/layout-components";

// Sample policy data
const policyData = [
  {
    id: "POL-001",
    name: "Information Security Policy",
    category: "Security",
    owner: "CISO",
    lastUpdated: "2025-01-15",
    status: "Active",
  },
  {
    id: "POL-002",
    name: "Acceptable Use Policy",
    category: "IT",
    owner: "IT Manager",
    lastUpdated: "2025-02-10",
    status: "Active",
  },
  {
    id: "POL-003",
    name: "Data Classification Policy",
    category: "Data",
    owner: "Data Protection Officer",
    lastUpdated: "2025-02-22",
    status: "Active",
  },
  {
    id: "POL-004",
    name: "Mobile Device Management Policy",
    category: "IT",
    owner: "IT Manager",
    lastUpdated: "2024-11-05",
    status: "Under Review",
  },
  {
    id: "POL-005",
    name: "Password Policy",
    category: "Security",
    owner: "CISO",
    lastUpdated: "2025-03-01",
    status: "Active",
  },
  {
    id: "POL-006",
    name: "Third-Party Vendor Management Policy",
    category: "Compliance",
    owner: "Compliance Manager",
    lastUpdated: "2024-12-18",
    status: "Active",
  },
  {
    id: "POL-007",
    name: "Incident Response Policy",
    category: "Security",
    owner: "CISO",
    lastUpdated: "2025-02-05",
    status: "Active",
  },
];

const PolicyLibrary = () => {
  return (
    <div>
      <PageHeader title="Policy Library">
        <button className="rounded-md border bg-white px-4 py-2 shadow-sm hover:bg-gray-50">
          <Filter size={16} className="mr-2 inline" />
          Filter
        </button>
        <button className="rounded-md bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700">
          <Plus size={16} className="mr-2 inline" />
          New Policy
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
              placeholder="Search policies..."
            />
          </div>
          <div>
            <select className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">All Categories</option>
              <option value="Security">Security</option>
              <option value="IT">IT</option>
              <option value="Data">Data</option>
              <option value="Compliance">Compliance</option>
            </select>
          </div>
          <div>
            <select className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Under Review">Under Review</option>
              <option value="Draft">Draft</option>
              <option value="Archived">Archived</option>
            </select>
          </div>
        </div>
      </div>

      {/* Policies Table */}
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <table className="w-full">
          <thead className="bg-gray-50 text-xs font-medium uppercase tracking-wider text-gray-500">
            <tr>
              <th className="px-6 py-3 text-left">Policy ID</th>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Category</th>
              <th className="px-6 py-3 text-left">Owner</th>
              <th className="px-6 py-3 text-left">Last Updated</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {policyData.map((policy, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{policy.id}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  <div className="flex items-center">
                    <FileText size={16} className="mr-2 text-blue-500" />
                    {policy.name}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{policy.category}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{policy.owner}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{policy.lastUpdated}</td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`${
                      policy.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : policy.status === 'Under Review'
                        ? 'bg-yellow-100 text-yellow-800'
                        : policy.status === 'Draft'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-800'
                    } rounded-full px-2.5 py-0.5 text-xs font-medium`}
                  >
                    {policy.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm space-x-3">
                  <button className="text-blue-600 hover:text-blue-900">
                    <Eye size={16} className="inline mr-1" /> View
                  </button>
                  <button className="text-blue-600 hover:text-blue-900">
                    <Download size={16} className="inline mr-1" /> Download
                  </button>
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
                <span className="font-medium">{policyData.length}</span> of{" "}
                <span className="font-medium">{policyData.length}</span>{" "}
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

export default PolicyLibrary;
