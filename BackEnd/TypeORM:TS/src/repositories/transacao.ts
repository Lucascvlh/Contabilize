import Transacao from '../models/transacao';

interface CreateTransacao{
  id_transacao:string;
  descricao:string;
  valor:Float32Array;
  tipo_receita:string;
}

class TransacaoRepository{
  private transacoes:Transacao[];

  public all():Transacao[]{
    return this.transacoes;
  }

  constructor(){
    this.transacoes = [];
  }
  public create({descricao, valor, tipo_receita}: CreateTransacao):Transacao{
    const transacao = new Transacao({descricao, tipo_receita, valor});
    this.transacoes.push(transacao);
    return transacao;
  }
}

export default TransacaoRepository;
