"use client";
import React, { useState, ReactNode } from "react";
import { Sidebar, Topbar } from "./layout-components";

interface LayoutProps {
  children: ReactNode;
  initialActiveTab?: string;
  initialActiveScreen?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  initialActiveTab = "dashboard",
  initialActiveScreen = "dashboard"
}) => {
  const [activeTab, setActiveTab] = useState(initialActiveTab);
  const [activeScreen, setActiveScreen] = useState(initialActiveScreen);

  // We'll pass setActiveScreen to children so they can change the active screen
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        setActiveScreen,
        activeScreen
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any);
    }
    return child;
  });

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setActiveScreen={setActiveScreen}
      />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Navigation */}
        <Topbar activeTab={activeTab} />

        {/* Main Content Area */}
        <div className="p-6">
          {childrenWithProps}
        </div>
      </div>
    </div>
  );
};

export default Layout;
