"use client";
import { PageHeader } from "@/components/layout/layout-components";
import sampleData from "@/data/sample-data";
import { useRouter } from "next/navigation";
import React from "react";

// Create a client-side context for sharing selected framework across pages
import { Framework } from "@/lib/types";
import { createContext } from "react";

// Create context to store selected framework
export const FrameworkContext = createContext<{
  selectedFramework: Framework | null;
  setSelectedFramework: (framework: Framework | null) => void;
}>({
  selectedFramework: null,
  setSelectedFramework: () => {},
});

const FrameworkSelection = () => {
  const router = useRouter();

  const handleFrameworkSelect = (framework: Framework) => {

    // Store in session storage for persistence across pages
    if (typeof window !== "undefined") {
      sessionStorage.setItem("selectedFramework", JSON.stringify(framework));
    }

    router.push("/implementation/scope-definition");
  };

  return (
    <div>
      <PageHeader
        title="Select Framework"
        backLink="implementation"
        backAction={() => router.push("/implementation")}
      />

      <div className="mb-6 rounded-lg bg-white p-6 shadow">
        <h2 className="mb-4 text-lg font-medium text-gray-800">Framework Selection</h2>
        <p className="mb-6 text-gray-600">
          Choose a compliance framework to start the implementation workflow.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {sampleData.frameworks.map((framework, index) => (
            <div
              key={index}
              className="cursor-pointer rounded-lg border p-6 hover:border-blue-500 hover:shadow-md"
            >
              <h3 className="mb-2 text-lg font-medium text-gray-800">{framework.name}</h3>
              <p className="mb-4 text-gray-600">{framework.description}</p>
              <button
                onClick={() => handleFrameworkSelect(framework)}
                className="w-full rounded-md bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700"
              >
                Select
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrameworkSelection;
