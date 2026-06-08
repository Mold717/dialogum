import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Create a dummy client if credentials are not provided to prevent crashes
export const supabase = (supabaseUrl && supabaseUrl !== 'your-project-url') 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : {
      from: () => ({
        insert: async () => ({ error: { message: 'Supabase not configured' } }),
        select: () => ({
          order: () => ({
            data: [],
            error: { message: 'Supabase not configured' }
          })
        })
      })
    } as any;
