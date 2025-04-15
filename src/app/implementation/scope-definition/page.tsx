"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Upload } from "lucide-react";
import { PageHeader } from "@/components/layout/layout-components";
import sampleData from "@/data/sample-data";
import { useFramework } from "@/components/context/framework-provider";

const ScopeDefinition = () => {
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
        title="Scope Definition"
        backLink="framework-selection"
        backAction={() => router.push("/implementation/framework-selection")}
      />

      <div className="mb-6 rounded-lg bg-white p-6 shadow">
        <h2 className="mb-4 text-lg font-medium text-gray-800">Step 2: Scope Definition</h2>
        <p className="mb-6 text-gray-600">
          Define the scope of your {selectedFramework?.name || "framework"} implementation.
        </p>

        <form>
          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium text-gray-700">Scope Name</label>
            <input
              type="text"
              className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Corporate IT Implementation"
            />
          </div>

          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium text-gray-700">Departments</label>
            <select
              multiple
              className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              size={4}
            >
              {sampleData.departments.map((dept, index) => (
                <option key={index} value={dept.id}>
                  {dept.name}
                </option>
              ))}
            </select>
            <p className="mt-1 text-xs text-gray-500">
              Hold Ctrl/Cmd to select multiple departments
            </p>
          </div>

          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium text-gray-700">Assets Included</label>
            <select
              multiple
              className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              size={4}
            >
              {sampleData.assets.map((asset, index) => (
                <option key={index} value={asset.id}>
                  {asset.name} ({asset.type})
                </option>
              ))}
            </select>
            <p className="mt-1 text-xs text-gray-500">Hold Ctrl/Cmd to select multiple assets</p>
          </div>

          <div className="mb-6">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Supporting Documents
            </label>
            <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pb-6 pt-5">
              <div className="space-y-1 text-center">
                <Upload size={24} className="mx-auto text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-medium text-blue-600 hover:text-blue-500"
                  >
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => router.push("/implementation/gap-assessment")}
              className="rounded-md bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700"
            >
              Next: Gap Assessment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScopeDefinition;
