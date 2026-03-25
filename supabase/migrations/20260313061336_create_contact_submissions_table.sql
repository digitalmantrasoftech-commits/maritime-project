/*
  # Contact Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Contact person's full name
      - `email` (text) - Contact email address
      - `phone` (text, nullable) - Contact phone number
      - `company` (text, nullable) - Company name
      - `message` (text) - Message content
      - `created_at` (timestamptz) - Submission timestamp
      - `status` (text) - Submission status (new, read, replied)

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for authenticated admin users to read submissions
    - Add policy for anyone to insert submissions (public form)

  3. Indexes
    - Index on created_at for efficient date-based queries
    - Index on status for filtering by status
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at 
  ON contact_submissions(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_status 
  ON contact_submissions(status);
