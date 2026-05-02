"use server";

import fs from "node:fs/promises";
import path from "node:path";
import type {
  ContactSubmission,
  ProjectType,
  SubmissionsStore,
} from "@/types/contact";

const DATA_FILE = process.env.VERCEL
  ? path.join("/tmp", "contact-submissions.json")
  : path.join(process.cwd(), "data", "contact-submissions.json");

async function readStore(): Promise<SubmissionsStore> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw) as SubmissionsStore;
  } catch {
    return [];
  }
}

async function writeStore(data: SubmissionsStore): Promise<void> {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
}

export type ContactFormState = {
  success: boolean;
  submittedName?: string;
  error?: string;
};

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = (formData.get("name") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const phone = (formData.get("phone") as string | null)?.trim() ?? "";
  const projectType =
    (formData.get("projectType") as ProjectType | null) ?? null;
  const message = (formData.get("message") as string | null)?.trim() ?? "";

  if (!name || !email || !projectType || !message) {
    return { success: false, error: "Please fill in all required fields." };
  }

  const submission: ContactSubmission = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    name,
    email,
    phone,
    projectType,
    message,
  };

  const store = await readStore();
  store.push(submission);
  await writeStore(store);

  return { success: true, submittedName: name };
}
