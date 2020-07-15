import {Router} from 'express';
import UserRepository from '../repositories/user';
import CreateUserService from '../services/CreateUserService';

const userRouter = Router();
const userRepository = new UserRepository();

userRouter.get('/user', (require, response) =>{
  const users = userRepository.all();
  return response.json(users);
});

userRouter.post('/user', (request, response) =>{
  try{
    const {id_nome,nome, email, senha} = request.body;
    const createUser = new CreateUserService(userRepository);
    const user = createUser.execute({id_nome,nome, email, senha});
    return response.json(user)
  }
  catch(err){
    return response.status(400).json({err: err.message})
  }
})

export default userRouter;
