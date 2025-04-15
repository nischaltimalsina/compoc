"use client";
import React from "react";
import { Save, Globe, Bell, Lock, Shield, Moon, Sun } from "lucide-react";
import { PageHeader } from "@/components/layout/layout-components";

const Settings = () => {
  return (
    <div>
      <PageHeader title="Settings" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Sidebar Navigation */}
        <div className="col-span-1">
          <div className="rounded-lg bg-white p-4 shadow">
            <nav>
              <ul className="space-y-1">
                <li>
                  <a
                    href="#general"
                    className="flex items-center rounded-md bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700"
                  >
                    <Globe size={16} className="mr-2" />
                    General
                  </a>
                </li>
                <li>
                  <a
                    href="#notifications"
                    className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    <Bell size={16} className="mr-2" />
                    Notifications
                  </a>
                </li>
                <li>
                  <a
                    href="#security"
                    className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    <Lock size={16} className="mr-2" />
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="#compliance"
                    className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    <Shield size={16} className="mr-2" />
                    Compliance
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Settings Content */}
        <div className="col-span-2">
          <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="text-lg font-medium text-gray-800">General Settings</h2>
            <p className="mb-4 text-sm text-gray-600">
              Configure your GRC platform preferences and appearance settings.
            </p>

            <form>
              <div className="space-y-6">
                {/* Company Information */}
                <div>
                  <h3 className="mb-3 text-md font-medium text-gray-700">Company Information</h3>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-gray-700">
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your Company Name"
                        defaultValue="Acme Corporation"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-gray-700">
                        Industry
                      </label>
                      <select className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Financial Services</option>
                        <option>Healthcare</option>
                        <option>Technology</option>
                        <option>Manufacturing</option>
                        <option>Retail</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Appearance */}
                <div>
                  <h3 className="mb-3 text-md font-medium text-gray-700">Appearance</h3>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium text-gray-700">Theme</span>
                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        className="flex items-center rounded-md border bg-white px-3 py-2 text-sm font-medium shadow-sm"
                      >
                        <Sun size={16} className="mr-2 text-yellow-500" />
                        Light
                      </button>
                      <button
                        type="button"
                        className="flex items-center rounded-md border bg-gray-800 px-3 py-2 text-sm font-medium text-white shadow-sm"
                      >
                        <Moon size={16} className="mr-2 text-blue-400" />
                        Dark
                      </button>
                      <button
                        type="button"
                        className="flex items-center rounded-md border bg-white px-3 py-2 text-sm font-medium shadow-sm"
                      >
                        System
                      </button>
                    </div>
                  </div>
                </div>

                {/* Date and Time Format */}
                <div>
                  <h3 className="mb-3 text-md font-medium text-gray-700">Date and Time</h3>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-gray-700">
                        Date Format
                      </label>
                      <select className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>MM/DD/YYYY</option>
                        <option>DD/MM/YYYY</option>
                        <option>YYYY-MM-DD</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-gray-700">
                        Time Format
                      </label>
                      <select className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>12-hour (AM/PM)</option>
                        <option>24-hour</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Language */}
                <div>
                  <h3 className="mb-3 text-md font-medium text-gray-700">Language</h3>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      Display Language
                    </label>
                    <select className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>English (US)</option>
                      <option>English (UK)</option>
                      <option>French</option>
                      <option>German</option>
                      <option>Spanish</option>
                      <option>Japanese</option>
                    </select>
                  </div>
                </div>

                {/* Save Button */}
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="rounded-md bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700"
                  >
                    <Save size={16} className="mr-2 inline" />
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
