"use client"
import React, { useState } from "react"
import {
  Bell,
  ChevronDown,
  Home,
  Layers,
  Lock,
  Settings,
  Shield,
  AlertTriangle,
  FileText,
  Database,
  Users,
  CheckSquare,
  BarChart2,
  Calendar,
  Search,
  Plus,
  Filter,
  ArrowRight,
  Upload,
  RefreshCw,
} from "lucide-react"

// Sample data for our UI mockups
const sampleData = {
  frameworks: [
    { id: "ISO27001", name: "ISO 27001:2022", description: "Information Security Management" },
    { id: "NISTCSF", name: "NIST CSF", description: "Cybersecurity Framework" },
    { id: "QCSF", name: "QCSF", description: "Quantum Cybersecurity Framework" },
  ],

  controls: [
    {
      id: "A.5.1",
      name: "Information Security Policies",
      framework: "ISO27001",
      status: "Completed",
      owner: "John Davis",
    },
    {
      id: "A.5.2",
      name: "Review of policies for information security",
      framework: "ISO27001",
      status: "In Progress",
      owner: "Sarah Miller",
    },
    {
      id: "A.6.1",
      name: "Internal organization",
      framework: "ISO27001",
      status: "Planned",
      owner: "Robert Johnson",
    },
    {
      id: "A.6.2",
      name: "Mobile devices and teleworking",
      framework: "ISO27001",
      status: "In Progress",
      owner: "Lisa Wang",
    },
    {
      id: "ID.AM-1",
      name: "Physical devices inventory",
      framework: "NISTCSF",
      status: "Completed",
      owner: "Michael Brown",
    },
    {
      id: "ID.AM-2",
      name: "Software platforms inventory",
      framework: "NISTCSF",
      status: "Planned",
      owner: "Jennifer Lee",
    },
  ],

  departments: [
    { id: "IT", name: "Information Technology" },
    { id: "HR", name: "Human Resources" },
    { id: "FIN", name: "Finance" },
    { id: "OPS", name: "Operations" },
    { id: "LEGAL", name: "Legal" },
  ],

  assets: [
    { id: "SRV001", name: "Primary Database Server", type: "Server", department: "IT" },
    { id: "CLD001", name: "Cloud Storage Instance", type: "Cloud Service", department: "IT" },
    { id: "APP001", name: "Customer Management System", type: "Application", department: "OPS" },
    { id: "NTW001", name: "Primary Network Infrastructure", type: "Network", department: "IT" },
    { id: "END001", name: "Employee Workstations", type: "Endpoint", department: "ALL" },
  ],

  users: [
    { id: "JD001", name: "John Davis", role: "CISO", department: "IT" },
    { id: "SM001", name: "Sarah Miller", role: "Compliance Manager", department: "LEGAL" },
    { id: "RJ001", name: "Robert Johnson", role: "IT Manager", department: "IT" },
    { id: "LW001", name: "Lisa Wang", role: "Risk Analyst", department: "OPS" },
    { id: "MB001", name: "Michael Brown", role: "IT Security Specialist", department: "IT" },
    { id: "JL001", name: "Jennifer Lee", role: "Compliance Analyst", department: "LEGAL" },
  ],

  risks: [
    {
      id: "R001",
      description: "Unauthorized access to customer data",
      severity: "High",
      linkedControl: "A.5.1",
      status: "Open",
    },
    {
      id: "R002",
      description: "Insecure mobile device usage",
      severity: "Medium",
      linkedControl: "A.6.2",
      status: "In Progress",
    },
    {
      id: "R003",
      description: "Incomplete asset inventory",
      severity: "Medium",
      linkedControl: "ID.AM-1",
      status: "Closed",
    },
    {
      id: "R004",
      description: "Outdated security policies",
      severity: "Low",
      linkedControl: "A.5.2",
      status: "Open",
    },
    {
      id: "R005",
      description: "Insecure cloud storage configuration",
      severity: "High",
      linkedControl: "CLD001",
      status: "In Progress",
    },
  ],

  evidence: [
    {
      id: "E001",
      description: "Information Security Policy Document",
      linkedControl: "A.5.1",
      type: "Document",
    },
    {
      id: "E002",
      description: "Mobile Device Management Configuration",
      linkedControl: "A.6.2",
      type: "Screenshot",
    },
    { id: "E003", description: "Asset Inventory Report", linkedControl: "ID.AM-1", type: "Report" },
    {
      id: "E004",
      description: "Policy Review Meeting Minutes",
      linkedControl: "A.5.2",
      type: "Document",
    },
  ],

  gapAssessments: [
    { controlId: "A.5.1", status: "Compliant", gapDescription: "None", evidence: "E001" },
    {
      controlId: "A.5.2",
      status: "Non-Compliant",
      gapDescription: "Policies have not been reviewed in over 24 months",
      evidence: "E004",
    },
    {
      controlId: "A.6.1",
      status: "Partially Compliant",
      gapDescription: "Roles and responsibilities not clearly defined",
      evidence: null,
    },
    {
      controlId: "A.6.2",
      status: "Non-Compliant",
      gapDescription: "No mobile device management solution in place",
      evidence: "E002",
    },
    { controlId: "ID.AM-1", status: "Compliant", gapDescription: "None", evidence: "E003" },
    {
      controlId: "ID.AM-2",
      status: "Non-Compliant",
      gapDescription: "Software inventory incomplete",
      evidence: null,
    },
  ],

  implementationTasks: [
    {
      id: "T001",
      controlId: "A.5.2",
      description: "Conduct comprehensive review of information security policies",
      assignedTo: "SM001",
      status: "In Progress",
      dueDate: "2025-05-15",
    },
    {
      id: "T002",
      controlId: "A.6.1",
      description: "Define roles and responsibilities for information security",
      assignedTo: "JD001",
      status: "Planned",
      dueDate: "2025-05-30",
    },
    {
      id: "T003",
      controlId: "A.6.2",
      description: "Implement mobile device management solution",
      assignedTo: "MB001",
      status: "In Progress",
      dueDate: "2025-06-10",
    },
    {
      id: "T004",
      controlId: "ID.AM-2",
      description: "Complete software inventory",
      assignedTo: "RJ001",
      status: "Planned",
      dueDate: "2025-05-20",
    },
  ],
}

// Get user name from assigned user ID
const getUserName = (userId) => {
  const user = sampleData.users.find((u) => u.id === userId)
  return user ? user.name : "Unassigned"
}

// Helper for status badges
const StatusBadge = ({ status }) => {
  let bgColor = "bg-gray-100"
  let textColor = "text-gray-700"

  switch (status) {
    case "Completed":
    case "Compliant":
    case "Closed":
      bgColor = "bg-green-100"
      textColor = "text-green-800"
      break
    case "In Progress":
    case "Partially Compliant":
      bgColor = "bg-blue-100"
      textColor = "text-blue-800"
      break
    case "Planned":
    case "Open":
    case "Non-Compliant":
      bgColor = "bg-red-100"
      textColor = "text-red-800"
      break
  }

  return (
    <span className={`${bgColor} ${textColor} rounded-full px-2.5 py-0.5 text-xs font-medium`}>
      {status}
    </span>
  )
}

// Helper for severity badges
const SeverityBadge = ({ severity }) => {
  let bgColor = "bg-gray-100"
  let textColor = "text-gray-700"

  switch (severity) {
    case "High":
      bgColor = "bg-red-100"
      textColor = "text-red-800"
      break
    case "Medium":
      bgColor = "bg-yellow-100"
      textColor = "text-yellow-800"
      break
    case "Low":
      bgColor = "bg-green-100"
      textColor = "text-green-800"
      break
  }

  return (
    <span className={`${bgColor} ${textColor} rounded-full px-2.5 py-0.5 text-xs font-medium`}>
      {severity}
    </span>
  )
}

// Main App Component
const GRCPlatform = () => {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [activeScreen, setActiveScreen] = useState("dashboard")
  const [selectedFramework, setSelectedFramework] = useState(null)

  const renderContent = () => {
    switch (activeScreen) {
      case "dashboard":
        return <Dashboard setActiveScreen={setActiveScreen} />
      case "control-library":
        return <ControlLibrary setActiveScreen={setActiveScreen} />
      case "implementation-workflow":
        return (
          <ImplementationWorkflow
            setActiveScreen={setActiveScreen}
            setSelectedFramework={setSelectedFramework}
          />
        )
      case "framework-selection":
        return (
          <FrameworkSelection
            setActiveScreen={setActiveScreen}
            setSelectedFramework={setSelectedFramework}
          />
        )
      case "scope-definition":
        return <ScopeDefinition setActiveScreen={setActiveScreen} framework={selectedFramework} />
      case "gap-assessment":
        return <GapAssessment setActiveScreen={setActiveScreen} framework={selectedFramework} />
      case "risk-management":
        return <RiskManagement setActiveScreen={setActiveScreen} />
      case "control-implementation":
        return <ControlImplementation setActiveScreen={setActiveScreen} />
      case "audit-integration":
        return <AuditIntegration setActiveScreen={setActiveScreen} />
      default:
        return <Dashboard setActiveScreen={setActiveScreen} />
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="border-b p-4">
          <h1 className="text-xl font-bold text-gray-800">GRC Platform</h1>
        </div>

        <div className="p-4">
          <nav>
            <ul>
              <li className={`mb-2 ${activeTab === "dashboard" ? "bg-blue-50 text-blue-700" : ""}`}>
                <button
                  onClick={() => {
                    setActiveTab("dashboard")
                    setActiveScreen("dashboard")
                  }}
                  className="flex w-full items-center rounded p-2 hover:bg-gray-100"
                >
                  <Home size={18} className="mr-2" />
                  <span>Dashboard</span>
                </button>
              </li>
              <li
                className={`mb-2 ${activeTab === "control-library" ? "bg-blue-50 text-blue-700" : ""}`}
              >
                <button
                  onClick={() => {
                    setActiveTab("control-library")
                    setActiveScreen("control-library")
                  }}
                  className="flex w-full items-center rounded p-2 hover:bg-gray-100"
                >
                  <Shield size={18} className="mr-2" />
                  <span>Control Library</span>
                </button>
              </li>
              <li
                className={`mb-2 ${activeTab === "implementation" ? "bg-blue-50 text-blue-700" : ""}`}
              >
                <button
                  onClick={() => {
                    setActiveTab("implementation")
                    setActiveScreen("implementation-workflow")
                  }}
                  className="flex w-full items-center rounded p-2 hover:bg-gray-100"
                >
                  <CheckSquare size={18} className="mr-2" />
                  <span>Implementation</span>
                </button>
              </li>
              <li className={`mb-2 ${activeTab === "risks" ? "bg-blue-50 text-blue-700" : ""}`}>
                <button
                  onClick={() => {
                    setActiveTab("risks")
                    setActiveScreen("risk-management")
                  }}
                  className="flex w-full items-center rounded p-2 hover:bg-gray-100"
                >
                  <AlertTriangle size={18} className="mr-2" />
                  <span>Risk Register</span>
                </button>
              </li>
              <li className={`mb-2 ${activeTab === "assets" ? "bg-blue-50 text-blue-700" : ""}`}>
                <button
                  onClick={() => {
                    setActiveTab("assets")
                  }}
                  className="flex w-full items-center rounded p-2 hover:bg-gray-100"
                >
                  <Database size={18} className="mr-2" />
                  <span>Asset Registry</span>
                </button>
              </li>
              <li className={`mb-2 ${activeTab === "policies" ? "bg-blue-50 text-blue-700" : ""}`}>
                <button
                  onClick={() => {
                    setActiveTab("policies")
                  }}
                  className="flex w-full items-center rounded p-2 hover:bg-gray-100"
                >
                  <FileText size={18} className="mr-2" />
                  <span>Policy Library</span>
                </button>
              </li>
              <li className={`mb-2 ${activeTab === "evidence" ? "bg-blue-50 text-blue-700" : ""}`}>
                <button
                  onClick={() => {
                    setActiveTab("evidence")
                  }}
                  className="flex w-full items-center rounded p-2 hover:bg-gray-100"
                >
                  <Layers size={18} className="mr-2" />
                  <span>Evidence Repository</span>
                </button>
              </li>
              <li className={`mb-2 ${activeTab === "audit" ? "bg-blue-50 text-blue-700" : ""}`}>
                <button
                  onClick={() => {
                    setActiveTab("audit")
                    setActiveScreen("audit-integration")
                  }}
                  className="flex w-full items-center rounded p-2 hover:bg-gray-100"
                >
                  <CheckSquare size={18} className="mr-2" />
                  <span>Audit Management</span>
                </button>
              </li>
              <li className={`mb-2 ${activeTab === "users" ? "bg-blue-50 text-blue-700" : ""}`}>
                <button
                  onClick={() => {
                    setActiveTab("users")
                  }}
                  className="flex w-full items-center rounded p-2 hover:bg-gray-100"
                >
                  <Users size={18} className="mr-2" />
                  <span>User Directory</span>
                </button>
              </li>
              <li className={`mb-2 ${activeTab === "settings" ? "bg-blue-50 text-blue-700" : ""}`}>
                <button
                  onClick={() => {
                    setActiveTab("settings")
                  }}
                  className="flex w-full items-center rounded p-2 hover:bg-gray-100"
                >
                  <Settings size={18} className="mr-2" />
                  <span>Settings</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Navigation */}
        <div className="flex items-center justify-between bg-white p-4 shadow-sm">
          <div>
            <h2 className="text-lg font-medium text-gray-800">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            <button className="rounded-full p-2 hover:bg-gray-100">
              <Search size={20} />
            </button>
            <button className="relative rounded-full p-2 hover:bg-gray-100">
              <Bell size={20} />
              <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 font-medium text-white">
                JD
              </div>
              <span className="text-sm font-medium">John Davis</span>
              <ChevronDown size={16} />
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="p-6">{renderContent()}</div>
      </div>
    </div>
  )
}

// Dashboard Component
const Dashboard = ({ setActiveScreen }) => {
  // Stats for dashboard
  const stats = [
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
  ]

  // Implementation status counts
  const completedControls = sampleData.controls.filter((c) => c.status === "Completed").length
  const inProgressControls = sampleData.controls.filter((c) => c.status === "In Progress").length
  const plannedControls = sampleData.controls.filter((c) => c.status === "Planned").length

  // Risk severity counts
  const highRisks = sampleData.risks.filter((r) => r.severity === "High").length
  const mediumRisks = sampleData.risks.filter((r) => r.severity === "Medium").length
  const lowRisks = sampleData.risks.filter((r) => r.severity === "Low").length

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex space-x-2">
          <button className="rounded-md border bg-white px-4 py-2 shadow-sm hover:bg-gray-50">
            <RefreshCw size={16} className="mr-2 inline" />
            Refresh
          </button>
          <button className="rounded-md bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700">
            Export Report
          </button>
        </div>
      </div>

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
            onClick={() => setActiveScreen("risk-management")}
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
              onClick={() => setActiveScreen("control-implementation")}
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
              onClick={() => setActiveScreen("risk-management")}
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
                        <SeverityBadge severity={risk.severity} />
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
  )
}

// Control Library Component
const ControlLibrary = ({ setActiveScreen }) => {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Control Library</h1>
        <div className="flex space-x-2">
          <button className="rounded-md border bg-white px-4 py-2 shadow-sm hover:bg-gray-50">
            <Filter size={16} className="mr-2 inline" />
            Filter
          </button>
          <button className="rounded-md bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700">
            <Plus size={16} className="mr-2 inline" />
            Add Control
          </button>
        </div>
      </div>

      {/* Search and Framework Filter */}
      <div className="mb-6 rounded-lg bg-white p-4 shadow">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              className="w-full rounded-md border py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search controls..."
            />
          </div>
          <div>
            <select className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">All Frameworks</option>
              {sampleData.frameworks.map((framework, index) => (
                <option key={index} value={framework.id}>
                  {framework.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">All Statuses</option>
              <option value="Completed">Completed</option>
              <option value="In Progress">In Progress</option>
              <option value="Planned">Planned</option>
            </select>
          </div>
        </div>
      </div>

      {/* Controls Table */}
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <table className="w-full">
          <thead className="bg-gray-50 text-xs font-medium uppercase tracking-wider text-gray-500">
            <tr>
              <th className="px-6 py-3 text-left">Control ID</th>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Framework</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Owner</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {sampleData.controls.map((control, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{control.id}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{control.name}</td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {sampleData.frameworks.find((f) => f.id === control.framework)?.name ||
                    control.framework}
                </td>
                <td className="px-6 py-4 text-sm">
                  <StatusBadge status={control.status} />
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{control.owner}</td>
                <td className="px-6 py-4 text-sm">
                  <button
                    onClick={() => setActiveScreen("control-implementation")}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    Implement
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
                <span className="font-medium">6</span> of <span className="font-medium">6</span>{" "}
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
                  className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  2
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
  )
}

// Implementation Workflow Component
const ImplementationWorkflow = ({ setActiveScreen }) => {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Implementation Workflow</h1>
        <button
          onClick={() => setActiveScreen("framework-selection")}
          className="rounded-md bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700"
        >
          <Plus size={16} className="mr-2 inline" />
          New Implementation
        </button>
      </div>

      {/* Workflow Steps */}
      <div className="mb-6 rounded-lg bg-white p-6 shadow">
        <h2 className="mb-4 text-lg font-medium text-gray-800">
          ISO 27001 Implementation Workflow
        </h2>
        <div className="mb-8 flex items-center">
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
                <button
                  onClick={() => setActiveScreen("gap-assessment")}
                  className="text-blue-600 hover:text-blue-900"
                >
                  Continue
                </button>
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
                <button
                  onClick={() => setActiveScreen("risk-management")}
                  className="text-blue-600 hover:text-blue-900"
                >
                  Continue
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

// Framework Selection Component
const FrameworkSelection = ({ setActiveScreen, setSelectedFramework }) => {
  return (
    <div>
      <div className="mb-6 flex items-center">
        <button
          onClick={() => setActiveScreen("implementation-workflow")}
          className="mr-2 text-blue-600 hover:text-blue-800"
        >
          &larr; Back
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Select Framework</h1>
      </div>

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
                onClick={() => {
                  setSelectedFramework(framework)
                  setActiveScreen("scope-definition")
                }}
                className="w-full rounded-md bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700"
              >
                Select
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Scope Definition Component
const ScopeDefinition = ({ setActiveScreen, framework }) => {
  return (
    <div>
      <div className="mb-6 flex items-center">
        <button
          onClick={() => setActiveScreen("framework-selection")}
          className="mr-2 text-blue-600 hover:text-blue-800"
        >
          &larr; Back
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Scope Definition</h1>
      </div>

      <div className="mb-6 rounded-lg bg-white p-6 shadow">
        <h2 className="mb-4 text-lg font-medium text-gray-800">Step 2: Scope Definition</h2>
        <p className="mb-6 text-gray-600">
          Define the scope of your {framework?.name || "framework"} implementation.
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
              onClick={() => setActiveScreen("gap-assessment")}
              className="rounded-md bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700"
            >
              Next: Gap Assessment
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// Gap Assessment Component
const GapAssessment = ({ setActiveScreen }) => {
  return (
    <div>
      <div className="mb-6 flex items-center">
        <button
          onClick={() => setActiveScreen("scope-definition")}
          className="mr-2 text-blue-600 hover:text-blue-800"
        >
          &larr; Back
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Gap Assessment</h1>
      </div>

      <div className="mb-6 rounded-lg bg-white p-6 shadow">
        <h2 className="mb-4 text-lg font-medium text-gray-800">Step 3: Gap Assessment</h2>
        <p className="mb-6 text-gray-600">
          Evaluate your current compliance status against the selected framework.
        </p>

        <div className="mb-4 flex items-center justify-between">
          <div>
            <span className="text-sm font-medium text-gray-700">Showing controls for: </span>
            <span className="text-sm font-medium text-blue-600">ISO 27001:2022</span>
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
                const control = sampleData.controls.find((c) => c.id === assessment.controlId)
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
                )
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex justify-end space-x-2">
          <button
            onClick={() => setActiveScreen("risk-management")}
            className="rounded-md bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700"
          >
            Next: Risk Management
          </button>
        </div>
      </div>
    </div>
  )
}

// Risk Management Component
const RiskManagement = ({ setActiveScreen }) => {
  return (
    <div>
      <div className="mb-6 flex items-center">
        <button
          onClick={() => setActiveScreen("gap-assessment")}
          className="mr-2 text-blue-600 hover:text-blue-800"
        >
          &larr; Back
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Risk Management</h1>
      </div>

      <div className="mb-6 rounded-lg bg-white p-6 shadow">
        <h2 className="mb-4 text-lg font-medium text-gray-800">Step 4: Risk Management</h2>
        <p className="mb-6 text-gray-600">
          Identify, assess, and manage risks associated with non-compliant controls.
        </p>

        <div className="mb-4 flex items-center justify-between">
          <div>
            <span className="text-sm font-medium text-gray-700">
              Risks identified from gap assessment:{" "}
            </span>
            <span className="text-sm font-medium text-blue-600">4</span>
          </div>
          <div className="flex space-x-2">
            <button className="rounded-md border bg-white px-4 py-2 shadow-sm hover:bg-gray-50">
              <Filter size={16} className="mr-2 inline" />
              Filter
            </button>
            <button className="rounded-md bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700">
              <Plus size={16} className="mr-2 inline" />
              Add Risk
            </button>
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
                const control = sampleData.controls.find((c) => c.id === risk.linkedControl)
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
                )
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex justify-end space-x-2">
          <button
            onClick={() => setActiveScreen("control-implementation")}
            className="rounded-md bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700"
          >
            Next: Control Implementation
          </button>
        </div>
      </div>
    </div>
  )
}

// Control Implementation Component
const ControlImplementation = ({ setActiveScreen }) => {
  return (
    <div>
      <div className="mb-6 flex items-center">
        <button
          onClick={() => setActiveScreen("risk-management")}
          className="mr-2 text-blue-600 hover:text-blue-800"
        >
          &larr; Back
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Control Implementation</h1>
      </div>

      <div className="mb-6 rounded-lg bg-white p-6 shadow">
        <h2 className="mb-4 text-lg font-medium text-gray-800">Step 5: Control Implementation</h2>
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
          <div className="flex space-x-2">
            <button className="rounded-md border bg-white px-4 py-2 shadow-sm hover:bg-gray-50">
              <Filter size={16} className="mr-2 inline" />
              Filter
            </button>
            <button className="rounded-md bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700">
              <Plus size={16} className="mr-2 inline" />
              Add Task
            </button>
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
                const control = sampleData.controls.find((c) => c.id === task.controlId)
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
                )
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex justify-end space-x-2">
          <button
            onClick={() => setActiveScreen("audit-integration")}
            className="rounded-md bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700"
          >
            Next: Audit Integration
          </button>
        </div>
      </div>
    </div>
  )
}

// Audit Integration Component
const AuditIntegration = ({ setActiveScreen }) => {
  return (
    <div>
      <div className="mb-6 flex items-center">
        <button
          onClick={() => setActiveScreen("control-implementation")}
          className="mr-2 text-blue-600 hover:text-blue-800"
        >
          &larr; Back
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Audit Integration</h1>
      </div>

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
                  <span className="text-sm font-medium text-gray-700">2/6</span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-gray-200">
                  <div className="h-2.5 rounded-full bg-green-500" style={{ width: "33%" }}></div>
                </div>
              </div>
              <div className="mb-4">
                <div className="mb-1 flex justify-between">
                  <span className="text-sm font-medium text-gray-700">Tasks Completed</span>
                  <span className="text-sm font-medium text-gray-700">1/4</span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-gray-200">
                  <div className="h-2.5 rounded-full bg-green-500" style={{ width: "25%" }}></div>
                </div>
              </div>
              <div className="mb-4">
                <div className="mb-1 flex justify-between">
                  <span className="text-sm font-medium text-gray-700">Risks Mitigated</span>
                  <span className="text-sm font-medium text-gray-700">1/5</span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-gray-200">
                  <div className="h-2.5 rounded-full bg-green-500" style={{ width: "20%" }}></div>
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
                const evidence = sampleData.evidence.find((e) => e.linkedControl === control.id)
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
                )
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex justify-end space-x-2">
          <button
            onClick={() => setActiveScreen("dashboard")}
            className="rounded-md bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700"
          >
            Complete
          </button>
        </div>
      </div>
    </div>
  )
}
export default GRCPlatform
