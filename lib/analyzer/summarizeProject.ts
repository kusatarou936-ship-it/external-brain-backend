import { FileInput } from "../types/FileInput";
import { StructureItem } from "../types/StructureItem";

export function summarizeProject(
  files: FileInput[],
  structure: StructureItem[]
): string {
  return `このプロジェクトは ${structure.length} 個のファイルで構成され、主要な役割は ${[
    ...new Set(structure.map((s) => s.role))
  ].join(" / ")} です。`;
}
