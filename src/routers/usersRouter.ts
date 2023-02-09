import { UserController } from './../controller/userController';
import  express  from 'express';

export const usersRouter = express.Router()
const userController = new UserController()

usersRouter.post('/create', userController.createPost)