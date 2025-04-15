"use client";
import React, { useState, ReactNode } from "react";
import { Framework } from "@/lib/types";
import { SidebarNavigation } from "@/components/layout/sidebar";
import { TopbarNavigation } from "@/components/layout/topbar";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [selectedFramework, setSelectedFramework] = useState<Framework | null>(null);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <SidebarNavigation
      />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Navigation */}
        <TopbarNavigation/>

        {/* Main Content Area */}
        <div className="p-6">
          {/* Clone children to pass necessary props */}
          {React.Children.map(children, child => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                selectedFramework,
                setSelectedFramework
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              } as any);
            }
            return child;
          })}
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
