import React from "react";
import { StatusBadgeProps, SeverityBadgeProps } from "@/lib/types";

// Helper for status badges
export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  let bgColor = "bg-gray-100";
  let textColor = "text-gray-700";

  switch (status) {
    case "Completed":
    case "Compliant":
    case "Closed":
      bgColor = "bg-green-100";
      textColor = "text-green-800";
      break;
    case "In Progress":
    case "Partially Compliant":
      bgColor = "bg-blue-100";
      textColor = "text-blue-800";
      break;
    case "Planned":
    case "Open":
    case "Non-Compliant":
      bgColor = "bg-red-100";
      textColor = "text-red-800";
      break;
  }

  return (
    <span className={`${bgColor} ${textColor} rounded-full whitespace-nowrap px-2.5 py-0.5 text-xs font-medium`}>
      {status}
    </span>
  );
};

// Helper for severity badges
export const SeverityBadge: React.FC<SeverityBadgeProps> = ({ severity }) => {
  let bgColor = "bg-gray-100";
  let textColor = "text-gray-700";

  switch (severity) {
    case "High":
      bgColor = "bg-red-100";
      textColor = "text-red-800";
      break;
    case "Medium":
      bgColor = "bg-yellow-100";
      textColor = "text-yellow-800";
      break;
    case "Low":
      bgColor = "bg-green-100";
      textColor = "text-green-800";
      break;
  }

  return (
    <span className={`${bgColor} ${textColor} whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-medium`}>
      {severity}
    </span>
  );
};
