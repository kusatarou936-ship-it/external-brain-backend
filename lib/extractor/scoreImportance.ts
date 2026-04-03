import { FileInput } from "../types/FileInput";

export function scoreImportance(
  file: FileInput,
  functions: string[],
  imports: string[]
): number {
  let score = 0;

  if (/app\.(get|post|put|delete)/.test(file.content)) score += 3;
  if (/redis|find|query/.test(file.content)) score += 3;
  if (/try\s*{/.test(file.content)) score += 2;
  if (/axios|fetch/.test(file.content)) score += 2;
  if (/config/.test(file.path)) score += 1;

  return Math.min(3, Math.max(1, Math.ceil(score / 3)));
}
