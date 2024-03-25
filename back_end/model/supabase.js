import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ephsawxsecyzywcwqngj.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwaHNhd3hzZWN5enl3Y3dxbmdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEyOTkwODgsImV4cCI6MjAyNjg3NTA4OH0.V8n-vxkiZZyWKaSD985XPy6CPMe9tmUUy74TwTq7olc"
const supabase = createClient(supabaseUrl, supabaseKey)


async function getEleves(){
const { data, error } = await supabase
  .from('eleve')
  .select()
  return {data,error}
}


async function getEleve(id){
// SELECT* FROM notes WHERE id=4
let { data, error } = await supabase
  .from('eleve')
  .select()
  .eq('id',id)
return {data,error}
}

async function addEleve(info) {
  const { data, error } = await supabase
    .from('eleve')
    .insert(info)
    .select();
  
  if (error) {
    return { data: null, error: error.message };
  }

  return { data, error: null };
}



export{getEleves, getEleve, addEleve}