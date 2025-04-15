"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Filter, Plus } from "lucide-react";
import { PageHeader } from "@/components/layout/layout-components";
import { StatusBadge } from "@/components/ui/badges";
import sampleData from "@/data/sample-data";

const RiskManagement = () => {
  const router = useRouter();

  return (
    <div>
      <PageHeader
        title="Risk Management"
        backLink="gap-assessment"
        backAction={() => router.push("/implementation/gap-assessment")}
      >
        <button className="rounded-md border bg-white px-4 py-2 shadow-sm hover:bg-gray-50">
          <Filter size={16} className="mr-2 inline" />
          Filter
        </button>
        <button className="rounded-md bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700">
          <Plus size={16} className="mr-2 inline" />
          Add Risk
        </button>
      </PageHeader>

      <div className="mb-6 rounded-lg bg-white p-6 shadow">
        <h2 className="mb-4 text-lg font-medium text-gray-800">Risk Management</h2>
        <p className="mb-6 text-gray-600">
          Identify, assess, and manage risks associated with non-compliant controls.
        </p>

        <div className="mb-4 flex items-center justify-between">
          <div>
            <span className="text-sm font-medium text-gray-700">
              Risks identified from gap assessment:{" "}
            </span>
            <span className="text-sm font-medium text-blue-600">{sampleData.risks.length}</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 text-xs font-medium uppercase tracking-wider text-gray-500">
              <tr>
                <th className="px-6 py-3 text-left">ID</th>
                <th className="px-6 py-3 text-left">Description</th>
                <th className="px-6 py-3 text-left">Linked Control</th>
                <th className="px-6 py-3 text-left">Severity</th>
                <th className="px-6 py-3 text-left">Mitigation Strategy</th>
                <th className="px-6 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {sampleData.risks.map((risk, index) => {
                const control = sampleData.controls.find((c) => c.id === risk.linkedControl);
                return (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{risk.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{risk.description}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {control ? `${control.id} - ${control.name}` : risk.linkedControl}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <select className="rounded-md border px-2 py-1 text-sm">
                        <option value="High" selected={risk.severity === "High"}>
                          High
                        </option>
                        <option value="Medium" selected={risk.severity === "Medium"}>
                          Medium
                        </option>
                        <option value="Low" selected={risk.severity === "Low"}>
                          Low
                        </option>
                      </select>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <select className="rounded-md border px-2 py-1 text-sm">
                        <option value="Mitigate">Mitigate</option>
                        <option value="Accept">Accept</option>
                        <option value="Transfer">Transfer</option>
                        <option value="Avoid">Avoid</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <StatusBadge status={risk.status} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex justify-end space-x-2">
          <button
            onClick={() => router.push("/implementation/control-implementation")}
            className="rounded-md bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700"
          >
            Next: Control Implementation
          </button>
        </div>
      </div>
    </div>
  );
};

export default RiskManagement;
