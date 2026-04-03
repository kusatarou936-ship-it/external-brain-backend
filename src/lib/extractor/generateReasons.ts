export function generateReasons(path: string, importance: number): string {
  if (importance === 3) return "プロジェクトの中心となる重要ロジック";
  if (importance === 2) return "主要な処理を含む中核部分";
  return "補助的な役割";
}
