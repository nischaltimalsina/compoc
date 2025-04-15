"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Filter, Upload } from "lucide-react";
import { PageHeader } from "@/components/layout/layout-components";
import sampleData from "@/data/sample-data";
import { useFramework } from "@/components/context/framework-provider";

const GapAssessment = () => {
  const router = useRouter();
  const { selectedFramework } = useFramework();

  // Redirect if no framework selected
  useEffect(() => {
    if (!selectedFramework && typeof window !== "undefined") {
      // Check if we have a framework in session storage
      const storedFramework = sessionStorage.getItem("selectedFramework");
      if (!storedFramework) {
        router.push("/implementation/framework-selection");
      }
    }
  }, [selectedFramework, router]);

  return (
    <div>
      <PageHeader
        title="Gap Assessment"
        backLink="scope-definition"
        backAction={() => router.push("/implementation/scope-definition")}
      />

      <div className="mb-6 rounded-lg bg-white p-6 shadow">
        <h2 className="mb-4 text-lg font-medium text-gray-800">Gap Assessment</h2>
        <p className="mb-6 text-gray-600">
          Evaluate your current compliance status against the selected framework.
        </p>

        <div className="mb-4 flex items-center justify-between">
          <div>
            <span className="text-sm font-medium text-gray-700">Showing controls for: </span>
            <span className="text-sm font-medium text-blue-600">
              {selectedFramework?.name || "ISO 27001:2022"}
            </span>
          </div>
          <div className="flex space-x-2">
            <button className="rounded-md border bg-white px-4 py-2 shadow-sm hover:bg-gray-50">
              <Filter size={16} className="mr-2 inline" />
              Filter
            </button>
            <button className="rounded-md border bg-white px-4 py-2 shadow-sm hover:bg-gray-50">
              <Upload size={16} className="mr-2 inline" />
              Import Assessment
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 text-xs font-medium uppercase tracking-wider text-gray-500">
              <tr>
                <th className="px-6 py-3 text-left">Control ID</th>
                <th className="px-6 py-3 text-left">Control Name</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-left">Gap Description</th>
                <th className="px-6 py-3 text-left">Evidence</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {sampleData.gapAssessments.map((assessment, index) => {
                const control = sampleData.controls.find((c) => c.id === assessment.controlId);
                return (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {assessment.controlId}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {control?.name || "Unknown Control"}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <select className="rounded-md border px-2 py-1 text-sm">
                        <option value="Compliant" selected={assessment.status === "Compliant"}>
                          Compliant
                        </option>
                        <option
                          value="Partially Compliant"
                          selected={assessment.status === "Partially Compliant"}
                        >
                          Partially Compliant
                        </option>
                        <option
                          value="Non-Compliant"
                          selected={assessment.status === "Non-Compliant"}
                        >
                          Non-Compliant
                        </option>
                      </select>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <input
                        type="text"
                        className="w-full rounded-md border px-2 py-1 text-sm"
                        defaultValue={assessment.gapDescription}
                        placeholder="Describe any gaps..."
                      />
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <select className="rounded-md border px-2 py-1 text-sm">
                          <option value="">Select Evidence</option>
                          {sampleData.evidence.map((ev, i) => (
                            <option key={i} value={ev.id} selected={assessment.evidence === ev.id}>
                              {ev.description}
                            </option>
                          ))}
                        </select>
                        <button className="p-1 text-blue-600 hover:text-blue-800">
                          <Upload size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex justify-end space-x-2">
          <button
            onClick={() => router.push("/risk-management")}
            className="rounded-md bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700"
          >
            Next: Risk Management
          </button>
        </div>
      </div>
    </div>
  );
};

export default GapAssessment;
