"use client";
import { useFramework } from "@/components/context/framework-provider";
import { PageHeader } from "@/components/layout/layout-components";
import sampleData from "@/data/sample-data";
import { Framework } from "@/lib/types";
import { useRouter } from "next/navigation";

const FrameworkSelection = () => {
  const router = useRouter();
  const { setSelectedFramework } = useFramework();

  const handleFrameworkSelect = (framework: Framework) => {
    setSelectedFramework(framework);
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
        <h2 className="mb-4 text-lg font-medium text-gray-800">Step 1: Framework Selection</h2>
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
