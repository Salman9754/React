import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rbrkysysjgrzneiwyrsr.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJicmt5c3lzamdyem5laXd5cnNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY2NjM1ODIsImV4cCI6MjA1MjIzOTU4Mn0.Mqg1Bq2wIM-nZx003p9vKoNpbFG1k2sAdrahSIuHeyE";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
