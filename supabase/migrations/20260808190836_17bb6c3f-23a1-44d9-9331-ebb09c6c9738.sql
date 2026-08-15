CREATE TABLE public.inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  visa_type text NOT NULL,
  country text,
  message text,
  created_at timestamptz NOT NULL DEFAULT now(),
  email_sent boolean NOT NULL DEFAULT false
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.inquiries TO authenticated;
GRANT ALL ON public.inquiries TO service_role;

ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can manage inquiries"
  ON public.inquiries
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view own inquiries"
  ON public.inquiries
  FOR SELECT
  TO authenticated
  USING (false);
