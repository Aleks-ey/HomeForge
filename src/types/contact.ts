export type ProjectType =
  | "residential-remodel"
  | "commercial-renovation"
  | "new-construction"
  | "addition"
  | "roofing"
  | "other";

export interface ContactSubmission {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  phone: string;
  projectType: ProjectType;
  message: string;
}

export type SubmissionsStore = ContactSubmission[];
