import { ExcerptItem } from "../types/ExcerptItem";

export function buildExcerptText(ex: ExcerptItem): string {
  return `## ${ex.label}
理由: ${ex.reason}
----------------------------------------
${ex.content}
`;
}
