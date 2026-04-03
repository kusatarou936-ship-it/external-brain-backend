import { ProjectSummary } from "../types/ProjectSummary";
import { StructureItem } from "../types/StructureItem";
import { ExcerptItem } from "../types/ExcerptItem";
import { ChunkItem } from "../types/ChunkItem";
import { buildStructureText } from "./buildStructureText";
import { buildExcerptText } from "./buildExcerptText";
import { splitIntoChunks } from "./splitIntoChunks";

export function buildChunks(
  project: ProjectSummary,
  structure: StructureItem[],
  excerpts: ExcerptItem[],
  maxChars: number
): ChunkItem[] {
  const chunks: ChunkItem[] = [];

  // 全体像チャンク
  const structureText = buildStructureText(project, structure);
  chunks.push({ label: "全体像 (1/1)", content: structureText });

  // 重要抜粋チャンク
  for (const ex of excerpts) {
    const text = buildExcerptText(ex);
    const split = splitIntoChunks(text, maxChars);

    chunks.push(...split);
  }

  return chunks;
}
