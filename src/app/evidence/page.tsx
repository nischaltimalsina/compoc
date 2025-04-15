"use client";
import { PageHeader } from "@/components/layout/layout-components";
import sampleData from "@/data/sample-data";
import { Database, Download, Eye, FileText, Filter, Image, Plus, Search } from "lucide-react";

const EvidenceRepository = () => {
  // Add a few more evidence items to have a more populated table
  const extendedEvidenceData = [
    ...sampleData.evidence,
    {
      id: "E005",
      description: "Network Diagram",
      linkedControl: "A.13.1.1",
      type: "Document",
    },
    {
      id: "E006",
      description: "Security Awareness Training Records",
      linkedControl: "A.7.2.2",
      type: "Report",
    },
    {
      id: "E007",
      description: "Data Classification Schema",
      linkedControl: "A.8.2.1",
      type: "Document",
    },
    {
      id: "E008",
      description: "System Access Review Screenshot",
      linkedControl: "A.9.2.5",
      type: "Screenshot",
    },
    {
      id: "E009",
      description: "Vulnerability Scan Results",
      linkedControl: "A.12.6.1",
      type: "Report",
    },
  ];

  // Function to get control name from ID
  const getControlName = (controlId: string): string => {
    const control = sampleData.controls.find(c => c.id === controlId);
    return control ? control.name : "Unknown Control";
  };

  // Function to get icon based on evidence type
  const getEvidenceIcon = (type: string) => {
    switch (type) {
      case "Document":
        return <FileText size={16} className="mr-2 text-blue-500" />;
      case "Screenshot":
        return <Image size={16} className="mr-2 text-green-500" />;
      case "Report":
        return <Database size={16} className="mr-2 text-purple-500" />;
      default:
        return <FileText size={16} className="mr-2 text-gray-500" />;
    }
  };

  return (
    <div>
      <PageHeader title="Evidence Repository">
        <button className="rounded-md border bg-white px-4 py-2 shadow-sm hover:bg-gray-50">
          <Filter size={16} className="mr-2 inline" />
          Filter
        </button>
        <button className="rounded-md bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700">
          <Plus size={16} className="mr-2 inline" />
          Upload Evidence
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
              placeholder="Search evidence..."
            />
          </div>
          <div>
            <select className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">All Evidence Types</option>
              <option value="Document">Document</option>
              <option value="Screenshot">Screenshot</option>
              <option value="Report">Report</option>
            </select>
          </div>
          <div>
            <select className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">All Controls</option>
              {sampleData.controls.map((control, index) => (
                <option key={index} value={control.id}>
                  {control.id} - {control.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Evidence Table */}
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <table className="w-full">
          <thead className="bg-gray-50 text-xs font-medium uppercase tracking-wider text-gray-500">
            <tr>
              <th className="px-6 py-3 text-left">Evidence ID</th>
              <th className="px-6 py-3 text-left">Description</th>
              <th className="px-6 py-3 text-left">Type</th>
              <th className="px-6 py-3 text-left">Linked Control</th>
              <th className="px-6 py-3 text-left">Uploaded Date</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {extendedEvidenceData.map((evidence, index) => {
              // Generate a random date for demo purposes
              const randomDate = new Date(2025, Math.floor(Math.random() * 3), Math.floor(Math.random() * 30) + 1);
              const formattedDate = randomDate.toISOString().split('T')[0];

              return (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{evidence.id}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    <div className="flex items-center">
                      {getEvidenceIcon(evidence.type)}
                      {evidence.description}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{evidence.type}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {evidence.linkedControl} - {getControlName(evidence.linkedControl)}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{formattedDate}</td>
                  <td className="px-6 py-4 text-sm space-x-3">
                    <button className="text-blue-600 hover:text-blue-900">
                      <Eye size={16} className="inline mr-1" /> View
                    </button>
                    <button className="text-blue-600 hover:text-blue-900">
                      <Download size={16} className="inline mr-1" /> Download
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t bg-white px-4 py-3 sm:px-6">
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to{" "}
                <span className="font-medium">{extendedEvidenceData.length}</span> of{" "}
                <span className="font-medium">{extendedEvidenceData.length}</span>{" "}
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
                  className="relative inline-flex items-center border border-gray-300 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600"
                >
                  1
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
  );
};

export default EvidenceRepository;
