import Transacao from '../models/transacao';
import TransacaoRepository from '../repositories/transacao'

interface Request{
  id_transacao:string;
  descricao:string,
  valor:Float32Array,
  tipo_receita:string
}

class CreateTransacaoService{
  private transacoesRepository:TransacaoRepository;

  constructor(transacoesRepository:TransacaoRepository){
    this.transacoesRepository = transacoesRepository;
  }

  public execute({id_transacao, descricao, valor, tipo_receita}:Request):Transacao{
    const transacao = this.transacoesRepository.create({
      id_transacao,
      descricao,
      valor,
      tipo_receita
    });
    return transacao;
  }
}

export default CreateTransacaoService;
