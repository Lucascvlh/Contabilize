import User from '../models/user';

interface CreateUser{
  id_nome:string;
  nome:string;
  email:string;
  senha:string
}

class UserRepository{
  private users:User[];

  public all():User[]{
    return this.users;
  }

  constructor(){
    this.users = [];
  }
  public create({email, senha, nome}: CreateUser):User{
    const user = new User({ email, senha, nome});
    this.users.push(user);
    return user;
  }
}

export default UserRepository;
