import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/pranchas', (req, res) => {
  res.send('Bem-vindo à Loja de Pranchas!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});