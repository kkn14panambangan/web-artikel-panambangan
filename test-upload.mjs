import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://uarfbwwhfbfxabklgqzf.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhcmZid3doZmJmeGFia2xncXpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgxNzEyMzksImV4cCI6MjEwMzc0NzIzOX0.3PQQxsNMsMdT7Q2imQN2dt7fC3Svzp45Kq9cJgdkypc";
const supabase = createClient(supabaseUrl, supabaseKey);

async function test() {
  console.log('Testing upload...');
  const { data, error } = await supabase.storage.from('uploads').upload('test.txt', 'hello world', { contentType: 'text/plain' });
  console.log('Error:', error);
  console.log('Data:', data);
}

test();
