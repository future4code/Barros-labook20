import { PostBusiness } from './../business/postBusiness';
import { UserController } from './../controller/userController';
import  express  from 'express';

export const postsRouter = express.Router()
const postController = new PostBusiness()

postsRouter.post('/create', postController.createPost )
postsRouter.get('/searchById/:id', postController.searchPostById)