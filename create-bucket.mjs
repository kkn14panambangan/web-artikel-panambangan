import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://uarfbwwhfbfxabklgqzf.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhcmZid3doZmJmeGFia2xncXpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgxNzEyMzksImV4cCI6MjEwMzc0NzIzOX0.3PQQxsNMsMdT7Q2imQN2dt7fC3Svzp45Kq9cJgdkypc";

const supabase = createClient(supabaseUrl, supabaseKey);

async function createBucket() {
  console.log('Attempting to create bucket...');
  const { data, error } = await supabase.storage.createBucket('uploads', {
    public: true,
    allowedMimeTypes: ['image/png', 'image/jpeg', 'application/pdf'],
    fileSizeLimit: 10485760
  });
  console.log('Error:', error);
  console.log('Data:', data);
}

createBucket();
