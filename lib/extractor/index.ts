import { StructureItem } from "../types/StructureItem";
import { ExcerptItem } from "../types/ExcerptItem";
import { scoreImportance } from "./scoreImportance";
import { extractExcerpts } from "./extractExcerpts";
import { generateReasons } from "./generateReasons";
import { FileInput } from "../types/FileInput";

export function extractImportantParts(
  structure: StructureItem[],
  files: FileInput[]
): ExcerptItem[] {
  return structure
    .filter((s) => s.importance >= 2)
    .map((s) => ({
      label: `${s.path}（重要抜粋）`,
      reason: generateReasons(s.path, s.importance),
      content: extractExcerpts(
        files.find((f) => f.path === s.path)!,
        s.importance
      )
    }));
}
