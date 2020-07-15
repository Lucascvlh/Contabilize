import {Router} from 'express';
import userRouter from './users.route'
import transacaoRouter from './transacao.route'


const routes = Router();

routes.use('/incca', userRouter, transacaoRouter);

export default routes;
