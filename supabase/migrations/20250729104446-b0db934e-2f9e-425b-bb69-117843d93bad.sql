-- Enable public access to the signups table for newsletter subscriptions
-- Since this is a public newsletter signup, we'll allow anonymous inserts

-- Add RLS policies for the signups table
CREATE POLICY "Enable insert for anonymous users" ON public.signups
FOR INSERT 
TO anon
WITH CHECK (true);

CREATE POLICY "Enable read access for authenticated users" ON public.signups
FOR SELECT 
TO authenticated
USING (true);