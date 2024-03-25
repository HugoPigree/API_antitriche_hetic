import express from 'express'
import cors from 'cors'
import {getEleves, getEleve, addEleve} from './model/supabase.js'

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());


app.get('/', async(req, res) => {
  const {data, error} = await getEleves()
  res.json(data)
})

// le chemin complet c'est /api/v1/eleve?id=1 ou autre
app.get('/api/v1/eleve', async(req, res) => {
  const id= req.query.id
  const {data, error} = await getEleve(id)
  res.json(data)

})

app.post('/api/v1/eleve', async(req, res) => {
  const {data, error} = await addEleve(req.body);
  res.json(data);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})