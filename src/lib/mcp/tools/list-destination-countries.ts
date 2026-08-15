import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

import { countries } from "../data";

export default defineTool({
  name: "list_destination_countries",
  title: "List destination countries",
  description:
    "List the featured Schengen and European destination countries with the work-permit or visa route used for each.",
  inputSchema: {},
  outputSchema: { countries: z.array(z.any()) },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(countries, null, 2) }],
    structuredContent: { countries },
  }),
});
