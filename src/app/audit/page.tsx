"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { AlertTriangle } from "lucide-react";
import { PageHeader } from "@/components/layout/layout-components";
import { StatusBadge } from "@/components/ui/badges";
import sampleData from "@/data/sample-data";

const AuditIntegration = () => {
  const router = useRouter();

  return (
    <div>
      <PageHeader
        title="Audit Integration"
        backLink="control-implementation"
        backAction={() => router.push("/implementation/control-implementation")}
      />

      <div className="mb-6 rounded-lg bg-white p-6 shadow">
        <h2 className="mb-4 text-lg font-medium text-gray-800">Step 6: Audit Integration</h2>
        <p className="mb-6 text-gray-600">
          Prepare for internal or external audits by gathering evidence and reviewing implementation
          status.
        </p>

        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-md mb-2 font-medium text-gray-800">Audit Details</h3>
            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Audit Type</label>
                <select className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="Internal">Internal Audit</option>
                  <option value="External">External Audit</option>
                  <option value="Certification">Certification Audit</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Scheduled Date
                </label>
                <input
                  type="date"
                  className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Audit Checklist
                </label>
                <select className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select Checklist Template</option>
                  <option value="ISO27001">ISO 27001 Internal Audit Checklist</option>
                  <option value="NISTCSF">NIST CSF Audit Checklist</option>
                  <option value="Custom">Custom Checklist</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Audit Lead</label>
                <select className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  {sampleData.users.map((user, i) => (
                    <option key={i} value={user.id}>
                      {user.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-md mb-2 font-medium text-gray-800">Implementation Status</h3>
            <div className="rounded-lg bg-gray-50 p-4">
              <div className="mb-4">
                <div className="mb-1 flex justify-between">
                  <span className="text-sm font-medium text-gray-700">Controls Completed</span>
                  <span className="text-sm font-medium text-gray-700">
                    {sampleData.controls.filter(c => c.status === "Completed").length}/{sampleData.controls.length}
                  </span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-gray-200">
                  <div
                    className="h-2.5 rounded-full bg-green-500"
                    style={{
                      width: `${(sampleData.controls.filter(c => c.status === "Completed").length / sampleData.controls.length) * 100}%`
                    }}
                  ></div>
                </div>
              </div>
              <div className="mb-4">
                <div className="mb-1 flex justify-between">
                  <span className="text-sm font-medium text-gray-700">Tasks Completed</span>
                  <span className="text-sm font-medium text-gray-700">
                    {sampleData.implementationTasks.filter(t => t.status === "Completed").length}/{sampleData.implementationTasks.length}
                  </span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-gray-200">
                  <div
                    className="h-2.5 rounded-full bg-green-500"
                    style={{
                      width: `${(sampleData.implementationTasks.filter(t => t.status === "Completed").length / sampleData.implementationTasks.length) * 100}%`
                    }}
                  ></div>
                </div>
              </div>
              <div className="mb-4">
                <div className="mb-1 flex justify-between">
                  <span className="text-sm font-medium text-gray-700">Risks Mitigated</span>
                  <span className="text-sm font-medium text-gray-700">
                    {sampleData.risks.filter(r => r.status === "Closed").length}/{sampleData.risks.length}
                  </span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-gray-200">
                  <div
                    className="h-2.5 rounded-full bg-green-500"
                    style={{
                      width: `${(sampleData.risks.filter(r => r.status === "Closed").length / sampleData.risks.length) * 100}%`
                    }}
                  ></div>
                </div>
              </div>
              <div className="mt-4 rounded-md border border-yellow-200 bg-yellow-50 p-4">
                <p className="text-sm text-yellow-800">
                  <AlertTriangle size={16} className="mr-2 inline" />
                  Some implementations are still in progress. Consider completing them before audit.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-md mb-2 font-medium text-gray-800">Evidence Collection</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 text-xs font-medium uppercase tracking-wider text-gray-500">
              <tr>
                <th className="px-6 py-3 text-left">Control ID</th>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Implementation Status</th>
                <th className="px-6 py-3 text-left">Evidence</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {sampleData.controls.slice(0, 3).map((control, index) => {
                const evidence = sampleData.evidence.find((e) => e.linkedControl === control.id);
                return (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{control.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{control.name}</td>
                    <td className="px-6 py-4 text-sm">
                      <StatusBadge status={control.status} />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {evidence ? evidence.description : "No evidence attached"}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <button className="text-blue-600 hover:text-blue-900">
                        {evidence ? "View" : "Upload"}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex justify-end space-x-2">
          <button
            onClick={() => router.push("/")}
            className="rounded-md bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700"
          >
            Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuditIntegration;
