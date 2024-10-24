const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const port = 26000;

nunjucks.configure('views', {
  express: app,
  autoescape: true
});

app.use(express.static('public'));

const salasDeAula = [
  { salasdeaulaid: 1, descricao: 'Sala 101', localizacao: 'Bloco A', capacidade: 30, removido: false },
  { salasdeaulaid: 2, descricao: 'Sala 102', localizacao: 'Bloco B', capacidade: 40, removido: false },
];

app.get('/', (req, res) => {
  res.render('index.njk');
});

app.get('/manutSalaDeAula', (req, res) => {
  res.render('manutSalaDeAula.njk', { salasDeAula });
});

app.listen(port, () => {
  console.log(`Servidor Nunjucks rodando na porta ${port}`);
});
