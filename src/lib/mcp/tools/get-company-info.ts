import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

import { company } from "../data";

export default defineTool({
  name: "get_company_info",
  title: "Get company info",
  description:
    "Get Migrato Dream Jobs company details: what the agency does, the done-base no-advance-payment policy, office addresses and public contact channels.",
  inputSchema: {},
  outputSchema: { company: z.record(z.string(), z.any()) },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(company, null, 2) }],
    structuredContent: { company },
  }),
});
