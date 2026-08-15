import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

import { services } from "../data";

export default defineTool({
  name: "list_visa_services",
  title: "List visa services",
  description:
    "List the visa and immigration services Migrato Dream Jobs provides: work permits, Schengen visit visas, student, family, business visas and documentation support.",
  inputSchema: {},
  outputSchema: { services: z.array(z.any()) },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(services, null, 2) }],
    structuredContent: { services },
  }),
});
