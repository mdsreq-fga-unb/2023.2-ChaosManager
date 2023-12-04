import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://ophficmxowztullsncau.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9waGZpY214b3d6dHVsbHNuY2F1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE2NTQ0NDcsImV4cCI6MjAxNzIzMDQ0N30.fLyQfAbh-hUP0NHHpN47F0RmrtMCFqbkXOK5mAs_6rg')

