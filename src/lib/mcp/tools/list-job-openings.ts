import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

import { jobPrograms } from "../data";

export default defineTool({
  name: "list_job_openings",
  title: "List job openings",
  description:
    "List the active international recruitment programs (country, role, requirements, processing time) offered by Migrato Dream Jobs.",
  inputSchema: {
    country: z
      .string()
      .optional()
      .describe("Optional country name filter, e.g. 'Malta' or 'Spain'."),
  },
  outputSchema: { programs: z.array(z.any()) },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ country }) => {
    const needle = country?.trim().toLowerCase();
    const programs = needle
      ? jobPrograms.filter((p) => p.country.toLowerCase().includes(needle))
      : jobPrograms;

    return {
      content: [{ type: "text", text: JSON.stringify(programs, null, 2) }],
      structuredContent: { programs },
    };
  },
});
