import { analyzeProject } from "../../../lib/analyzer";
import { extractImportantParts } from "../../../lib/extractor";
import { buildChunks } from "../../../lib/chunker";
import { ProjectSummary } from "../../../lib/types/ProjectSummary";
import { FileInput } from "../../../lib/types/FileInput";

export async function POST(req: Request): Promise<Response> {
  try {
    const { projectName, files, maxChunkSize } = await req.json();

    if (!files || !Array.isArray(files)) {
      return new Response("Invalid files", { status: 400 });
    }

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
      maxChunkSize || 3000
    );

    return Response.json({
      project,
      structure: analysis.structure,
      excerpts,
      chunks
    });

  } catch (err) {
    console.error("compress-code error:", err);

    return new Response(
      JSON.stringify({ error: String(err) }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}
