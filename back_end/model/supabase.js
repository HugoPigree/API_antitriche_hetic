import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://bgraqhclnjjvrwjojsyb.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJncmFxaGNsbmpqdnJ3am9qc3liIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0OTY5MDUsImV4cCI6MjAyNTA3MjkwNX0.Fwrw5MCpJKt0Z3zolcrlHc4FSYKNG9sNi72Cy8AE4Y0"
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