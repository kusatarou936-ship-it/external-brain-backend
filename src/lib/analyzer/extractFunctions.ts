export function extractFunctions(content: string): string[] {
  const regex =
    /(function\s+([A-Za-z0-9_]+)\s*\()|(const\s+([A-Za-z0-9_]+)\s*=\s*\()|(export\s+function\s+([A-Za-z0-9_]+))/g;

  const matches = [...content.matchAll(regex)];
  return matches
    .map((m) => m[2] || m[4] || m[6])
    .filter(Boolean) as string[];
}
