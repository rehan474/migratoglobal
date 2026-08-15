// Public marketing content exposed through the MCP server.
// Mirrors what is already published on the Migrato Dream Jobs website.

export const company = {
  name: "Migrato Dream Jobs",
  tagline: "Your route, our expertise.",
  summary:
    "Migrato Dream Jobs is a recruitment and immigration company placing skilled workers with verified employers across Schengen and European countries. We handle work permits, national D visas, Schengen visit visas, student, family and business visas, plus full documentation support.",
  doneBase:
    "Done Base — No Advance Payment Required. The only done-base agency in Saudi Arabia: you pay once the job and permit are done.",
  headOffice: "Panerių g. 51, 03202 Vilnius, Lithuania",
  saudiOffice: "Olaya Street, Riyadh, Saudi Arabia",
  phone: "+966 55 396 1233",
  whatsapp: "https://wa.me/966553961233",
  website: "https://migratoglobals.com",
} as const;

export const jobPrograms = [
  {
    country: "Spain / Finland",
    role: "Welder & Helper",
    highlights: [
      "Welder & Helper positions",
      "Up to 12-hour shifts with overtime",
      "Overseas experience preferred",
    ],
    processingTime: "3–4 months",
    openTo: "All nationalities",
  },
  {
    country: "Malta",
    role: "Multiple Vacancies",
    highlights: ["Open to all nationalities", "Multiple vacancies available", "Air ticket included"],
    processingTime: null,
    openTo: "All nationalities",
  },
  {
    country: "Bulgaria",
    role: "Truck Driver & Industrial Roles",
    highlights: [
      "Video interview",
      "Truck Driver, Power Coating, Metal Fitter, Cleaning Staff",
    ],
    processingTime: "4–5 months",
    openTo: "All nationalities",
  },
  {
    country: "Lithuania",
    role: "Data Center Installation — Cabling",
    highlights: ["Cabling Technician roles", "Head office location"],
    processingTime: null,
    openTo: "Philippines & Vietnam",
  },
  {
    country: "Switzerland",
    role: "Driver & Home Care",
    highlights: [
      "Driver: Pakistan candidates via video call interview",
      "Home Care: India & Pakistan candidates",
      "Recruitment starts after the 25th of the month",
    ],
    processingTime: null,
    openTo: "Pakistan, India",
  },
] as const;

export const services = [
  {
    id: "work-visa",
    title: "Europe Work Visa & Work Permit",
    description:
      "Employer-sponsored work permits, seasonal permits and EU Blue Card applications with verified job offers.",
  },
  {
    id: "tourist-visa",
    title: "Schengen Visit & Tourist Visa",
    description:
      "Short-stay Schengen visa filing, appointment booking, cover letters, insurance and itinerary support.",
  },
  {
    id: "student-visa",
    title: "Student Visa for Europe",
    description: "University admissions, blocked accounts, national D visas and post-study work pathways.",
  },
  {
    id: "family-visa",
    title: "Family & Dependent Visa",
    description: "Spouse, child and family reunification visas with full civil-document legalisation.",
  },
  {
    id: "business-visa",
    title: "Business & Investor Visa",
    description:
      "Business visit visas, company registration and residence-by-investment routes across the EU.",
  },
  {
    id: "documentation",
    title: "Documentation & Attestation",
    description: "MOFA attestation, translations, apostille, CV formatting and interview preparation.",
  },
] as const;

export const countries = [
  { name: "Germany", code: "DE", route: "EU Blue Card · Skilled worker" },
  { name: "Malta", code: "MT", route: "Work permit · 12 weeks" },
  { name: "Netherlands", code: "NL", route: "Highly skilled migrant" },
  { name: "Portugal", code: "PT", route: "Job seeker · D visa" },
  { name: "Italy", code: "IT", route: "Decreto Flussi quota" },
  { name: "Spain", code: "ES", route: "Work & digital nomad" },
  { name: "France", code: "FR", route: "Talent passport" },
  { name: "Sweden", code: "SE", route: "Work permit" },
  { name: "Czechia", code: "CZ", route: "Employee card" },
  { name: "Austria", code: "AT", route: "Red-White-Red card" },
  { name: "Hungary", code: "HU", route: "Work & residence" },
  { name: "Lithuania", code: "LT", route: "National D visa" },
] as const;

export const processSteps = [
  {
    step: 1,
    title: "Free eligibility assessment",
    description:
      "We review your profile, qualifications and travel history and shortlist the European routes you actually qualify for.",
  },
  {
    step: 2,
    title: "Job offer & work permit",
    description:
      "Our EU employer network issues a verified contract, and we file the work permit with the labour authority.",
  },
  {
    step: 3,
    title: "Documentation & appointment",
    description:
      "Attestation, translations, insurance, financials and your VFS or embassy appointment — prepared and booked.",
  },
  {
    step: 4,
    title: "Visa stamped & relocation",
    description:
      "Interview coaching, visa collection, flight and first-month accommodation guidance in your destination city.",
  },
] as const;

export const faqs = [
  {
    question: "How can I get a work visa for Europe from Saudi Arabia?",
    answer:
      "You need a verified job offer from a European employer, an approved work permit filed with that country's labour authority, and a national (type D) visa stamped at the embassy. Migrato Dream Jobs manages all three stages, including document attestation and appointment booking.",
  },
  {
    question: "Which European country gives work permits the fastest?",
    answer:
      "Malta, Lithuania, Czechia and Hungary currently process employer-sponsored work permits fastest, typically in 6-12 weeks. Germany and the Netherlands take longer but offer higher salaries and faster permanent residence.",
  },
  {
    question: "What is the difference between a Schengen visa and a work permit?",
    answer:
      "A Schengen visa is a short-stay visa valid up to 90 days for tourism or business in 29 countries. A work permit plus national D visa allows you to live and work legally long term in one specific country.",
  },
  {
    question: "Can my family join me on a European work visa?",
    answer:
      "Yes. Most European countries allow family reunification once you hold a residence permit and meet income and accommodation requirements. We prepare dependent visa applications for spouses and children in parallel.",
  },
  {
    question: "How much does a Europe work visa cost?",
    answer:
      "Total cost depends on the country, permit type and government fees. After your free assessment you receive one written quotation covering government, embassy, translation and service fees, with no hidden charges.",
  },
  {
    question: "Do you help if my Schengen visa was previously rejected?",
    answer:
      "Yes. We review the refusal grounds, rebuild the documentation file, and prepare an appeal or a stronger fresh application addressing each objection raised by the consulate.",
  },
] as const;
