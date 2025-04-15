"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Layers,
  Shield,
  Settings,
  AlertTriangle,
  FileText,
  Database,
  Users,
  CheckSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const SidebarNavigation = () => {
  const pathname = usePathname();

  // Define navigation items with paths
  const navItems = [
    { name: "Dashboard", path: "/", icon: <Home size={18} className="mr-2" /> },
    { name: "Control Library", path: "/control-library", icon: <Shield size={18} className="mr-2" /> },
    { name: "Implementation", path: "/implementation", icon: <CheckSquare size={18} className="mr-2" /> },
    { name: "Risk Register", path: "/risk-management", icon: <AlertTriangle size={18} className="mr-2" /> },
    { name: "Asset Registry", path: "/assets", icon: <Database size={18} className="mr-2" /> },
    { name: "Policy Library", path: "/policies", icon: <FileText size={18} className="mr-2" /> },
    { name: "Evidence Repository", path: "/evidence", icon: <Layers size={18} className="mr-2" /> },
    { name: "Audit Management", path: "/audit", icon: <CheckSquare size={18} className="mr-2" /> },
    { name: "User Directory", path: "/users", icon: <Users size={18} className="mr-2" /> },
    { name: "Settings", path: "/settings", icon: <Settings size={18} className="mr-2" /> },
  ];

  // Helper function to check if a path is active
  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="w-64 bg-white shadow-md">
      <div className="border-b p-4 h-14">
        <h1 className="text-xl font-bold text-gray-800">GRC Platform</h1>
      </div>

      <div className="p-4">
        <nav>
          <ul>
            {navItems.map((item, index) => (
              <li
                key={index}
                className={cn(
                  "mb-2",
                  isActive(item.path) ? "bg-blue-50 text-blue-700" : ""
                )}
              >
                <Link
                  href={item.path}
                  className="flex w-full items-center rounded p-2 hover:bg-gray-100"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
