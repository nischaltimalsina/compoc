"use client";
import React from "react";
import { Shield, AlertTriangle, Layers, Database, ArrowRight, RefreshCw } from "lucide-react";
import { PageHeader } from "@/components/layout/layout-components";
import { StatusBadge } from "@/components/ui/badges";
import { PageProps, DashboardStat } from "@/lib/types";
import sampleData from "@/data/sample-data";

// Dashboard Component
const Dashboard: React.FC<PageProps> = ({ setActiveScreen }) => {
  // Stats for dashboard
  const stats: DashboardStat[] = [
    {
      title: "Controls",
      count: sampleData.controls.length,
      icon: <Shield size={24} className="text-blue-500" />,
    },
    {
      title: "Risks",
      count: sampleData.risks.length,
      icon: <AlertTriangle size={24} className="text-orange-500" />,
    },
    {
      title: "Frameworks",
      count: sampleData.frameworks.length,
      icon: <Layers size={24} className="text-purple-500" />,
    },
    {
      title: "Assets",
      count: sampleData.assets.length,
      icon: <Database size={24} className="text-green-500" />,
    },
  ];

  // Implementation status counts
  const completedControls = sampleData.controls.filter((c) => c.status === "Completed").length;
  const inProgressControls = sampleData.controls.filter((c) => c.status === "In Progress").length;
  const plannedControls = sampleData.controls.filter((c) => c.status === "Planned").length;

  // Risk severity counts
  const highRisks = sampleData.risks.filter((r) => r.severity === "High").length;
  const mediumRisks = sampleData.risks.filter((r) => r.severity === "Medium").length;
  const lowRisks = sampleData.risks.filter((r) => r.severity === "Low").length;

  return (
    <div>
      <PageHeader title="Dashboard">
        <button className="rounded-md border bg-white px-4 py-2 shadow-sm hover:bg-gray-50">
          <RefreshCw size={16} className="mr-2 inline" />
          Refresh
        </button>
        <button className="rounded-md bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700">
          Export Report
        </button>
      </PageHeader>

      {/* Stat Cards */}
      <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-4">
        {stats.map((stat, index) => (
          <div key={index} className="rounded-lg bg-white p-6 shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-800">{stat.count}</p>
              </div>
              <div className="rounded-full bg-gray-50 p-3">{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts & Tables Row */}
      <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Implementation Status */}
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-lg font-medium text-gray-800">Implementation Status</h2>
          <div className="mb-2 flex items-center space-x-2">
            <div className="h-4 w-full rounded-full bg-gray-200">
              <div
                className="h-4 rounded-full bg-green-500"
                style={{ width: `${(completedControls / sampleData.controls.length) * 100}%` }}
              ></div>
            </div>
            <span className="text-sm font-medium text-gray-600">{completedControls}</span>
          </div>
          <div className="mb-2 flex items-center space-x-2">
            <div className="h-4 w-full rounded-full bg-gray-200">
              <div
                className="h-4 rounded-full bg-blue-500"
                style={{ width: `${(inProgressControls / sampleData.controls.length) * 100}%` }}
              ></div>
            </div>
            <span className="text-sm font-medium text-gray-600">{inProgressControls}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-4 w-full rounded-full bg-gray-200">
              <div
                className="h-4 rounded-full bg-red-500"
                style={{ width: `${(plannedControls / sampleData.controls.length) * 100}%` }}
              ></div>
            </div>
            <span className="text-sm font-medium text-gray-600">{plannedControls}</span>
          </div>
          <div className="mt-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <span className="mr-1 h-3 w-3 rounded-full bg-green-500"></span>
                <span className="text-xs text-gray-600">Completed</span>
              </div>
              <div className="flex items-center">
                <span className="mr-1 h-3 w-3 rounded-full bg-blue-500"></span>
                <span className="text-xs text-gray-600">In Progress</span>
              </div>
              <div className="flex items-center">
                <span className="mr-1 h-3 w-3 rounded-full bg-red-500"></span>
                <span className="text-xs text-gray-600">Planned</span>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Severity */}
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-lg font-medium text-gray-800">Risk Severity</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-lg bg-red-50 p-4">
              <p className="text-sm font-medium text-gray-500">High</p>
              <p className="text-2xl font-bold text-red-600">{highRisks}</p>
            </div>
            <div className="rounded-lg bg-yellow-50 p-4">
              <p className="text-sm font-medium text-gray-500">Medium</p>
              <p className="text-2xl font-bold text-yellow-600">{mediumRisks}</p>
            </div>
            <div className="rounded-lg bg-green-50 p-4">
              <p className="text-sm font-medium text-gray-500">Low</p>
              <p className="text-2xl font-bold text-green-600">{lowRisks}</p>
            </div>
          </div>
          <button
            onClick={() => setActiveScreen && setActiveScreen("risk-management")}
            className="mt-4 flex items-center text-sm text-blue-600 hover:text-blue-800"
          >
            View all risks <ArrowRight size={16} className="ml-1" />
          </button>
        </div>
      </div>

      {/* Recent Activity & Tasks */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Recent Tasks */}
        <div className="rounded-lg bg-white p-6 shadow">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-800">Implementation Tasks</h2>
            <button
              onClick={() => setActiveScreen && setActiveScreen("control-implementation")}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              View all
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b text-xs font-medium text-gray-500">
                <tr>
                  <th className="px-4 py-2 text-left">Control</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left">Due Date</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {sampleData.implementationTasks.slice(0, 3).map((task, index) => (
                  <tr key={index} className="text-sm">
                    <td className="px-4 py-3">
                      <div>
                        <p className="font-medium text-gray-800">{task.controlId}</p>
                        <p className="max-w-xs truncate text-gray-500">{task.description}</p>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <StatusBadge status={task.status} />
                    </td>
                    <td className="px-4 py-3 text-gray-500">{task.dueDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Risk Summary */}
        <div className="rounded-lg bg-white p-6 shadow">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-800">Open Risks</h2>
            <button
              onClick={() => setActiveScreen && setActiveScreen("risk-management")}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              View all
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b text-xs font-medium text-gray-500">
                <tr>
                  <th className="px-4 py-2 text-left">ID</th>
                  <th className="px-4 py-2 text-left">Description</th>
                  <th className="px-4 py-2 text-left">Severity</th>
                  <th className="px-4 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {sampleData.risks
                  .filter((r) => r.status !== "Closed")
                  .slice(0, 3)
                  .map((risk, index) => (
                    <tr key={index} className="text-sm">
                      <td className="px-4 py-3 font-medium text-gray-800">{risk.id}</td>
                      <td className="max-w-xs truncate px-4 py-3 text-gray-500">
                        {risk.description}
                      </td>
                      <td className="px-4 py-3">
                        <span className={`bg-${risk.severity === 'High' ? 'red' : risk.severity === 'Medium' ? 'yellow' : 'green'}-100 text-${risk.severity === 'High' ? 'red' : risk.severity === 'Medium' ? 'yellow' : 'green'}-800 rounded-full px-2.5 py-0.5 text-xs font-medium`}>
                          {risk.severity}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <StatusBadge status={risk.status} />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
