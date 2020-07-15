import {uuid} from 'uuidv4';

class Transacao{
  id_transacao:string;
  descricao:string;
  valor:Float32Array;
  tipo_receita: string;

  constructor ({descricao, valor, tipo_receita}: Omit<Transacao, 'id_transacao'>){
    this.id_transacao = uuid(),
    this.descricao = descricao,
    this.valor = valor,
    this.tipo_receita = tipo_receita
  }
}

export default Transacao;
