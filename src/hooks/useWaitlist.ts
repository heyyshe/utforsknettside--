import { useState } from 'react';
import { supabase } from '../lib/supabase';

export function useWaitlist() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addToWaitlist = async (email: string) => {
    setIsLoading(true);
    setError(null);

    try {
      // Check if Supabase is properly configured
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
      
      if (!supabaseUrl || !supabaseAnonKey) {
        // For demo purposes, simulate success without actually saving
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Demo mode: Email would be saved:', email);
        return { success: true };
      }

      const { error: insertError } = await supabase
        .from('waitlist')
        .insert([{ email }]);

      if (insertError) {
        // Handle duplicate email error gracefully
        if (insertError.code === '23505') {
          throw new Error('Denne e-postadressen er allerede registrert på ventelisten.');
        }
        throw insertError;
      }

      return { success: true };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'En feil oppstod. Prøv igjen senere.';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    addToWaitlist,
    isLoading,
    error,
    clearError: () => setError(null)
  };
}