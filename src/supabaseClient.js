import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hrnghetakrralejhzkiq.supabase.co' // your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhybmdoZXRha3JyYWxlamh6a2lxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE4MDc5MjcsImV4cCI6MjA3NzM4MzkyN30.uIYrwGRFUSyHFtQjeuNxHCQRCzfK3ayYBGJ2GlVnBjI' // your public anon key
export const supabase = createClient(supabaseUrl, supabaseKey)
