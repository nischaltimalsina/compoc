"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Bell, ChevronDown, Search } from "lucide-react";

export const TopbarNavigation = () => {
  const pathname = usePathname();

  // Get the current section name from the path
  const getSectionName = () => {
    if (pathname === "/") return "Dashboard";

    // Remove leading slash and split by any additional slashes
    const path = pathname.substring(1).split("/")[0];

    // Convert kebab case to title case (e.g., "control-library" -> "Control Library")
    return path
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="flex items-center justify-between h-14 bg-white p-4 shadow-sm">
      <div>
        <h2 className="text-lg font-medium text-gray-800">
          {getSectionName()}
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
