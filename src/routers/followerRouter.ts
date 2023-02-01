import { FollowsController } from './../controller/FollowsController';

import  express  from 'express';

export const followerRouter = express.Router()

const followerController = new FollowsController() 


followerRouter.get('/follow',followerController.follows)
followerRouter.get('/unfollow',followerController.unFollow)