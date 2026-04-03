import { ChunkItem } from "../types/ChunkItem";

export function splitIntoChunks(
  text: string,
  maxChars: number
): ChunkItem[] {
  if (text.length <= maxChars) {
    return [{ label: "Part 1/1", content: text }];
  }

  const chunks: ChunkItem[] = [];
  let index = 0;
  let part = 1;

  while (index < text.length) {
    const slice = text.slice(index, index + maxChars);
    chunks.push({
      label: `Part ${part}`,
      content: slice
    });
    index += maxChars;
    part++;
  }

  return chunks;
}
