// Status type
export type StatusType = 'Completed' | 'In Progress' | 'Planned' | 'Open' | 'Closed' | 'Compliant' | 'Partially Compliant' | 'Non-Compliant';

// Severity type
export type SeverityType = 'High' | 'Medium' | 'Low';

// Asset type
export type AssetType = 'Server' | 'Cloud Service' | 'Application' | 'Network' | 'Endpoint';

// Evidence type
export type EvidenceType = 'Document' | 'Screenshot' | 'Report';

// Framework types
export interface Framework {
  id: string;
  name: string;
  description: string;
}

// Control types
export interface Control {
  id: string;
  name: string;
  framework: string;
  status: StatusType;
  owner: string;
}

// Department types
export interface Department {
  id: string;
  name: string;
}

// Asset types
export interface Asset {
  id: string;
  name: string;
  type: AssetType;
  department: string;
}

// User types
export interface User {
  id: string;
  name: string;
  role: string;
  department: string;
}

// Risk types
export interface Risk {
  id: string;
  description: string;
  severity: SeverityType;
  linkedControl: string;
  status: StatusType;
}

// Evidence types
export interface Evidence {
  id: string;
  description: string;
  linkedControl: string;
  type: EvidenceType;
}

// Gap Assessment types
export interface GapAssessment {
  controlId: string;
  status: StatusType;
  gapDescription: string;
  evidence: string | null;
}

// Implementation Task types
export interface ImplementationTask {
  id: string;
  controlId: string;
  description: string;
  assignedTo: string;
  status: StatusType;
  dueDate: string;
}

// Dashboard stat type
export interface DashboardStat {
  title: string;
  count: number;
  icon: React.ReactNode;
}

// Sample data type
export interface SampleData {
  frameworks: Framework[];
  controls: Control[];
  departments: Department[];
  assets: Asset[];
  users: User[];
  risks: Risk[];
  evidence: Evidence[];
  gapAssessments: GapAssessment[];
  implementationTasks: ImplementationTask[];
}

// Component prop types
export interface PageProps {
  setActiveScreen?: (screen: string) => void;
}

export interface FrameworkSelectionProps extends PageProps {
  setSelectedFramework: (framework: Framework | null) => void;
}

export interface ScopeDefinitionProps extends PageProps {
  framework: Framework | null;
}

export interface GapAssessmentProps extends PageProps {
  framework: Framework | null;
}

export interface StatusBadgeProps {
  status: StatusType;
}

export interface SeverityBadgeProps {
  severity: SeverityType;
}
