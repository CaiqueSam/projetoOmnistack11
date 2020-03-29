const express = require('express'); 
const cors = require('cors');
const routes = require('./routes');
const app = express();

/*Converter json em algo entendível*/
app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Rotas e Recursos
 * 
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação no backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 * 
 * Tipos de parâmetro:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)]
 * Route Params: Parâmetros utilizados para identificar recursos. (exemplo /:id)
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
 * 
 * 
 * 
 */



app.listen(3333);