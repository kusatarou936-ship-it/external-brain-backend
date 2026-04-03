import { FileInput } from "../types/FileInput";

export function detectTechStack(files: FileInput[]): string[] {
  const tech: Set<string> = new Set();

  for (const file of files) {
    const c = file.content;

    if (c.includes("express")) tech.add("Express");
    if (c.includes("redis")) tech.add("Redis");
    if (c.includes("prisma")) tech.add("Prisma");
    if (c.includes("next")) tech.add("Next.js");
    if (c.includes("nest")) tech.add("NestJS");
  }

  return [...tech];
}
