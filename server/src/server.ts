import express from 'express'
import cors from 'cors'
import { routes } from './routes';

const app = express();

// GET = Buscar informações do backend
// POST = Cadastrar informações do backend
// PUT = Atualizar informações de uma entidade 
// PATCH = Atualizar uma informação única de uma entidade 
// DELETE = Deletar uma informação

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
    console.log('HTTP server running!');
});
