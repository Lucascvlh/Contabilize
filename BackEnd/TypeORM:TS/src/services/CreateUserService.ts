import User from '../models/user';
import UserRepository from '../repositories/user'

interface Request{
  id_nome:string;
  nome:string,
  email:string,
  senha:string
}

class CreateUserService{
  private usersRepository:UserRepository;

  constructor(usersRepository:UserRepository){
    this.usersRepository = usersRepository;
  }

  public execute({id_nome, nome, email, senha}:Request):User{
    const user = this.usersRepository.create({
      id_nome,
      nome,
      email,
      senha
    });
    return user;
  }
}

export default CreateUserService;
