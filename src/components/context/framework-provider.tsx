"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Framework } from "@/lib/types";

// Define the context
interface FrameworkContextType {
  selectedFramework: Framework | null;
  setSelectedFramework: (framework: Framework | null) => void;
}

export const FrameworkContext = createContext<FrameworkContextType>({
  selectedFramework: null,
  setSelectedFramework: () => {},
});

// Custom hook to use the framework context
export const useFramework = () => useContext(FrameworkContext);

// Provider component
interface FrameworkProviderProps {
  children: ReactNode;
}

export const FrameworkProvider: React.FC<FrameworkProviderProps> = ({ children }) => {
  const [selectedFramework, setSelectedFramework] = useState<Framework | null>(null);

  // Load from session storage on initial render
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedFramework = sessionStorage.getItem("selectedFramework");
      if (storedFramework) {
        setSelectedFramework(JSON.parse(storedFramework));
      }
    }
  }, []);

  // Update session storage when framework changes
  const handleSetFramework = (framework: Framework | null) => {
    setSelectedFramework(framework);

    if (typeof window !== "undefined") {
      if (framework) {
        sessionStorage.setItem("selectedFramework", JSON.stringify(framework));
      } else {
        sessionStorage.removeItem("selectedFramework");
      }
    }
  };

  return (
    <FrameworkContext.Provider
      value={{
        selectedFramework,
        setSelectedFramework: handleSetFramework
      }}
    >
      {children}
    </FrameworkContext.Provider>
  );
};
