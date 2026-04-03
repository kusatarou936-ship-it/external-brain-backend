import { FileInput } from "../types/FileInput";
import { StructureItem } from "../types/StructureItem";
import { classifyFiles } from "./classifyFiles";
import { extractFunctions } from "./extractFunctions";
import { analyzeImports } from "./analyzeImports";
import { detectTechStack } from "./detectTechStack";
import { summarizeProject } from "./summarizeProject";

export function analyzeProject(files: FileInput[]): {
  techStack: string[];
  structure: StructureItem[];
  summary: string;
} {
  const classification = classifyFiles(files);
  const imports = analyzeImports(files);
  const techStack = detectTechStack(files);

  const structure: StructureItem[] = files.map((file) => {
    const functions = extractFunctions(file.content);
    return {
      path: file.path,
      role: classification[file.path],
      functions,
      importance: 1
    };
  });

  const summary = summarizeProject(files, structure);

  return { techStack, structure, summary };
}
