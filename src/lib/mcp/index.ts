import { defineMcp } from "@lovable.dev/mcp-js";

import answerVisaFaq from "./tools/answer-visa-faq";
import getCompanyInfo from "./tools/get-company-info";
import listDestinationCountries from "./tools/list-destination-countries";
import listJobOpenings from "./tools/list-job-openings";
import listVisaServices from "./tools/list-visa-services";

export default defineMcp({
  name: "schengen-visa-gateway",
  title: "Schengen Visa Gateway",
  version: "0.1.0",
  instructions:
    "Public tools for Migrato Dream Jobs, a recruitment and immigration agency placing workers in Schengen and European countries. Use `list_job_openings` for active recruitment programs, `list_visa_services` for the visa types handled, `list_destination_countries` for supported European destinations and permit routes, `answer_visa_faq` for published FAQ answers and the application process, and `get_company_info` for offices and contact details. All data is public marketing content.",
  tools: [
    listJobOpenings,
    listVisaServices,
    listDestinationCountries,
    answerVisaFaq,
    getCompanyInfo,
  ],
});
