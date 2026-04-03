import { FileInput } from "../types/FileInput";

export function analyzeImports(files: FileInput[]): Record<string, string[]> {
  const result: Record<string, string[]> = {};

  for (const file of files) {
    const imports = [...file.content.matchAll(/from\s+["'](.+?)["']/g)];
    result[file.path] = imports.map((m) => m[1]);
  }

  return result;
}
