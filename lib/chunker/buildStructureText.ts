import { ProjectSummary } from "../types/ProjectSummary";
import { StructureItem } from "../types/StructureItem";

export function buildStructureText(
  project: ProjectSummary,
  structure: StructureItem[]
): string {
  const list = structure
    .map(
      (s) =>
        `- ${s.path}\n  - 役割: ${s.role}\n  - 関数: ${s.functions.join(
          ", "
        )}\n  - 重要度: ${"★".repeat(s.importance)}`
    )
    .join("\n\n");

  return `# プロジェクト概要
${project.summary}

# 技術スタック
${project.techStack.join(", ")}

# ファイル構造
${list}
`;
}
