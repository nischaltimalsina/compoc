"use client";
import { PageHeader } from "@/components/layout/layout-components";
import sampleData from "@/data/sample-data";
import { PageProps } from "@/lib/types";
import { Filter, Mail, Search, Settings, UserPlus } from "lucide-react";
import React from "react";

const UserDirectory: React.FC<PageProps> = () => {
  // Helper function to get department name
  const getDepartmentName = (deptId: string): string => {
    const department = sampleData.departments.find(d => d.id === deptId);
    return department ? department.name : deptId;
  };

  return (
    <div>
      <PageHeader title="User Directory">
        <button className="rounded-md border bg-white px-4 py-2 shadow-sm hover:bg-gray-50">
          <Filter size={16} className="mr-2 inline" />
          Filter
        </button>
        <button className="rounded-md bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700">
          <UserPlus size={16} className="mr-2 inline" />
          Add User
        </button>
      </PageHeader>

      {/* Search and Filters */}
      <div className="mb-6 rounded-lg bg-white p-4 shadow">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              className="w-full rounded-md border py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search users..."
            />
          </div>
          <div>
            <select className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">All Departments</option>
              {sampleData.departments.map((dept, index) => (
                <option key={index} value={dept.id}>
                  {dept.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">All Roles</option>
              <option value="CISO">CISO</option>
              <option value="Compliance Manager">Compliance Manager</option>
              <option value="IT Manager">IT Manager</option>
              <option value="Risk Analyst">Risk Analyst</option>
              <option value="IT Security Specialist">IT Security Specialist</option>
              <option value="Compliance Analyst">Compliance Analyst</option>
            </select>
          </div>
        </div>
      </div>

      {/* Users Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sampleData.users.map((user, index) => {
          // Generate initials for the avatar
          const initials = user.name
            .split(' ')
            .map(name => name[0])
            .join('')
            .toUpperCase();

          // Generate a random color for the avatar background
          const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-red-500', 'bg-yellow-500', 'bg-indigo-500'];
          const randomColor = colors[index % colors.length];

          return (
            <div key={index} className="rounded-lg bg-white p-6 shadow">
              <div className="flex items-center space-x-4">
                <div className={`flex h-16 w-16 items-center justify-center rounded-full ${randomColor} text-xl font-bold text-white`}>
                  {initials}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{user.name}</h3>
                  <p className="text-sm text-gray-500">{user.role}</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="font-medium">Department:</span>
                  <span className="ml-2">{getDepartmentName(user.department)}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="font-medium">User ID:</span>
                  <span className="ml-2">{user.id}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="font-medium">Email:</span>
                  <span className="ml-2">{user.name.toLowerCase().replace(/\s/g, '.')}@company.com</span>
                </div>
              </div>
              <div className="mt-4 flex space-x-2">
                <button className="flex-1 rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">
                  <Mail size={14} className="mr-1 inline" />
                  Contact
                </button>
                <button className="flex-1 rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">
                  <Settings size={14} className="mr-1 inline" />
                  Manage
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserDirectory;
