import {uuid} from 'uuidv4';

class User{
  id_nome:string;
  nome:string;
  email:string;
  senha: string;

  constructor ({nome, email, senha}: Omit<User, 'id_nome'>){
    this.id_nome = uuid(),
    this.nome = nome,
    this.email = email,
    this.senha = senha
  }
}

export default User;
