"use server";

import fs from "node:fs/promises";
import path from "node:path";
import type { SubmissionsStore } from "@/types/contact";

const DATA_FILE = process.env.VERCEL
  ? path.join("/tmp", "contact-submissions.json")
  : path.join(process.cwd(), "data", "contact-submissions.json");

export type AdminAuthState = {
  authenticated: boolean;
  error?: string;
  submissions?: SubmissionsStore;
};

export async function verifyAdminPassword(
  _prevState: AdminAuthState,
  formData: FormData
): Promise<AdminAuthState> {
  const password = formData.get("password") as string | null;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    return { authenticated: false, error: "Admin access is not configured." };
  }

  if (!password || password !== adminPassword) {
    return { authenticated: false, error: "Incorrect password." };
  }

  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    const submissions = JSON.parse(raw) as SubmissionsStore;
    return { authenticated: true, submissions };
  } catch {
    return { authenticated: true, submissions: [] };
  }
}
