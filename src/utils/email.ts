import { supabase } from "@/integrations/supabase/client";

export const sendWelcomeEmail = async (email: string) => {
  try {
    const { data, error } = await supabase.functions.invoke('resend-email', {
      body: {
        to: email,
        subject: 'Welcome to Fluida 👋'
      }
    });

    if (error) {
      console.error('Error sending welcome email:', error);
      throw error;
    }

    console.log('Welcome email sent successfully:', data);
    return data;
  } catch (error) {
    console.error('Failed to send welcome email:', error);
    throw error;
  }
};