import { createClient, SupabaseClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv'
dotenv.config()

export const supabaseConn: SupabaseClient = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_API_KEY!);