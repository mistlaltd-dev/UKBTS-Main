/*
  # Create Contact Form Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text, required) - Customer name
      - `email` (text, required) - Customer email address
      - `phone` (text, required) - Customer phone number
      - `company` (text, optional) - Company name
      - `service` (text, optional) - Service interest
      - `message` (text, required) - Customer message
      - `created_at` (timestamptz) - Submission timestamp
      - `read` (boolean) - Whether submission has been reviewed

  2. Security
    - Enable RLS on `contact_submissions` table
    - No public access (only admin/backend can access)
    - Submissions are insert-only from Edge Functions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company text DEFAULT '',
  service text DEFAULT '',
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read boolean DEFAULT false
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can insert submissions"
  ON contact_submissions
  FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Service role can read submissions"
  ON contact_submissions
  FOR SELECT
  TO service_role
  USING (true);

CREATE POLICY "Service role can update submissions"
  ON contact_submissions
  FOR UPDATE
  TO service_role
  USING (true)
  WITH CHECK (true);