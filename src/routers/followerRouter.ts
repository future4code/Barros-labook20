import { FollowsController } from './../controller/FollowsController';

import  express  from 'express';

export const followerRouter = express.Router()

const followerController = new FollowsController() 


followerRouter.get('/:id/follow/:idFollow',followerController.follows)
followerRouter.get('/:id/unFollow/:idFollow',followerController.unFollow)