import React from "react";
import {
  Bell,
  ChevronDown,
  Home,
  Layers,
  Shield,
  Settings,
  AlertTriangle,
  FileText,
  Database,
  Users,
  CheckSquare,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  setActiveScreen: (screen: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  setActiveScreen
}) => {
  return (
    <div className="w-64 bg-white shadow-md">
      <div className="border-b p-4">
        <h1 className="text-xl font-bold text-gray-800">GRC Platform</h1>
      </div>

      <div className="p-4">
        <nav>
          <ul>
            <li className={cn("mb-2", activeTab === "dashboard" ? "bg-blue-50 text-blue-700" : "")}>
              <button
                onClick={() => {
                  setActiveTab("dashboard");
                  setActiveScreen("dashboard");
                }}
                className="flex w-full items-center rounded p-2 hover:bg-gray-100"
              >
                <Home size={18} className="mr-2" />
                <span>Dashboard</span>
              </button>
            </li>
            <li
              className={cn("mb-2", activeTab === "control-library" ? "bg-blue-50 text-blue-700" : "")}
            >
              <button
                onClick={() => {
                  setActiveTab("control-library");
                  setActiveScreen("control-library");
                }}
                className="flex w-full items-center rounded p-2 hover:bg-gray-100"
              >
                <Shield size={18} className="mr-2" />
                <span>Control Library</span>
              </button>
            </li>
            <li
              className={cn("mb-2", activeTab === "implementation" ? "bg-blue-50 text-blue-700" : "")}
            >
              <button
                onClick={() => {
                  setActiveTab("implementation");
                  setActiveScreen("implementation-workflow");
                }}
                className="flex w-full items-center rounded p-2 hover:bg-gray-100"
              >
                <CheckSquare size={18} className="mr-2" />
                <span>Implementation</span>
              </button>
            </li>
            <li className={cn("mb-2", activeTab === "risks" ? "bg-blue-50 text-blue-700" : "")}>
              <button
                onClick={() => {
                  setActiveTab("risks");
                  setActiveScreen("risk-management");
                }}
                className="flex w-full items-center rounded p-2 hover:bg-gray-100"
              >
                <AlertTriangle size={18} className="mr-2" />
                <span>Risk Register</span>
              </button>
            </li>
            <li className={cn("mb-2", activeTab === "assets" ? "bg-blue-50 text-blue-700" : "")}>
              <button
                onClick={() => {
                  setActiveTab("assets");
                  setActiveScreen("asset-registry");
                }}
                className="flex w-full items-center rounded p-2 hover:bg-gray-100"
              >
                <Database size={18} className="mr-2" />
                <span>Asset Registry</span>
              </button>
            </li>
            <li className={cn("mb-2", activeTab === "policies" ? "bg-blue-50 text-blue-700" : "")}>
              <button
                onClick={() => {
                  setActiveTab("policies");
                  setActiveScreen("policy-library");
                }}
                className="flex w-full items-center rounded p-2 hover:bg-gray-100"
              >
                <FileText size={18} className="mr-2" />
                <span>Policy Library</span>
              </button>
            </li>
            <li className={cn("mb-2", activeTab === "evidence" ? "bg-blue-50 text-blue-700" : "")}>
              <button
                onClick={() => {
                  setActiveTab("evidence");
                  setActiveScreen("evidence-repository");
                }}
                className="flex w-full items-center rounded p-2 hover:bg-gray-100"
              >
                <Layers size={18} className="mr-2" />
                <span>Evidence Repository</span>
              </button>
            </li>
            <li className={cn("mb-2", activeTab === "audit" ? "bg-blue-50 text-blue-700" : "")}>
              <button
                onClick={() => {
                  setActiveTab("audit");
                  setActiveScreen("audit-integration");
                }}
                className="flex w-full items-center rounded p-2 hover:bg-gray-100"
              >
                <CheckSquare size={18} className="mr-2" />
                <span>Audit Management</span>
              </button>
            </li>
            <li className={cn("mb-2", activeTab === "users" ? "bg-blue-50 text-blue-700" : "")}>
              <button
                onClick={() => {
                  setActiveTab("users");
                  setActiveScreen("user-directory");
                }}
                className="flex w-full items-center rounded p-2 hover:bg-gray-100"
              >
                <Users size={18} className="mr-2" />
                <span>User Directory</span>
              </button>
            </li>
            <li className={cn("mb-2", activeTab === "settings" ? "bg-blue-50 text-blue-700" : "")}>
              <button
                onClick={() => {
                  setActiveTab("settings");
                  setActiveScreen("settings");
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
  );
};

interface TopbarProps {
  activeTab: string;
}

export const Topbar: React.FC<TopbarProps> = ({ activeTab }) => {
  return (
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
  );
};

interface PageHeaderProps {
  title: string;
  backLink?: string;
  backAction?: () => void;
  children?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  backLink,
  backAction,
  children
}) => {
  return (
    <div className="mb-6 flex items-center justify-between">
      <div className="flex items-center">
        {backLink && backAction && (
          <button
            onClick={backAction}
            className="mr-2 text-blue-600 hover:text-blue-800"
          >
            &larr; Back
          </button>
        )}
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      </div>
      {children && <div className="flex space-x-2">{children}</div>}
    </div>
  );
};
