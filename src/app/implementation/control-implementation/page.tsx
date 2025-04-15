"use client";
import { PageHeader } from "@/components/layout/layout-components";
import sampleData from "@/data/sample-data";
import { Filter, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

const ControlImplementation = () => {
  const router = useRouter();

  return (
    <div>
      <PageHeader
        title="Control Implementation"
        backLink="risk-management"
        backAction={() => router.push("/risk-management")}
      >
        <button className="rounded-md border bg-white px-4 py-2 shadow-sm hover:bg-gray-50">
          <Filter size={16} className="mr-2 inline" />
          Filter
        </button>
        <button className="rounded-md bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700">
          <Plus size={16} className="mr-2 inline" />
          Add Task
        </button>
      </PageHeader>

      <div className="mb-6 rounded-lg bg-white p-6 shadow">
        <h2 className="mb-4 text-lg font-medium text-gray-800"> Control Implementation</h2>
        <p className="mb-6 text-gray-600">
          Implement controls to address identified gaps and mitigate risks.
        </p>

        <div className="mb-4 flex items-center justify-between">
          <div>
            <span className="text-sm font-medium text-gray-700">Implementation tasks: </span>
            <span className="text-sm font-medium text-blue-600">
              {sampleData.implementationTasks.length}
            </span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 text-xs font-medium uppercase tracking-wider text-gray-500">
              <tr>
                <th className="px-6 py-3 text-left">ID</th>
                <th className="px-6 py-3 text-left">Control</th>
                <th className="px-6 py-3 text-left">Description</th>
                <th className="px-6 py-3 text-left">Task Type</th>
                <th className="px-6 py-3 text-left">Assigned To</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-left">Due Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {sampleData.implementationTasks.map((task, index) => {
                // const control = sampleData.controls.find((c) => c.id === task.controlId);
                // const assignee = sampleData.users.find((u) => u.id === task.assignedTo);
                return (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{task.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{task.controlId}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{task.description}</td>
                    <td className="px-6 py-4 text-sm">
                      <select className="rounded-md border px-2 py-1 text-sm">
                        <option value="Policy">Policy</option>
                        <option value="Procedure">Procedure</option>
                        <option value="Evidence">Evidence</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      <select className="rounded-md border px-2 py-1 text-sm">
                        {sampleData.users.map((user, i) => (
                          <option key={i} value={user.id} selected={task.assignedTo === user.id}>
                            {user.name}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <select className="rounded-md border px-2 py-1 text-sm">
                        <option value="Planned" selected={task.status === "Planned"}>
                          Planned
                        </option>
                        <option value="In Progress" selected={task.status === "In Progress"}>
                          In Progress
                        </option>
                        <option value="Completed" selected={task.status === "Completed"}>
                          Completed
                        </option>
                      </select>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      <input
                        type="date"
                        className="rounded-md border px-2 py-1 text-sm"
                        defaultValue={task.dueDate}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex justify-end space-x-2">
          <button
            onClick={() => router.push("/audit")}
            className="rounded-md bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700"
          >
            Next: Audit Integration
          </button>
        </div>
      </div>
    </div>
  );
};

export default ControlImplementation;
