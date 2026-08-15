import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

import { faqs, processSteps } from "../data";

export default defineTool({
  name: "answer_visa_faq",
  title: "Answer visa FAQ",
  description:
    "Return published FAQ answers about European work visas, Schengen visas, costs and rejections, plus the four-step Migrato Dream Jobs application process.",
  inputSchema: {
    query: z
      .string()
      .optional()
      .describe("Optional keyword to filter FAQ entries, e.g. 'cost' or 'family'."),
  },
  outputSchema: { faqs: z.array(z.any()), processSteps: z.array(z.any()) },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const needle = query?.trim().toLowerCase();
    const matched = needle
      ? faqs.filter(
          (f) =>
            f.question.toLowerCase().includes(needle) || f.answer.toLowerCase().includes(needle),
        )
      : faqs;
    const result = { faqs: matched.length > 0 ? matched : faqs, processSteps };

    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      structuredContent: result,
    };
  },
});
