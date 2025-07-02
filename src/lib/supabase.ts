import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a mock client if Supabase is not configured
const createMockClient = () => ({
  from: () => ({
    insert: () => Promise.resolve({ error: null })
  })
});

export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createMockClient() as any;

export type Database = {
  public: {
    Tables: {
      waitlist: {
        Row: {
          id: string;
          email: string;
          created_at: string;
          status: string;
        };
        Insert: {
          id?: string;
          email: string;
          created_at?: string;
          status?: string;
        };
        Update: {
          id?: string;
          email?: string;
          created_at?: string;
          status?: string;
        };
      };
    };
  };
};