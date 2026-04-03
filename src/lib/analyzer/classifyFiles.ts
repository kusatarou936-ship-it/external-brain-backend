import { FileInput } from "../types/FileInput";

export function classifyFiles(files: FileInput[]): Record<string, string> {
  const result: Record<string, string> = {};

  for (const file of files) {
    const p = file.path.toLowerCase();

    if (p.includes("server") || p.includes("app") || p.includes("main")) {
      result[file.path] = "entry";
    } else if (p.includes("route")) {
      result[file.path] = "route";
    } else if (p.includes("controller")) {
      result[file.path] = "controller";
    } else if (p.includes("service")) {
      result[file.path] = "service";
    } else if (p.includes("middleware")) {
      result[file.path] = "middleware";
    } else if (p.includes("config")) {
      result[file.path] = "config";
    } else if (p.includes("lib") || p.includes("utils")) {
      result[file.path] = "lib";
    } else {
      result[file.path] = "other";
    }
  }

  return result;
}
