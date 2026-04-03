import { FileInput } from "../types/FileInput";

export function scoreImportance(
  file: FileInput,
  functions: string[],
  imports: string[]
): number {
  let score = 0;

  // ルーティング
  if (/app\.(get|post|put|delete)/.test(file.content)) score += 3;

  // DBアクセス
  if (/redis|find|query/.test(file.content)) score += 3;

  // エラー処理
  if (/try\s*{/.test(file.content)) score += 2;

  // 外部API
  if (/axios|fetch/.test(file.content)) score += 2;

  // config
  if (/config/.test(file.path)) score += 1;

  // 1〜3 に正規化
  return Math.min(3, Math.max(1, Math.ceil(score / 3)));
}
