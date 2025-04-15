"use client";
import React from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { PageHeader } from "@/components/layout/layout-components";

const ImplementationWorkflow: React.FC = () => {
  return (
    <div>
      <PageHeader title="Implementation Workflow">
        <Link
          href="/implementation/framework-selection"
          className="rounded-md bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700"
        >
          <Plus size={16} className="mr-2 inline" />
          New Implementation
        </Link>
      </PageHeader>

      {/* Workflow Steps */}
      <div className="mb-6 rounded-lg bg-white p-6 shadow">
        <h2 className="mb-4 text-lg font-medium text-gray-800">
          ISO 27001 Implementation Workflow
        </h2>
        <div className="mb-8 flex items-center px-12">
          <div className="relative flex items-center justify-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white">
              1
            </div>
            <div className="absolute -bottom-6 w-max text-center text-sm font-medium text-gray-600">
              Framework Selection
            </div>
          </div>
          <div className="h-1 flex-1 bg-blue-200"></div>
          <div className="relative flex items-center justify-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white">
              2
            </div>
            <div className="absolute -bottom-6 w-max text-center text-sm font-medium text-gray-600">
              Scope Definition
            </div>
          </div>
          <div className="h-1 flex-1 bg-blue-200"></div>
          <div className="relative flex items-center justify-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white">
              3
            </div>
            <div className="absolute -bottom-6 w-max text-center text-sm font-medium text-gray-600">
              Gap Assessment
            </div>
          </div>
          <div className="h-1 flex-1 bg-gray-200"></div>
          <div className="relative flex items-center justify-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-500">
              4
            </div>
            <div className="absolute -bottom-6 w-max text-center text-sm font-medium text-gray-600">
              Risk Management
            </div>
          </div>
          <div className="h-1 flex-1 bg-gray-200"></div>
          <div className="relative flex items-center justify-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-500">
              5
            </div>
            <div className="absolute -bottom-6 w-max text-center text-sm font-medium text-gray-600">
              Control Implementation
            </div>
          </div>
          <div className="h-1 flex-1 bg-gray-200"></div>
          <div className="relative flex items-center justify-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-500">
              6
            </div>
            <div className="absolute -bottom-6 w-max text-center text-sm font-medium text-gray-600">
              Audit Integration
            </div>
          </div>
        </div>
      </div>

      {/* Active Implementations */}
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="p-6">
          <h2 className="mb-4 text-lg font-medium text-gray-800">Active Implementations</h2>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50 text-xs font-medium uppercase tracking-wider text-gray-500">
            <tr>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Framework</th>
              <th className="px-6 py-3 text-left">Current Stage</th>
              <th className="px-6 py-3 text-left">Progress</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                Corporate IT Implementation
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">ISO 27001:2022</td>
              <td className="px-6 py-4 text-sm text-gray-500">Gap Assessment</td>
              <td className="px-6 py-4 text-sm text-gray-500">
                <div className="h-2.5 w-full rounded-full bg-gray-200">
                  <div className="h-2.5 rounded-full bg-blue-600" style={{ width: "45%" }}></div>
                </div>
                <span className="text-xs text-gray-500">45% Complete</span>
              </td>
              <td className="px-6 py-4 text-sm">
                <Link
                  href="/implementation/gap-assessment"
                  className="text-blue-600 hover:text-blue-900"
                >
                  Continue
                </Link>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Cloud Infrastructure</td>
              <td className="px-6 py-4 text-sm text-gray-500">NIST CSF</td>
              <td className="px-6 py-4 text-sm text-gray-500">Risk Management</td>
              <td className="px-6 py-4 text-sm text-gray-500">
                <div className="h-2.5 w-full rounded-full bg-gray-200">
                  <div className="h-2.5 rounded-full bg-blue-600" style={{ width: "60%" }}></div>
                </div>
                <span className="text-xs text-gray-500">60% Complete</span>
              </td>
              <td className="px-6 py-4 text-sm">
                <Link
                  href="/risk-management"
                  className="text-blue-600 hover:text-blue-900"
                >
                  Continue
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ImplementationWorkflow;
