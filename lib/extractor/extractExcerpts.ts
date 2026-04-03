import { FileInput } from "../types/FileInput";

export function extractExcerpts(
  file: FileInput,
  importance: number
): string {
  if (importance === 3) {
    return file.content;
  }

  if (importance === 2) {
    const lines = file.content.split("\n");
    return lines.slice(0, 80).join("\n");
  }

  return "";
}
