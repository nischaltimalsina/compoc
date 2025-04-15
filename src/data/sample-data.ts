import { SampleData } from '../lib/types';

// Sample data for our UI mockups
const sampleData: SampleData = {
  frameworks: [
    { id: "ISO27001", name: "ISO 27001:2022", description: "Information Security Management" },
    { id: "NISTCSF", name: "NIST CSF", description: "Cybersecurity Framework" },
    { id: "QCSF", name: "QCSF", description: "Quantum Cybersecurity Framework" },
  ],

  controls: [
    {
      id: "A.5.1",
      name: "Information Security Policies",
      framework: "ISO27001",
      status: "Completed",
      owner: "John Davis",
    },
    {
      id: "A.5.2",
      name: "Review of policies for information security",
      framework: "ISO27001",
      status: "In Progress",
      owner: "Sarah Miller",
    },
    {
      id: "A.6.1",
      name: "Internal organization",
      framework: "ISO27001",
      status: "Planned",
      owner: "Robert Johnson",
    },
    {
      id: "A.6.2",
      name: "Mobile devices and teleworking",
      framework: "ISO27001",
      status: "In Progress",
      owner: "Lisa Wang",
    },
    {
      id: "ID.AM-1",
      name: "Physical devices inventory",
      framework: "NISTCSF",
      status: "Completed",
      owner: "Michael Brown",
    },
    {
      id: "ID.AM-2",
      name: "Software platforms inventory",
      framework: "NISTCSF",
      status: "Planned",
      owner: "Jennifer Lee",
    },
  ],

  departments: [
    { id: "IT", name: "Information Technology" },
    { id: "HR", name: "Human Resources" },
    { id: "FIN", name: "Finance" },
    { id: "OPS", name: "Operations" },
    { id: "LEGAL", name: "Legal" },
  ],

  assets: [
    { id: "SRV001", name: "Primary Database Server", type: "Server", department: "IT" },
    { id: "CLD001", name: "Cloud Storage Instance", type: "Cloud Service", department: "IT" },
    { id: "APP001", name: "Customer Management System", type: "Application", department: "OPS" },
    { id: "NTW001", name: "Primary Network Infrastructure", type: "Network", department: "IT" },
    { id: "END001", name: "Employee Workstations", type: "Endpoint", department: "ALL" },
  ],

  users: [
    { id: "JD001", name: "John Davis", role: "CISO", department: "IT" },
    { id: "SM001", name: "Sarah Miller", role: "Compliance Manager", department: "LEGAL" },
    { id: "RJ001", name: "Robert Johnson", role: "IT Manager", department: "IT" },
    { id: "LW001", name: "Lisa Wang", role: "Risk Analyst", department: "OPS" },
    { id: "MB001", name: "Michael Brown", role: "IT Security Specialist", department: "IT" },
    { id: "JL001", name: "Jennifer Lee", role: "Compliance Analyst", department: "LEGAL" },
  ],

  risks: [
    {
      id: "R001",
      description: "Unauthorized access to customer data",
      severity: "High",
      linkedControl: "A.5.1",
      status: "Open",
    },
    {
      id: "R002",
      description: "Insecure mobile device usage",
      severity: "Medium",
      linkedControl: "A.6.2",
      status: "In Progress",
    },
    {
      id: "R003",
      description: "Incomplete asset inventory",
      severity: "Medium",
      linkedControl: "ID.AM-1",
      status: "Closed",
    },
    {
      id: "R004",
      description: "Outdated security policies",
      severity: "Low",
      linkedControl: "A.5.2",
      status: "Open",
    },
    {
      id: "R005",
      description: "Insecure cloud storage configuration",
      severity: "High",
      linkedControl: "CLD001",
      status: "In Progress",
    },
  ],

  evidence: [
    {
      id: "E001",
      description: "Information Security Policy Document",
      linkedControl: "A.5.1",
      type: "Document",
    },
    {
      id: "E002",
      description: "Mobile Device Management Configuration",
      linkedControl: "A.6.2",
      type: "Screenshot",
    },
    { id: "E003", description: "Asset Inventory Report", linkedControl: "ID.AM-1", type: "Report" },
    {
      id: "E004",
      description: "Policy Review Meeting Minutes",
      linkedControl: "A.5.2",
      type: "Document",
    },
  ],

  gapAssessments: [
    { controlId: "A.5.1", status: "Compliant", gapDescription: "None", evidence: "E001" },
    {
      controlId: "A.5.2",
      status: "Non-Compliant",
      gapDescription: "Policies have not been reviewed in over 24 months",
      evidence: "E004",
    },
    {
      controlId: "A.6.1",
      status: "Partially Compliant",
      gapDescription: "Roles and responsibilities not clearly defined",
      evidence: null,
    },
    {
      controlId: "A.6.2",
      status: "Non-Compliant",
      gapDescription: "No mobile device management solution in place",
      evidence: "E002",
    },
    { controlId: "ID.AM-1", status: "Compliant", gapDescription: "None", evidence: "E003" },
    {
      controlId: "ID.AM-2",
      status: "Non-Compliant",
      gapDescription: "Software inventory incomplete",
      evidence: null,
    },
  ],

  implementationTasks: [
    {
      id: "T001",
      controlId: "A.5.2",
      description: "Conduct comprehensive review of information security policies",
      assignedTo: "SM001",
      status: "In Progress",
      dueDate: "2025-05-15",
    },
    {
      id: "T002",
      controlId: "A.6.1",
      description: "Define roles and responsibilities for information security",
      assignedTo: "JD001",
      status: "Planned",
      dueDate: "2025-05-30",
    },
    {
      id: "T003",
      controlId: "A.6.2",
      description: "Implement mobile device management solution",
      assignedTo: "MB001",
      status: "In Progress",
      dueDate: "2025-06-10",
    },
    {
      id: "T004",
      controlId: "ID.AM-2",
      description: "Complete software inventory",
      assignedTo: "RJ001",
      status: "Planned",
      dueDate: "2025-05-20",
    },
  ],
};

export default sampleData;
