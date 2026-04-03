import { analyzeProject } from "@/lib/analyzer";
import { extractImportantParts } from "@/lib/extractor";
import { buildChunks } from "@/lib/chunker";
import { ProjectSummary } from "@/lib/types/ProjectSummary";
import { FileInput } from "@/lib/types/FileInput";

export async function POST(req: Request): Promise<Response> {
  const { projectName, files, maxChunkSize } = await req.json();

  const analysis = analyzeProject(files as FileInput[]);
  const excerpts = extractImportantParts(analysis.structure, files);

  const project: ProjectSummary = {
    name: projectName,
    techStack: analysis.techStack,
    summary: analysis.summary
  };

  const chunks = buildChunks(
    project,
    analysis.structure,
    excerpts,
    maxChunkSize
  );

  return Response.json({
    project,
    structure: analysis.structure,
    excerpts,
    chunks
  });
}
