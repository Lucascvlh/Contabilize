import {Router} from 'express';
import TransacaoRepository from '../repositories/transacao';
import CreateTransacaoService from '../services/CreateTransacaoService';

const transacaoRouter = Router();
const transacaoRepository = new TransacaoRepository();

transacaoRouter.get('/transacao', (require, response) =>{
  const transacoes = transacaoRepository.all();
  return response.json(transacoes);
});

transacaoRouter.post('/transacao', (request, response) =>{
  try{
    const {id_transacao,descricao, valor, tipo_receita} = request.body;
    const createTransacao = new CreateTransacaoService(transacaoRepository);
    const transacao = createTransacao.execute({id_transacao,descricao, valor, tipo_receita});
    return response.json(transacao)
  }
  catch(err){
    return response.status(400).json({err: err.message})
  }
})

export default transacaoRouter;
