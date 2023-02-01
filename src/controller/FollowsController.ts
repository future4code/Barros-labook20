import { IdsType } from './../models/Follows';
import { FollowsBusiness } from './../business/FollowsBusiness';
import { Request, Response } from "express";

export class FollowsController{
    followsBusines = new FollowsBusiness()

    follows = async (req:Request, res:Response)=>{
      try {
        const {idUser, idFollow} = req.params

        const ids: IdsType = {
            idUser,
            idFollower: idFollow
        }

        await this.followsBusines.follows(ids)
        res.status(200).send('Voce adicionou uma nova amizade...')

      } catch (error:any) {
        res.status(400).send(error.message)
      }
    }

    unFollow = async (req:Request, res:Response)=>{
      try {
        const {idUser, idFollow} = req.params

        const ids: IdsType = {
            idUser,
            idFollower: idFollow
        }

        await this.followsBusines.unFollow(ids)
        res.status(200).send('Voce adicionou uma nova amizade...')
      } catch (error:any) {
          throw new Error(error.message);
          
      }
  }
}