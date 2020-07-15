const express = require('express');
const {User, Transacao} = require('./models');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.urlencoded({ extended: false }));

//USER
app.get('/list', async(req, res) =>{
  try{
    const users = await User.findAll();
    return res.json(users);
  } catch(err){
    return res.status(400).json({
      error:err.message
    });
  }
})

app.post('/create', async(req, res) => {
  try {
    const {
      nome, 
      email, 
      senha} = req.body;

      const user = await User.create({
        nome,
        email,
        senha
      });
      return res.status(201).json(user);
  } catch(err) {
    return res.status(400).json({
      error: err.message
    });
  }
});

//TRANSAÇÃO
app.get('/listTransacao', async(req, res) =>{
  try{
    const transacoes = await Transacao.findAll();
    return res.json(transacoes);
  } catch(err){
    return res.status(400).json({
      error:err.message
    });
  }
})

app.post('/createTransacao', async(req, res) => {
  try {
    const {
      descricao, 
      valor, 
      tipo_receita} = req.body;

      const transacoes = await Transacao.create({
        descricao,
        valor,
        tipo_receita
      });
      return res.status(201).json(transacoes);
  } catch(err) {
    return res.status(400).json({
      error: err.message
    });
  }
});

app.listen(3000);
