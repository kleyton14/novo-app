import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    flowType: 'pkce'
  }
});

// Tipos para o banco de dados
export type Purchase = {
  id: string;
  user_id: string;
  user_email: string;
  quiz_answers: Record<string, any>;
  created_at: string;
  payment_status: 'pending' | 'completed' | 'failed';
};

export type User = {
  id: string;
  email: string;
  name?: string;
  avatar_url?: string;
  created_at: string;
};
